<template>
    <div class="mask-wrap"></div>
</template>
<script>
    export default {
        name: 'mask'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .mask-wrap{
        @extend %pa;
        @extend %dn;
        @extend %t0;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        background: rgba(55,58,71,.9);
    }
</style>
