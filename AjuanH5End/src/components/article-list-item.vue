<template>
    <a class="article-list-item animated" href="#/article/1">
        <div class="article-list-item-inner">
            <div class="article-list-item-img" :style="{backgroundColor: getRandomColor}"></div>
            <h2 class="article-list-item-title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h2>
            <p class="article-list-item-time">2017-08-03</p>
            <div class="article-list-item-info">
                <span class="article-list-item-type">JAVASCRIPT</span>
            </div>
        </div>
    </a>
</template>
<script>
    import Tool from '../assets/lib/Tool'
    export default {
        name: 'article-list-item',
        props: [ 'img_color' ],
        computed: {
            getRandomColor () {
                return Tool.getRandomColor();
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .article-list-item{
        @extend %db;
        @extend %pr;
        @extend .fadeIn;
        padding-left: j(30);
        background-color: #fff;
        &:first-child{
            .article-list-item-inner{
                border-top: none;
            }
        }
    }
    .article-list-item-inner{
        height: j(60);
        padding: j(30) j(30) j(30) j(76);
        border-top: 1px solid #ddd;
    }
    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fadeIn {
        animation-name: fadeIn;
    }
    .article-list-item-img{
        @extend %pa;
        @extend %t50;
        @extend %oh;
        @include br(10px);
        width: j(60);
        height: j(60);
        left: j(30);
        margin-top: j(-30);
        img{
            @extend %db;
            @extend %w100;
            @extend %h100;
        }
    }
    .article-list-item-title{
        @extend %c3;
        @extend %fwn;
        @extend %twno;
        height: j(30);
        line-height: j(30);
        font-size: j(16);
    }
    .article-list-item-time{
        @extend %c9;
        font-size: j(12);
        height: j(20);
        line-height: j(20);
    }
    .article-list-item-info{
        @extend %pa;
        color: #999;
        font-size: j(12);
        right: j(20);
        bottom: j(20);
        height: j(20);
        line-height: j(20);
    }
    .article-list-item-point-icon{
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %cp;
        width: j(20);
        height: j(20);
    }
</style>
