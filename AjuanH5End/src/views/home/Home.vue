<template>
    <div class="home-view" :class="{ 'active': is_open }">
        <scroller
            lock-x
            scrollbar-y
            use-pulldown
            use-pullup
            :backSpeed="300"
            :height="scroller_height"
            @on-pulldown-loading="refreshHandle"
            @on-pullup-loading="loadMoreHandle"
            ref="scroller" v-model="scroller_status">
            <!--content slot-->
            <div class="home-wrap">
                <header class="home-header">
                    <div class="home-header-top">
                        <svg @click="is_open = !is_open" slot="icon" class="home-header-top-filter-btn">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#filter-icon"></use>
                        </svg>
                    </div>
                    <a href="#/search" class="home-header-search-link">搜索文章</a>
                </header>
                <div class="homer-inner">

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
        <transition name="fade">
            <div class="home-filter-mask" v-show="is_open" @click="is_open = false"></div>
        </transition>
        <div class="home-filter-wrap">
            过滤
        </div>
    </div>
</template>
<script>
    import GestureMobile from '../../assets/lib/GestureMobile'
    import { Scroller, Spinner } from 'vux'
    export default {
        name: 'home',
        data () {
            return {
                is_open: false,
                scroller_height: '',
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
                    this.$refs.scroller.donePulldown()
                }, 2000)
            },
            /**下拉刷新*/
            loadMoreHandle () {
                setTimeout(() => {
                    setTimeout(() => {
                        this.$refs.scroller.donePullup()
                    }, 10)
                }, 2000)
            }
        },
        components: {
            Scroller,
            Spinner
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .home-view{
        @include tst(all,.5s);
        &.active{
            @include tft(translate3d(-83%,0,0))
        }
        .rotate {
            transform: rotate(-180deg);
        }
        .pullup-arrow,
        .pulldown-arrow {
            @extend %db;
            @extend %c6;
            transition: all linear 0.2s;
            -webkit-transition: all linear 0.2s;
            font-size: j(12);
        }
    }
    .xs-container,
    .home-wrap{
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
        height: j(35);
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
