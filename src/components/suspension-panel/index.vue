<template>

    <div class="suspension-panel">
        <div class="suspension-item">
            <span class="iconfont icon-xingxing"></span>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                arr
            };
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";

    .suspension-panel{
        @extend %pf;
        @extend %t50;
        @include tft(translate3d(0, -50%, 0));
        z-index: 1;
        margin-left: j(-60);
        background-color: #6f9384;
        width: j(40);
        height: j(200);
    }
</style>
