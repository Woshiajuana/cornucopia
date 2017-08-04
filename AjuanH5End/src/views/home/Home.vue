<template>
    <div class="home-view" :class="{ 'active': is_open }">
        <!--背景LOGO-->
        <logo-bg></logo-bg>
        <!--/背景LOGO-->
        <!--主体内容-->
        <scroller
            lock-x
            scrollbar-y
            use-pulldown
            use-pullup
            :backSpeed="300"
            :height="scroller_height"
            @on-pulldown-loading="refreshHandle"
            @on-pullup-loading="loadMoreHandle"
            @on-scroll="scrollHandle"
            ref="scroller" v-model="scroller_status">
            <!--content slot-->
            <div class="home-inner">
                <header class="home-header">
                    <div class="home-header-top">
                        <div class="home-header-top-date">
                            <div class="home-header-top-date-con">
                                <span class="home-header-top-date-con-day">03</span>
                                <svg @click="is_open = !is_open" slot="icon" class="home-header-date-icon">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#date-icon"></use>
                                </svg>
                            </div>
                            2017-08-03
                        </div>
                        <svg @click="is_open = !is_open" slot="icon" class="home-header-top-filter-btn">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#filter-icon"></use>
                        </svg>
                    </div>
                    <a href="#/search" class="home-header-search-link">搜索文章</a>
                </header>
                <div class="homer-inner">
                    <article-list-item v-for="(item,index) in article_arr" :key="index"></article-list-item>
                </div>
            </div>
            <!--pulldown slot-->
            <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
                <span v-show="scroller_status.pulldownStatus === 'default'"></span>
                <span class="pulldown-arrow" v-show="scroller_status.pulldownStatus === 'down' || scroller_status.pulldownStatus === 'up'" :class="{'rotate': scroller_status.pulldownStatus === 'up'}">↓</span>
                <span v-show="scroller_status.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            </div>
            <!--pullup slot-->
            <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
                <span v-show="scroller_status.pullupStatus === 'default'"></span>
                <span class="pullup-arrow" v-show="scroller_status.pullupStatus === 'default' || scroller_status.pullupStatus === 'up' || scroller_status.pullupStatus === 'down'" :class="{'rotate': scroller_status.pullupStatus === 'down'}">↑</span>
                <span v-show="scroller_status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            </div>
        </scroller>
        <!--/主体内容-->
        <!--返回顶部-->
        <return-top :top_dir="top_dir" @returnTop="returnTopHandle"></return-top>
        <!--/返回顶部-->
        <!--遮罩-->
        <transition name="fade">
            <div class="home-filter-mask" v-show="is_open" @click="is_open = false"></div>
        </transition>
        <!--/遮罩-->
        <!--过滤筛选-->
        <div class="home-filter-wrap">
            过滤
        </div>
        <!--/过滤筛选-->
    </div>
</template>
<script>
    import GestureMobile from '../../assets/lib/GestureMobile'
    import ArticleListItem from '../../components/article-list-item.vue'
    import ReturnTop from '../../components/return-top.vue'
    import LogoBg from '../../components/logo-bg.vue'
    import { Scroller, Spinner } from 'vux'
    export default {
        name: 'home',
        data () {
            return {
                article_arr: 10,
                is_open: false,
                scroller_height: '',
                top_dir: 0,
                scroller_status: {
                    pullupStatus: 'default',
                    pulldownStatus: 'default'
                }
            }
        },
        created () {
            this.$nextTick(() => {
                this.bindGestureMobile(); /**绑定手势*/
                this.initScrollerVisualHeight(); /**初始化滚动可视高度*/
            })
        },
        methods: {
            /**初始化滚动可视高度*/
            initScrollerVisualHeight () {
                var nd_bar = window.document.getElementsByClassName('nav-bar-wrap')[0];
                nd_bar && (this.scroller_height = '-' + nd_bar.offsetHeight);
            },
            /**绑定手势*/
            bindGestureMobile () {
                let _this = this;
                GestureMobile(this.$el,{
                    leftCallBackFun () { _this.is_open = true; },
                    rightCallBackFun () { _this.is_open = false; }
                });
            },
            /**下拉刷新*/
            refreshHandle () {
                setTimeout(() => {
                    this.article_arr = 10;
                    this.$refs.scroller.donePulldown();
                }, 2000)
            },
            /**上拉加载*/
            loadMoreHandle () {
                setTimeout(() => {
                    this.article_arr += 5;
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.$refs.scroller.donePullup();
                        }, 10)
                    })
                }, 2000)
            },
            /**滚动页面回调事件*/
            scrollHandle ( { top } ) {
                this.top_dir = top;
            },
            /**回顶部事件*/
            returnTopHandle () {
                this.$refs.scroller.reset({top:0});
                this.top_dir = 0;
            }
        },
        components: {
            Scroller,
            Spinner,
            ArticleListItem,
            ReturnTop,
            LogoBg
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .home-view{
        @include tst(all,.5s);
        background-color: #554a63;
        &.active{
            @include tft(translate3d(-83%,0,0))
        }
        .rotate {
            @include tfr(-180deg);
        }
        .pulldown-arrow,
        .pullup-arrow{
            @extend %db;
            @extend %cfff;
            transition: all linear 0.2s;
            -webkit-transition: all linear 0.2s;
            font-size: j(12);
        }
        .pullup-arrow{
            height: 40px;
            line-height: 40px;
        }
        .pulldown-arrow {
            height: 60px;
            line-height: 60px;
        }
        .xs-plugin-pulldown-container,
        .xs-plugin-pullup-container{
            @extend %pr;
            span{
                @extend %pa;
                @extend %l0;
                @extend %w100;
                @extend %h100;
                svg{
                    stroke: #fff;
                    @extend %pa;
                    @extend %t50;
                    @extend %l50;
                    margin-top: -14px;
                    margin-left: -14px;
                }
            }
        }
    }
    .xs-container,
    .home-inner{
        @extend %pr;
        min-height: 100%;
    }

    .home-header{
        @extend %oh;
        height: j(100);
        background-color: $mc;
        padding: j(10) 0;
    }
    .home-header-search-link{
        @extend %db;
        @extend %tac;
        @extend %bgwhite;
        @extend %c3;
        margin: j(10) j(16);
        height: j(36);
        line-height: j(36);
        border-radius: j(36);
        box-shadow: 0 j(3) j(3) 0 rgba(0,0,0,.2);
        font-size: j(14);
    }
    .home-header-top{
        @extend %pr;
        color: #f2f2f2;
        height: j(35);
        line-height: j(35);
    }
    .home-header-top-date{
        @extend %pa;
        @extend %t0;
        @extend %cp;
        @extend %h100;
        left: j(20);
        font-size: j(14);
        padding-left: j(30);
        &:after{
            @extend %pa;
            @extend %t50;
            margin-top: j(-3);
            right: j(-15);
            content: '';
            width: 0;
            height: 0;
            border-left: j(5) solid transparent;
            border-right: j(5) solid transparent;
            border-top: j(6) solid #f2f2f2;
        }
    }
    .home-header-top-date-con{
        @extend %pa;
        @extend %t50;
        @extend %l0;
        margin-top: j(-12);
        width: j(24);
        height: j(24);
    }
    .home-header-top-date-con-day{
        @extend %pa;
        @extend %tac;
        @extend %b0;
        @extend %l0;
        @extend %r0;
        @extend %cfff;
        font-size: j(12);
        line-height: 1.4;
    }
    .home-header-date-icon{
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %l0;
        @extend %r0;
        @extend %w100;
        @extend %h100;
        fill: #fff;
    }
    .home-header-top-filter-btn{
        @extend %pa;
        @extend %cp;
        @extend %t50;
        right: j(20);
        margin-top: j(-12);
        width: j(25);
        height: j(25);
        fill: #f2f2f2;
    }
    .home-filter-wrap{
        @extend %pa;
        @extend %b0;
        @extend %t0;
        width: 83%;
        right: -83%;
        background-color: #fff;
    }
    .home-filter-mask{
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %r0;
        @extend %l0;
        background: rgba(55,58,71,.9);
    }
</style>
