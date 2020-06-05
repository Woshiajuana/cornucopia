
<template>
    <div class="article-cell">
        <a class="title" href="javascript:;">标题标标题标题标题标题标题标题标题标题标题标题标题标题题</a>
        <p class="abstract">的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师</p>
        <div class="meta"></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import "~src/assets/scss/define";
    .article-cell{
        padding: j(20);
        border-bottom: 1px solid #ddd;
        &:last-child{
            border-bottom: none;
        }
    }
    .title{
        @extend %c3;
        @extend %db;
        @extend %fwb;
        font-size: j(17);
        line-height: j(27);
        margin-bottom: j(4);
        &:hover{
            text-decoration: underline;
        }
    }
    .abstract{
        @extend %c9;
        line-height: j(24);
        font-size: j(13);
    }
</style>
