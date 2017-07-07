<template>
    <div id="app" :class="{ 'nav-menu-open': isOpenOrHideNavMenu, 'set-up-open': isOpenOrHideSetUp }">
        <!--导航菜单-->
        <nav-menu></nav-menu>
        <!--/导航菜单-->
        <!--主体内容-->
        <div class="view-wrap">
            <div class="view-inner">
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
        </div>
        <!--/主体内容-->
        <!--遮罩-->
        <page-mask></page-mask>
        <!--/遮罩-->
        <!--文章目录-->
        <article-directory></article-directory>
        <!--/文章目录-->
        <!--设置选项-->
        <set-up></set-up>
        <!--/设置选项-->
        <!--svg图库-->
        <svg-template></svg-template>
        <!--/svg图库-->
    </div>
</template>
<script>
    import NavMenu from './components/nav-menu.vue'
    import ArticleDirectory from './components/article-directory.vue'
    import PageHeader from './components/page-header.vue'
    import PageFooter from './components/page-footer.vue'
    import PageMask from './components/page-mask.vue'
    import SvgTemplate from './components/svg-template.vue'
    import SetUp from './components/set-up.vue'
    export default {
        name: 'app',
        computed: {
            isOpenOrHideNavMenu () {
                return this.$store.state.is_open_or_hide_nav_menu;
            },
            isOpenOrHideSetUp () {
                return this.$store.state.is_open_or_hide_set_up;
            }
        },
        components: {
            NavMenu,
            ArticleDirectory,
            PageHeader,
            PageFooter,
            PageMask,
            SvgTemplate,
            SetUp
        }
    }
</script>
<style lang="scss">
    @import "./assets/scss/common";
    #app{
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        @include tst(all,0.5s);
        background-color: #eee;
        &.nav-menu-open{
            @include tft(translate3d(300px,0,0));
        };
        &.set-up-open{
            @include tft(translate3d(-300px,0,0));
        }
    }
    .view-wrap{
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        @extend %oh;
        background-color: #eee;
    }
    .view-inner{
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %l0;
        overflow-y: scroll;
        right: -18px;
    }
</style>
