<template>
    <div class="home-view-wrap">
        <div class="cell" v-for="(item, index) in 20" :key="index">
            <dt class="cell-dt">2020年{{index}}月</dt>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
        </div>
    </div>
</template>
<script>

    import ArticleCell from 'src/components/article-cell'

    export default {
        components: {
            ArticleCell,
        },
    }
</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .home-view-wrap{
    }
    .cell-dt{
        @extend %df;
        @extend %aic;
        @extend %c6;
        @extend %fwb;
        position:sticky;
        position: -webkit-sticky;
        position: sticky;
        top: j(50);
        padding-left: j(20);
        font-size: j(18);
        background-color: #f2f2f2;
        height: j(50);
    }
    .cell-dd{
        padding: j(20);
        border-bottom: 1px solid #ddd;
    }
    .title{
        @extend %c3;
        @extend %db;
        @extend %fwb;
        font-size: j(17);
        line-height: j(27);
        margin-bottom: j(4);
        &:hover{
            text-decoration: underline;
        }
    }
    .abstract{
        @extend %c9;
        line-height: j(24);
        font-size: j(13);
    }
</style>
