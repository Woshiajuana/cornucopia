<template>
    <div class="set-up-wrap">
        设置
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
</style>
