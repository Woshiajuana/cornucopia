<template>
    <article class="article-list-item">
        <header>
            <h2>写在父亲节</h2>
            <div class="article-list-item-base">
                <time datetime="2017/06/16">2017/06/16</time>
                <span>JAVASCRIPT</span>
            </div>
        </header>
        <div class="article-brief-con">
            <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
            <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
        </div>
        <footer>
            <div class="article-list-full-mask"></div>
            <a class="article-list-item-link" href="#/article">查看全文</a>
        </footer>
    </article>
</template>
<script>
    export default {
        name: 'article-list-item'
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .article-list-item{
        margin: 40px;
        h2{
            @extend %tac;
            @extend %f16;
            @extend %c3;
            @extend %fwn;
            height: 30px;
            line-height: 30px;
        }
        span,
        time{
            @extend %f12;
            @extend %c9;
            height: 20px;
            margin: 0 10px;
            line-height: 20px;
            font-family: dinmedium;
        }
        footer{
            @extend %tac;
            @extend %pr;
            line-height: 40px;
            height: 40px;
            padding-bottom: 20px;
        }
    }
    .article-list-item-base{
        @extend %tac;
    }
    .article-list-full-mask{
        @extend %pa;
        @extend %w100;
        top: -100px;
        height: 100px;
        background-image: -webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));
        background-image: -webkit-linear-gradient(top,hsla(0,0%,100%,0),#fff);
        background-image: linear-gradient(180deg,hsla(0,0%,100%,0),#fff);
    }
    .article-list-item-link{
        @extend %f14;
        color: #f15556;
    }
    .article-brief-con{
        @extend %c6;
        font-size: 13px;
        line-height: 1.8;
        p{
            text-indent: 2em;
            margin: 10px 0;
        }
    }
    @media screen and (max-width: 800px) {
        .article-list-item{
            margin: 20px 10px;
        }
    }
</style>
