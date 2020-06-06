<template>
    <div class="catalog-section">
        <div class="catalog-indicator" :style="{ top: 1 * 30 + 'px' }"></div>
        <p class="catalog-title">目录</p>
        <catalog-cell
            v-for="(item, index) in computedCatalog"
            :data="item"
            :start="item.offsetTop"
            :end="computedCatalog[index + 1] ? computedCatalog[index + 1].scrollTop : scroll$.scrollHeight"
            :max="scroll$.scrollHeight"
            :scroll-top="scroll$.scrollTop"
            :key="index">
        </catalog-cell>
    </div>
</template>

<script>
    import CatalogCell from 'src/components/catalog-cell'
    import ScrollMixin from 'src/mixins/scroll.mixin'

    export default {
        mixins: [
            ScrollMixin,
        ],
        computed: {
            computedCatalog () {
                return this.$store.state.arrCatalog;
            },
        },
        components: {
            CatalogCell,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .catalog-section{
        @extend %pf;
        @extend %b0;
        top: j(70);
        width: j(240);
        bottom: j(20);
        overflow-y: auto;
    }
    .catalog-title{
        @extend %fwb;
        @extend %c3;
        @extend %aic;
        @extend %df;
        padding-left: j(20);
        height: j(30);
        font-size: j(18);
    }
    .catalog-indicator{
        @extend %cp;
        @extend %pa;
        @extend %r0;
        @extend %l0;
        @extend %t0;
        @extend %df;
        @extend %aic;
        @include tst(all, 0.3s);
        height: j(30);
        border-left: j(4) solid $mainColor;
        background-color: #fff;
    }
</style>
