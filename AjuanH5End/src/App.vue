<template>
    <div id="app">
        <!--主体内容视图-->
        <transition :name="animateName">
            <!--<keep-alive>-->
            <router-view></router-view>
            <!--</keep-alive>-->
        </transition>
        <!--/主体内容视图-->

        <!--导航条-->
        <nav-bar></nav-bar>
        <!--/导航条-->

        <!--svg-->
        <svg-template></svg-template>
        <!--/svg-->
    </div>
</template>
<script>
    import SvgTemplate from './components/svg-template.vue'
    import NavBar from './components/nav-bar.vue'
    export default {
        name: 'app',
        computed: {
            animateName () {
                return this.$store.state.animate_name;
            }
        },
        components: {
            SvgTemplate,
            NavBar
        }
    }
</script>
<style lang="scss">
    @import "./assets/scss/common";
    #app{
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %b0;
    }
</style>
