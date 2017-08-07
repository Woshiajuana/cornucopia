<template>
    <header class="header-wrap">
        <a href="javascript:;" @click="headerReturnHandle" class="header-return"></a>
        <h2 class="header-title">{{ header_title }}</h2>
    </header>
</template>
<script>
    export default {
        name: 'header',
        props: [ 'header_title', 'is_left_click' ],
        methods: {
            headerReturnHandle () {
                this.$emit('headerLeftClick');
                !this.is_left_click && (window.history.go(-1));
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .header-wrap{
        @extend %pr;
        height: j(42);
        line-height: j(42);
        background-color: $mc;
    }
    .header-title{
        @extend %tac;
        @extend %cfff;
        @extend %fwn;
        font-size: j(18);
    }
    .header-return{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %cp;
        width: j(42);
        height: j(42);
        &:after{
            @extend %pa;
            @extend %t50;
            @include tfr(-135deg);
            left: j(16);
            width: j(12);
            height: j(12);
            margin-top: j(-6);
            content: '';
            border-top: 2px solid #fff;
            border-right: 2px solid #fff;
        }
    }
</style>
