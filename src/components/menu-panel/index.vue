<template>
    <div class="menu-panel">

        <div class="classify">
            <div class="classify-item"
                 :class="[numCurrent === index && 'active']"
                 v-for="(item, index) in arrClassify"
                 :key="index">
                <span>{{item.label}}</span>
            </div>
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
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";

    .menu-panel{
        width: j(240);
        margin-left: j(20);
        /*background-color: #fff;*/
    }
    .classify{
        @extend %pf;
        width: j(240);
    }
    .classify-item{
        @extend %c6;
        @extend %df;
        @extend %cp;
        @extend %aic;
        border-left: j(4) solid transparent;
        padding-left: j(20);
        height: j(30);
        font-size: j(13);
        &:hover{
            background-color: #ddd;
        }
        &.active{
            @extend %fwb;
            border-left: j(4) solid $mainColor;
            color: $mainColor;
            background-color: #fff;
        }
    }
</style>
