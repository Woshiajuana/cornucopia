<template>
    <!--首页-->
    <div class="views-wrap">
        <my-header></my-header>
        <my-menu></my-menu>
        <router-view></router-view>
    </div>
    <!--/首页-->
</template>
<script>
    import MyHeader from '../../components/head.vue';
    import MyMenu from '../../components/menu.vue';
    export default {
        name: 'index',
        components: {
            MyHeader,
            MyMenu
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .index-view{
        @extend %pr;
    }
    .container-wrap{
        position: absolute !important;
        @extend %oh;
        @extend %r0;
        @extend %b0;
        padding: 0 30px;
        top: 50px;
        left: 250px;
    }
</style>
