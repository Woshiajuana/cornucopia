<template>
    <div class="home-view-wrap">
        首页内容
    </div>
</template>
<script>
    export default {
        name: 'home',
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
