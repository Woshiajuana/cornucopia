<template>
    <div id="app">
        <header-panel></header-panel>
        <div class="wrap">
            <suspension-panel></suspension-panel>
            <router-view class="main"></router-view>
            <menu-panel></menu-panel>
        </div>
        <svg-icon></svg-icon>
    </div>
</template>

<script>
    import SvgIcon from 'src/components/svg-icon'
    import HeaderPanel from 'src/components/header-panel'
    import SuspensionPanel from 'src/components/suspension-panel'
    import MenuPanel from 'src/components/menu-panel'

    export default {
        components: {
            SvgIcon,
            MenuPanel,
            HeaderPanel,
            SuspensionPanel,
        }
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/reset";
    @import "~src/assets/scss/define";

    body{
        background-color: #f2f2f2;
    }
    #app{

    }
    .wrap{
        @extend %df;
        @extend %ma;
        max-width: j(960);
        background-color: red;
    }
    .main{
        @extend %df1;
        background-color: #999999;
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
