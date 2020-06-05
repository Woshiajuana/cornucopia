
<template>
    <div class="article-cell-loading">
        <div class="loading-inner">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
        </div>
        <p class="loading-null">没有更多了哦</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import "~src/assets/scss/define";
    .article-cell-loading{
        padding: j(20);
        border-top: 1px solid #ddd;
        &:last-child{
            border-bottom: none;
        }
    }
    .loading-inner{
        background-color: #f3f3f3;
        padding: j(10) j(20);
    }
    .loading-bar{
        height: j(20);
        margin: j(10) 0;
        background-color: #eaeaea;
        &:first-child{
            width: 40%;
        }
        &:nth-child(2){
            animation: width 0.5s infinite;
        }
        &:nth-child(3){
            animation: width 0.5s infinite .25s;
        }
        &:last-child{
            width: 20%;
        }
    }
    .loading-null{
        @extend %c9;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        height: j(200);
        font-size: j(14);
    }
    @-webkit-keyframes width {
        from {
            width: 50%;
        }
        50%{
            width: 90%;
        }
        to {
            width: 50%;
        }
    }
    @keyframes width {
        from {
            width: 50%;
        }
        50%{
            width: 90%;
        }
        to {
            width: 50%;
        }
    }
</style>
