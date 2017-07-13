<template>
    <!--首页-->
    <div class="home-view">
        <div class="article-wrap">
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
            <article-list-item></article-list-item>
        </div>
        <div class="load-more-con">
            <i class="load-more-btn">点击查看更多</i>
            <i class="load-more-loading">
                <svg class="load-more-loading-icon">
                    <use xlink:href="#loading-icon"></use>
                </svg>
                <span>加载中</span>
            </i>
            <i>没有了</i>
        </div>
    </div>
    <!--/首页-->
</template>
<script>
    import ArticleListItem from '../../components/article-list-item.vue'
    export default {
        name: 'home',
        components: {
            ArticleListItem
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .article-wrap{
        @extend %oh;
    }
    .load-more-con{
        @extend %tac;
        height: 30px;
        padding: 20px;
        i{
            @extend %ma;
            @extend %db;
            @extend %f14;
            @extend %c9;
            width: 150px;
            height: 30px;
            line-height: 30px;
        }
    }
    .load-more-btn{
        @extend %cp;
        @include tst(all,.3s);
        border-radius: 3px;
        background-color: #f5f5f5;
        &:hover{
            @extend %cfff;
            background-color: #f15556;
        }
    }
    .load-more-loading{
        @extend %pr;
        span,svg{
            @extend %vam;
        }
    }
    .load-more-loading-icon{
        animation: route360 .2s linear infinite;
        width: 20px;
        height: 20px;
    }
    @keyframes route360 {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
