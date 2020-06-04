<template>
    <div class="header-section">
        <div class="header-inner">
            头部
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

    .header-section{
        margin-bottom: j(20);
    }
    .header-inner{
        @extend %ma;
        max-width: j(960);
        background-color: #2b3841;
        height: j(50);
    }
</style>
