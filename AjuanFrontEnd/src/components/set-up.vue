<template>
    <div class="set-up-wrap">
        <h2 class="set-up-title">SET-UP</h2>
        <dl class="nav-menu-inner">
            <dt><a href="#/" class="nav-menu-inner-item active">全部</a></dt>
            <dt><a href="#/" class="nav-menu-inner-item">WEB前端相关</a></dt>
            <dd><a href="#/" class="nav-menu-inner-item">HTML</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">JAVASCRIPT</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">NODEJS</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">VUE</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">ANGULAR</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">CSS</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">CANVAS绘图</a></dd>
            <dd><a href="#/" class="nav-menu-inner-item">SVG绘图</a></dd>
            <dt><a href="#/" class="nav-menu-inner-item">后端开发相关</a></dt>
            <dd><a href="#/" class="nav-menu-inner-item">JAVA</a></dd>
            <dt><a href="#/" class="nav-menu-inner-item">数据库相关</a></dt>
            <dd><a href="#/" class="nav-menu-inner-item">MONGODB</a></dd>
            <dt><a href="#/" class="nav-menu-inner-item">其它</a></dt>
        </dl>
    </div>
</template>
<script>
    export default {
        name: 'set-up'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .set-up-wrap{
        z-index: 1;
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %oh;
        @include tst(box-shadow,1s);
        right: -300px;
        width: 300px;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
    .set-up-title{
        @extend %f16;
        @extend %c3;
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
    }

</style>
