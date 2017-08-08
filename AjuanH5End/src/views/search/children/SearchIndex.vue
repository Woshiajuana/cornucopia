<template>
    <div class="search-label-wrap">
        <section class="search-label-section">
            <h2 class="search-label-title">
                历史搜索
                <svg class="search-label-delete">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-icon"></use>
                </svg>
            </h2>
            <a class="search-label-link" href="#/search/result/1">JAVASCRIPT</a>
        </section>
        <section class="search-label-section">
            <h2 class="search-label-title">热门搜索</h2>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
            <a class="search-label-link" href="#">JAVASCRIPT</a>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'search-index'
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .search-label-wrap{
        padding: 0 j(12);
    }
    .search-label-section{
        @extend %clearfix;
        margin-top: j(20);
        &:first-child{
            margin-top: 0;
        }
    }
    .search-label-title{
        @extend %pr;
        @extend %fwb;
        @extend %c6;
        font-size: j(16);
        height: j(35);
        line-height: j(35);
    }
    .search-label-delete{
        @extend %pa;
        @extend %t50;
        @extend %r0;
        fill: #999;
        margin-top: j(-8);
        width: j(16);
        height: j(16);

    }
    .search-label-link{
        @extend %fl;
        @extend %c6;
        font-size: j(14);
        padding: j(5);
        background-color: #f2f2f2;
        margin: 0 j(12) j(12) 0;
    }

</style>
