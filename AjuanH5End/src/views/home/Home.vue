<template>
    <div class="home-view">
        <scroller lock-x ref="scrollerEvent">
            <header class="home-header">
                <a href="#/search" class="home-search-link">搜索文章</a>
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
        height: j(120);
        background-color: $mc;
    }
    .home-search-link{
        @extend %db;
        @extend %tac;
        @extend %bgwhite;
        margin: 0 j(16);
        height: j(36);
        line-height: j(36);
        border-radius: j(36);
        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
        color: #333;
        font-size: j(14);
    }
</style>
