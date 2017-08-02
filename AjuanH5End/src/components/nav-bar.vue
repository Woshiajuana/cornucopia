<template>
    <tabbar class="nav-bar-wrap">
        <tabbar-item :selected="navIndex == 1" link="/">
            <svg slot="icon" class="nav-item nav-home-item">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home-icon"></use>
            </svg>
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :selected="navIndex == 2" link="/find">
            <svg slot="icon" class="nav-item nav-account-item">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#find-icon"></use>
            </svg>
            <span slot="label">发现</span>
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
</template>
<script>
    import { Tabbar, TabbarItem } from 'vux'
    export default {
        name: 'nav-bar',
        computed: {
            navIndex () {
                return this.$store.state.nav_index;
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
        height: j(50);
        .weui-tabbar__icon{
            width: j(27);
            height: j(27);
        }
        .weui-tabbar__label{
            line-height: inherit;
            font-size: j(10);
        }
        .nav-item{
            fill: #999;
            &.nav-home-item{
                margin-top: j(3);
                width: j(21);
                height: j(21);
            }
            &.nav-account-item{
                margin-top: j(4);
                width: j(20);
                height: j(20);
            }
            &.nav-bill-item{
                margin-top: j(3);
                width: j(22);
                height: j(22);
            }
            &.nav-chart-item{
                margin-top: j(5);
                width: j(23);
                height: j(23);
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
                padding: 0 j(3);
                border-radius: j(5);
                color: #fff !important;
                background-color: #58B7FF;
            }
        }
    }

</style>
