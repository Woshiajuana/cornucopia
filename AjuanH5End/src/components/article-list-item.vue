<template>
    <div class="article-list-item">
        <div src="" alt="" class="article-list-item-img">
            <img src="" alt="">
        </div>
        <h2 class="article-list-item-title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h2>
        <p class="article-list-item-time">2017-08-03</p>
        <div class="article-list-item-point">
            <span class="article-list-item-point-number">(12)</span>
            <svg class="article-list-item-point-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point-icon"></use>
            </svg>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'article-list-item'
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .article-list-item{
        @extend %pr;
        @extend .fadeIn;
        animation-duration: .5s;
        animation-fill-mode: both;
        height: j(60);
        padding: j(30) j(30) j(30) j(106);
        background-color: #dddbe0;
        border-bottom: 1px solid #9f9da1;
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
        background-color: #aeaab4;
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
    .article-list-item-point{
        @extend %pa;
        padding-right: j(25);
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
