<template>
    <transition name="fade">
        <div class="mask-wrap" v-if="isOpenOrHideMask"></div>
    </transition>
</template>
<script>
    export default {
        name: 'mask',
        computed: {
            isOpenOrHideMask () {
                return this.$store.state.is_open_or_hide_mask;
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .mask-wrap{
        z-index: 99;
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        background-color: hsla(0,0%,100%,.9);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
