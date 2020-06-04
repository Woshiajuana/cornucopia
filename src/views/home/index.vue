<template>
    <div class="home-view-wrap">
        <transition :name="animateName">
            <router-view class="home-inner"></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'home',
        computed: {
            animateName () {
                return this.$store.state.animateName;
            },
        },
        components: {

        },
    }
</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .home-wrap{
        @extend %oh;
    }
    .home-inner{
        @extend %w100;
        @extend %h100;
        @extend %bsb;
        padding-top: j(56);
        overflow-y: auto;
    }
</style>
