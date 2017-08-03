<template>
    <div class="home-view" :class="{ 'active': is_open }">
        <scroller
            roller
            lock-x
            scrollbar-y
            use-pullup
            use-pulldown
            @on-pullup-loading="loadMore"
            @on-pulldown-loading="refresh"
            ref="scroller"
            v-model="pullstatus">
            <!--<div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down">-->
                <!--<span v-show="pullstatus.pulldownStatus === 'default'"></span>-->
                <!--<span class="pulldown-arrow"-->
                      <!--v-show="pullstatus.pulldownStatus === 'down' || pullstatus.pulldownStatus === 'up'"-->
                      <!--:class="{'rotate': pullstatus.pulldownStatus === 'up'}">↓</span>-->
                <!--<span class="pull-loading" v-show="pullstatus.pulldownStatus === 'loading'"><spinner-->
                    <!--type="ios-small"></spinner><label>刷新中</label></span>-->
            <!--</div>-->
            <header class="home-header">
                <div class="home-header-top">
                    <svg @click="is_open = !is_open" slot="icon" class="home-header-top-filter-btn">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#filter-icon"></use>
                    </svg>
                </div>
                <a href="#/search" class="home-header-search-link">搜索文章</a>
            </header>

            <!--<div v-show="pullstatus.pullupStatus !== 'default'" slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up">-->
                <!--<span v-show="pullstatus.pullupStatus === 'default'"></span>-->
                <!--<span class="pullup-arrow"-->
                      <!--v-show="pullstatus.pullupStatus === 'down' || pullstatus.pullupStatus === 'up'"-->
                      <!--:class="{'rotate': pullstatus.pullupStatus === 'up'}">↓</span>-->
                <!--<span class="pull-loading" v-show="pullstatus.pullupStatus === 'loading'"><spinner-->
                    <!--type="ios-small"></spinner><label>加载中</label></span>-->
            <!--</div>-->
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
    import { Scroller,Spinner } from 'vux'
    export default {
        name: 'home',
        data () {
            return {
                is_open: false,
                pullstatus: {
                    pullupStatus: 'default',
                    pulldownStatus: 'default'
                }
            }
        },
        created () {
            this.$nextTick(() => {
                let _this = this;
                GestureMobile(this.$el,{
                    leftCallBackFun () {
                        _this.is_open = true;
                    },
                    rightCallBackFun () {
                        _this.is_open = false;
                    }
                });
            })
        },
        methods: {
            /**上拉加载更多*/
            loadMore () {
                setTimeout(() => {
                    setTimeout(() => {
                        this.$refs.scroller.donePullup()
                    }, 10);
                }, 500)
            },
            /**下拉刷新*/
            refresh () {
                setTimeout(() => {
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.$refs.scroller.donePulldown()
                        }, 10)
                    })
                }, 500)
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
