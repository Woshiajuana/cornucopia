<template>
    <div class="nav-bar-wrap">
        <tabbar v-if="isNotFirst">
            <tabbar-item :selected="navIndex == 1" link="/">
                <svg slot="icon" class="nav-item nav-home-item">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav-home"></use>
                </svg>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item :selected="navIndex == 2" link="/account">
                <svg slot="icon" class="nav-item nav-account-item">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav-account"></use>
                </svg>
                <span slot="label">记账</span>
            </tabbar-item>
            <tabbar-item :selected="navIndex == 3" link="/bill">
                <svg slot="icon" class="nav-item nav-bill-item">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav-bill"></use>
                </svg>
                <span slot="label">账单</span>
            </tabbar-item>
            <tabbar-item :selected="navIndex == 4" link="/chart">
                <svg slot="icon" class="nav-item nav-chart-item">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav-chart"></use>
                </svg>
                <span slot="label">分析</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
    import { Tabbar, TabbarItem } from 'vux'
    export default {
        name: 'nav-bar',
        computed: {
            navIndex () {
                return this.$store.state.nav_index;
            },
            isNotFirst () {
                return this.$store.state.is_not_first;
            }
        },
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .nav-bar-wrap{
        .nav-item{
            fill: #999;
            &.nav-home-item{
                width: 27px;
                height: 27px;
            }
            &.nav-account-item{
                margin-top: 4px;
                width: 20px;
                height: 20px;
            }
            &.nav-bill-item{
                margin-top: 3px;
                width: 22px;
                height: 22px;
            }
            &.nav-chart-item{
                margin-top: 5px;
                width: 23px;
                height: 23px;
            }
        }
        .weui-tabbar__item{
            span{
                color: #999 !important;
            }
        }
        .weui-bar__item_on{
            .nav-item{
                fill: #58B7FF;
            }
            span{
                padding: 0 3px;
                border-radius: 5px;
                color: #fff !important;
                background-color: #58B7FF;
            }
        }
    }

</style>
