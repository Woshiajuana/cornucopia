<template>
    <div class="home-view-wrap">
        <div class="cell" v-for="(item, index) in 2" :key="index">
            <p class="cell-date">2020年{{index}}月</p>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
        </div>
        <article-cell-loading></article-cell-loading>
    </div>
</template>
<script>

    import ArticleCell from 'src/components/article-cell'
    import ArticleCellLoading from 'src/components/article-cell-loading'

    export default {
        components: {
            ArticleCell,
            ArticleCellLoading,
        },
    }
</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .home-view-wrap{
    }
    .cell{

    }
    .cell-date{
        @extend %df;
        @extend %aic;
        @extend %c6;
        @extend %fwb;
        @extend %ps;
        top: j(50);
        padding-left: j(20);
        font-size: j(18);
        background-color: #f2f2f2;
        height: j(50);
    }
</style>
