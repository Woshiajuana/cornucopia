<template>
    <div class="suspension-panel">
        <div class="suspension-item">
            <span>icon</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'suspension-panel',
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";

    .suspension-panel{
        @extend %pf;
        @extend %t50;
        @include tft(translate3d(0, -50%, 0));
        z-index: 1;
        background-color: #6f9384;
        width: j(50);
        height: j(200);
    }
</style>
