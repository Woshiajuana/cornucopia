<template>
    <div class="menu-panel">
<!--        <div class="classify">-->
<!--            classifyclassifyclassify-->
<!--&lt;!&ndash;            <div class="classify-item classify-indicator" :style="{ top: numCurrent * 30 + 'px' }"></div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="classify-item"&ndash;&gt;-->
<!--&lt;!&ndash;                 @click="numCurrent = index"&ndash;&gt;-->
<!--&lt;!&ndash;                 :class="[numCurrent === index && 'active']"&ndash;&gt;-->
<!--&lt;!&ndash;                 v-for="(item, index) in arrClassify"&ndash;&gt;-->
<!--&lt;!&ndash;                 :key="index">&ndash;&gt;-->
<!--&lt;!&ndash;                <span>{{item.label}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->
        <div class="dd">1</div>
        <div class="dd">2</div>
        <div class="classify">3</div>
        <div class="dd">4</div>
        <div class="classify">5</div>
        <div class="dd">6</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                numCurrent: 0,
                arrClassify: [
                    { label: '全部' },
                    { label: 'HTML / CSS' },
                    { label: 'Javascript / ES6' },
                    { label: 'Android' },
                    { label: 'iOS' },
                    { label: 'Flutter' },
                    { label: 'Nodejs' },
                    { label: '其他' },
                ]
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";

    .menu-panel{
        width: j(240);
        /*background-color: red;*/
        margin-left: j(20);
    }
    .classify{
        @extend %ps;
        top: j(50);
        width: j(240);
    }
    .dd{
        @extend %ps;
        top: j(70);
    }
    .classify-item{
        @extend %pr;
        @extend %c6;
        @extend %df;
        @extend %cp;
        @extend %aic;
        @include tst(all, 0.3s);
        padding-left: j(20);
        height: j(30);
        font-size: j(13);
        background-color: transparent;
        &:hover{
            background-color: #ddd;
        }
        &.active{
            @extend %fwb;
            color: $mainColor;
            &:hover{
                background-color: transparent;
            }
        }
    }
    .classify-indicator{
        @extend %cp;
        @extend %pa;
        @extend %r0;
        @extend %l0;
        @extend %t0;
        @include tst(all, 0.3s);
        border-left: j(4) solid $mainColor;
        background-color: #fff;
    }
</style>
