<template>
    <div class="home-view-wrap">
<!--        <div class="cell-title">2020/02/02 12:12:12</div>-->
        <dl class="cell" v-for="(item, index) in 20" :key="index">
            <dt class="cell-dt">2020年{{index}}月</dt>
            <dd class="cell-dd">
                <h2>标题标标题标题标题标题标题标题标题标题标题标题标题标题题</h2>
                <p>的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师</p>
            </dd>
            <dd class="cell-dd">
                <h2>标题标标题标题标题标题标题标题标题标题标题标题标题标题题</h2>
                <p>的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师</p>
            </dd>
            <dd class="cell-dd">
                <h2>标题标标题标题标题标题标题标题标题标题标题标题标题标题题</h2>
                <p>的撒的流量萨德拉屎的拉屎的打扫了大师；鲁大师</p>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
        components: {

        },
    }
</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .home-view-wrap{
    }
    .cell{

    }
    .cell-dt{
        @extend %df;
        @extend %aic;
        @extend %c6;
        @extend %fwb;
        padding-left: j(20);
        font-size: j(18);
        background-color: #f2f2f2;
        height: j(50);
    }
    .cell-dd{
        padding: j(20);
        h2{
            @extend %c3;
            font-size: j(16);
        }
        p{
            @extend %c9;
            font-size: j(13);
        }
    }
</style>
