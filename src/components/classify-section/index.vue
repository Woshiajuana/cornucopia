<template>
    <div class="classify-section">
        <div class="classify-item classify-indicator" :style="{ top: numCurrent * 30 + 'px' }"></div>
        <div class="classify-item"
             @click="numCurrent = index"
             :class="[numCurrent === index && 'active']"
             v-for="(item, index) in arrClassify"
             :key="index">
            <span>{{item.label}}</span>
        </div>
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
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .classify-section{
        @extend %pf;
        width: j(240);
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
