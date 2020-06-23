<template>
    <div class="catalog-section" ref="catalog" v-if="computedCatalog.length">
        <div class="catalog-indicator iconfont icon-biaoqian" :style="{ top: numIndicator + 'px' }"></div>
        <p class="catalog-title">目录</p>
        <catalog-cell
            @click="handleAnchor"
            v-for="(item, index) in computedCatalog"
            :data="item"
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
        data () {
            return {
                numIndicator: 30,
            }
        },
        watch: {
            'scroll$.scrollTop' (v) {
                let { arrSourceCatalog } = this.$store.state;
                if (!arrSourceCatalog) return;
                arrSourceCatalog.forEach((item, i) => {
                    if (item.start <= v && v < item.end) {
                        this.numIndicator = (i + 1) * 30;
                    }
                });
                if (arrSourceCatalog.length) {
                    this.$nextTick(() => {
                        this.fixCatalogScroll();
                    });
                }
            },
        },
        computed: {
            computedCatalog () {
                return this.$store.state.arrCatalog;
            },
        },
        methods: {
            handleAnchor (item) {
                this.$anchor.anchorPosition(item.id, 300, 70);
            },
            fixCatalogScroll () {
                let { scrollHeight, clientHeight } = this.$refs.catalog;
                if (clientHeight >= scrollHeight) return;
                if (this.numIndicator === 30) {
                    return this.$refs.catalog.scrollTop = 0;
                }
                this.$refs.catalog.scrollTop = this.numIndicator - clientHeight / 2;
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
        font-size: j(16);
        color: $mainColor;
    }
</style>
