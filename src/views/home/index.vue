<template>
    <div class="home-wrap">
<!--        <navbar-view></navbar-view>-->
        <!--主体内容视图-->
        <transition :name="animateName">
            <!--<keep-alive>-->
            <router-view class="home-inner"></router-view>
            <!--</keep-alive>-->
        </transition>
    </div>
</template>
<script>
    // import NavbarView from 'src/components/navbar-view'

    export default {
        name: 'home',
        computed: {
            animateName () {
                return this.$store.state.animateName;
            },
        },
        components: {
            // NavbarView,
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
