<template>
    <div class="home-view-wrap">
        首页内容1
    </div>
</template>
<script>
    export default {
        components: {

        },
    }
</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .home-view-wrap{
        height: j(2000);
    }
    .home-inner{
        @extend %w100;
        @extend %h100;
        @extend %bsb;
        padding-top: j(56);
        overflow-y: auto;
    }
</style>
