<template>
    <div class="article-list-item">
        <div class="article-list-item-inner">
            <div class="article-list-item-img" :style="{backgroundColor: article_title ? getRandomColor : '#f2f2f2'}"></div>
            <text class="article-list-item-title">HTML和CSS的基础知识</text>
            <text class="article-list-item-time">2017-09-05</text>
            <div class="article-list-item-info">
                <text class="article-list-item-type">HTML</text>
            </div>
        </div>
    </div>
</template>
<script>
    import Tool from '../assets/lib/Tool'
    export default {
//        props: [ 'article_title', 'article_time', 'article_type', 'is_fade_in', '_id'],
//        filters: {
//            timeFilter (time) {
//                if(!time){
//                    return '';
//                }else{
//                    return Tool.format('yyyy-MM-dd',new Date(time));
//                }
//            }
//        },
        computed: {
            getRandomColor () {
                return Tool.getRandomColor();
            }
        }
    }
</script>
<style>
    .article-list-item{
        position: relative;
        padding-left: 60px;
        background-color: #fff;
    }
    .article-list-item-inner{
        height: 240px;
        padding-top: 60px;
        padding-bottom: 60px;
        padding-left: 152px;
        padding-right: 40px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ddd;
    }
    .article-list-item-img{
        position: absolute;
        height: 120px;
        width: 120px;
        left:0;
        top: 60px;
        border-radius: 20px;
    }
    .article-list-item-title{
        color: #333;
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        font-size: 32px;
    }
    .article-list-item-time{
        color: #999;
        font-size: 24px;
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
    }
    .article-list-item-info{
        position: absolute;
        right: 40px;
        bottom: 40px;
        height: 32px;
        min-width: 160px;
    }
    .article-list-item-type{
        text-align: right;
        font-size: 24px;
        color: #999;
        width: 160px;
        height: 32px;
        line-height: 32px;
    }
</style>
