<template>
    <div class="set-up-wrap">
        <h2 class="set-up-title">SET-UP</h2>
        <div class="set-up-inner">
            <dl class="set-up-con">
                <dt class="set-up-con-title">基础设置</dt>
                <dd class="set-up-item">
                    <span class="set-up-item"></span>
                </dd>
            </dl>
            <div class="set-up-btn-con">

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'set-up'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .set-up-wrap{
        z-index: 1;
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %oh;
        @include tst(box-shadow,1s);
        right: -300px;
        width: 300px;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
    .set-up-title{
        @extend %f16;
        @extend %c3;
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
    }
    .set-up-inner{
        @extend %pa;
        @extend %l0;
        @extend %b0;
        @extend %oya;
        padding-bottom: 30px;
        right: -18px;
        overflow-y: scroll;
        top: 50px;
    }
</style>
