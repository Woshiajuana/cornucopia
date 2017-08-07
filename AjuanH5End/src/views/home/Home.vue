<template>
    <div class="home-view">
        <!--背景LOGO-->
        <logo-bg></logo-bg>
        <!--/背景LOGO-->
        <!--主体内容-->
        <div class="home-wrap" :class="{ 'active': is_open }">
            <!--数据-->
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
                                    <svg @click="is_open = !is_open" class="home-header-date-icon">
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
                    <div class="home-con">
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
            <!--/数据-->
            <!--遮罩-->
            <transition name="fade">
                <div class="home-filter-mask" v-show="is_open" @click="is_open = false"></div>
            </transition>
            <!--/遮罩-->
            <!--过滤筛选-->
            <div class="home-filter-wrap">
                <header-wrap :is_h2="true" header_title="分类" :is_left_click="true" @headerLeftClick="headerLeftClickHandle"></header-wrap>
                <!--过滤主体-->
                <scroller
                    lock-x
                    scrollbar-y
                    :backSpeed="300"
                    :height="scroller_height"
                    ref="filter_scroller">
                    <!--content slot-->
                    <dl class="home-filter-inner">
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                        <dl class="home-filter-item"><a class="home-filter-item-link" href="#">JAVASCRIPT</a></dl>
                     </dl>
                </scroller>
                <!--/过滤主体-->
            </div>
            <!--/过滤筛选-->
        </div>
        <!--/主体内容-->
        <!--返回顶部-->
        <return-top :top_dir="top_dir" @returnTop="returnTopHandle"></return-top>
        <!--/返回顶部-->
    </div>
</template>
<script>
    import GestureMobile from '../../assets/lib/GestureMobile'
    import ArticleListItem from '../../components/article-list-item.vue'
    import ReturnTop from '../../components/return-top.vue'
    import HeaderWrap from '../../components/header-wrap.vue'
    import LogoBg from '../../components/logo-bg.vue'
    import { Scroller, Spinner } from 'vux'
    import DEFAULT_CONFIG from '../../assets/lib/DEFAULT_CONFIG'
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
                }, DEFAULT_CONFIG.SCROLL_TIME)
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
                }, DEFAULT_CONFIG.SCROLL_TIME)
            },
            /**滚动页面回调事件*/
            scrollHandle ( { top } ) {
                this.top_dir = top;
            },
            /**回顶部事件*/
            returnTopHandle () {
                this.$refs.scroller.reset({top:0});
                this.top_dir = 0;
            },
            /**过滤页面回退事件*/
            headerLeftClickHandle () {
                this.is_open = false;
            }
        },
        components: {
            Scroller,
            Spinner,
            HeaderWrap,
            ArticleListItem,
            ReturnTop,
            LogoBg
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .home-view{
        @extend %oh;
        background-color: $bgmc;
    }
    .home-wrap{
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %l0;
        @extend %b0;
        @include tst(all,.5s);
        &.active{
            @include tft(translate3d(-83%,0,0))
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
        background-color: #f2f2f2;
    }
    .home-filter-mask{
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %r0;
        @extend %l0;
        background: rgba(55,58,71,.9);
    }
    .home-filter-close{
        z-index: 1;
        @extend %pa;
        @extend %cp;
        @include br(50%);
        top: j(16);
        left: j(16);
        width: j(20);
        height: j(20);
        fill: #999;
    }
    .home-filter-inner{
        @extend %pr;
        @extend %tac;
        padding: j(20) 0 j(80);
    }
    .home-filter-title{
        font-size: j(18);
        margin-bottom: j(10);
    }
    .home-filter-item{
        font-size: j(14);
        height: j(36);
        line-height: j(36);
    }
    .home-filter-item-link{
        @extend %c3;
    }
</style>
