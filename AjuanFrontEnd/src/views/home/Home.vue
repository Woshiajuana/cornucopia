<template>
    <!--首页-->
    <div class="container-wrap">
        <router-view></router-view>
    </div>
    <!--/首页-->
</template>
<script>
    export default {
        name: 'index',
        components: {
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .container-wrap{
        @extend %wm;
        margin-top: 30px;
        background-color: #fff;
        height: 1800px;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    }
    @media screen and (max-width: 800px) {
        .container-wrap{
            width: auto;
            margin: 10px;
        }
    }
</style>
