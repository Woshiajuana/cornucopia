<template>
    <div class="nav-menu-wrap">
        <h2 class="nav-menu-title">NAV-MENU</h2>
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
        dt{
            .nav-menu-inner-item{
                padding-right: 40px;
                &:after{
                    right: 30px;
                }
            }
        }
        dd{
            .nav-menu-inner-item{
                padding-right: 54px;
                &:after{
                    right: 44px;
                }
            }
        }
    }
    .nav-menu-inner-item{
        @extend %db;
        @extend %pr;
        @extend %c0;
        @extend %f14;
        letter-spacing: 1px;
        height: 30px;
        line-height: 30px;
        border-right: 2px solid #fff;
        &:after{
            @extend %pa;
            @extend %t50;
            content: '';
            margin-top: -2px;
            background-color: #333;
            width: 4px;
            height: 4px;
        }
        &.active{
            border-right: 2px solid #f15556;
            background-color: #f3f3f3;
            color: #f15556;
            &:after{
                background-color: #f15556;
            }
        }

    }
</style>
