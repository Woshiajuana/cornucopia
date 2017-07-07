<template>
    <div id="app">
        <!--导航菜单-->
        <nav-menu></nav-menu>
        <!--/导航菜单-->
        <!--主体内容-->
        <div class="view-wrap">
            <!--头部-->
            <page-header></page-header>
            <!--/头部-->
            <!--内容-->
            <router-view></router-view>
            <!--/内容-->
            <!--尾部-->
            <page-footer></page-footer>
            <!--/尾部-->
        </div>
        <!--/主体内容-->
        <!--文章目录-->
        <article-directory></article-directory>
        <!--/文章目录-->
    </div>
</template>
<script>
    import NavMenu from './components/nav-menu.vue'
    import ArticleDirectory from './components/article-directory.vue'
    import PageHeader from './components/page-header.vue'
    import PageFooter from './components/page-footer.vue'
    export default {
        name: 'app',
        components: {
            NavMenu,
            ArticleDirectory,
            PageHeader,
            PageFooter
        }
    }
</script>
<style lang="scss">
    @import "./assets/scss/common";
</style>
