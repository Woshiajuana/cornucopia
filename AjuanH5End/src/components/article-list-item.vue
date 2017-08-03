<template>
    <div class="article-list-item">
        <div src="" alt="" class="article-list-item-img">
            <img src="" alt="">
        </div>
        <h2 class="article-list-item-title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h2>
        <p class="article-list-item-time">2017-08-03</p>
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
        height: j(60);
        padding: j(30) j(30) j(30) j(106);
        background-color: #dddbe0;
        border-bottom: 1px solid #9f9da1;
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
</style>
