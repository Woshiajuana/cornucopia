<template>
    <div id="app">
        <header-panel></header-panel>
        <div class="wrap">
            <suspension-panel></suspension-panel>
            <router-view class="main"></router-view>
            <menu-panel></menu-panel>
        </div>
    </div>
</template>

<script>
    import HeaderPanel from 'src/components/header-panel'
    import SuspensionPanel from 'src/components/suspension-panel'
    import MenuPanel from 'src/components/menu-panel'

    export default {
        components: {
            MenuPanel,
            HeaderPanel,
            SuspensionPanel,
        }
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/reset";
    @import "~src/assets/scss/define";
    @import "~src/assets/scss/_iconfont.scss";

    body{
        background-color: $bgColor;
    }
    #app{

    }
    .wrap{
        @extend %df;
        @extend %ma;
        padding-top: j(70);
        max-width: j(960);
    }
    .main{
        @extend %df1;
    }

    @media screen and (max-width: 768px){
        html,
        body{
            font-size: 37.5px !important;
        }
    }
    /* 768 */
    @media screen and (min-width: 768px){
        html,
        body{
            font-size: 37.5px !important;
        }
    }
</style>
