<template>
    <div class="article-wrap">
        <article class="article-inner">
            <header>
                <h1>写在父亲节</h1>
                <div class="article-list-item-base">
                    <time datetime="2017/06/16">2017/06/16</time>
                    <span>JAVASCRIPT</span>
                </div>
            </header>
            <div class="article-con">
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
                <p>后天就是父亲节了，我的父亲是一个传统的农民，他对我的爱就跟大多数父亲一样是含蓄的，只是“傻傻”地付出，从来不说出来，所以我有很多感激父亲、感谢父亲的话，也是很不好意思当面给他说出来。</p>
            </div>
        </article>
        <nav class="article-nav">
            <a href="#" class="article-prev-link">＜写在父亲节</a>
            <a href="#" class="article-next-link">写在父亲节＞</a>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'article'
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .article-inner{
        margin: 40px;
        h1{
            @extend %tac;
            @extend %f18;
            @extend %c3;
            @extend %fwn;
            height: 50px;
            line-height: 50px;
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
    }
    .article-nav{
        border-top: 1px solid #ddd;
        margin: 0 40px;
        height: 80px;
        line-height: 80px;
        padding-bottom: 80px;
        a{
            @extend %c9;
            @extend %f14;
        }
    }
    .article-next-link{
        @extend %fr;
    }
    .article-prev-link{
        @extend %fl;
    }
    .article-con{
        @extend %c6;
        font-size: 13px;
        line-height: 1.8;
        p{
            text-indent: 2em;
            margin: 10px 0;
        }
    }
    @media screen and (max-width: 800px) {
        .article-inner{
            margin: 20px 10px;
        }
    }
</style>
