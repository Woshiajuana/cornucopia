<template>
    <div class="nav-menu-wrap">
        <h2 class="nav-menu-title">菜单</h2>
        <div class="nav-menu-inner">
            <a href="#/" class="nav-menu-inner-item">全部文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
            <a href="#/" class="nav-menu-inner-item">HTML文章</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-menu'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .nav-menu-wrap{
        z-index: 1;
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %oh;
        @include tst(box-shadow,1s);
        left: -300px;
        width: 300px;
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    }
    .nav-menu-title{
        @extend %f16;
        @extend %c3;
        @extend %tar;
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
    }
    .nav-menu-inner{
        @extend %tar;
        padding: 0 20px;
    }
    .nav-menu-inner-item{
        @extend %db;
        @extend %c0;
        padding-right: 20px;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
    }
</style>
