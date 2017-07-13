<template>
    <div id="app">
        <router-view></router-view>
        <svg-template></svg-template>
    </div>
</template>
<script>
    import SvgTemplate from './components/svg-template.vue';
    export default {
        name: 'app',
        components: {
            SvgTemplate
        }
    }
</script>
<style lang="scss">
    @import "./assets/scss/reset";
    @import "./assets/scss/common";
</style>
