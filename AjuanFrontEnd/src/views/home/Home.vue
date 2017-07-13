<template>
    <!--首页-->
    <div class="home-view">
        <div class="article-wrap">
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
        </div>
    </div>
    <!--/首页-->
</template>
<script>
    import ArticleListItem from '../../components/article-list-item.vue'
    export default {
        name: 'home',
        components: {
            ArticleListItem
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .article-wrap{
        @extend %oh;
    }
</style>
