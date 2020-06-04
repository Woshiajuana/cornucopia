<template>
    <div id="app">
        <suspension-panel></suspension-panel>
        <router-view class="main"></router-view>
        <svg-icon></svg-icon>
    </div>
</template>

<script>
    import SvgIcon from 'src/components/svg-icon'
    import SuspensionPanel from 'src/components/suspension-panel'

    export default {
        components: {
            SvgIcon,
            SuspensionPanel,
        }
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/reset";
    @import "~src/assets/scss/define";
    body{}
    @media screen and (max-width: 768px){
    }
    /* 768 */
    @media screen and (min-width: 768px){
        html,
        body{
            font-size: 37.5px !important;
        }
    }
    .main{
        
    }
</style>
