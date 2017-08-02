<template>
    <div class="home-view">
        <scroller lock-x ref="scrollerEvent">
            <header class="home-header">
                <div class="home-header-top">
                    <i class="home-header-top-filter-btn"></i>
                </div>
                <a href="#/search" class="home-header-search-link">搜索文章</a>
            </header>
        </scroller>
    </div>
</template>
<script>
    import { Scroller } from 'vux'
    export default {
        name: 'home',
        components: {
            Scroller
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
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
        height: j(35);
    }
</style>
