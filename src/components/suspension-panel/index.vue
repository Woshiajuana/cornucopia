<template>
    <div class="suspension-panel">
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
        z-index: 1;
        background-color: #6f9384;
        width: j(20);
    }
</style>
