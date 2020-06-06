<template>
    <div class="catalog-section">
        <div class="catalog-indicator" :style="{ top: numCurrent * 30 + 'px' }"></div>
        <p class="catalog-title">目录</p>
        <catalog-cell
            v-for="(item, index) in computedCatalog"
            :num="1"
            :data="item"
            :key="index">
        </catalog-cell>
    </div>
</template>

<script>
    import CatalogCell from 'src/components/catalog-cell'

    export default {
        computed: {
            computedCatalog () {
                return this.$store.state.arrCatalog;
            },
        },
        data () {
            return {
                numCurrent: 2,
                arrCatalog: [
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第一章',
                        index: '0',
                        children: [
                            {
                                title: '第一章第一节',
                                index: '0-0',
                                children: [
                                    {
                                        title: '第二章111111第一章1111111111111第一章1111111111111第一章11111111111111111111',
                                        index: '0-0-0',
                                        children: [
                                            {
                                                title: '第一章11111第一章111111111111111111111',
                                                index: '0-0-0',
                                            },
                                            {
                                                title: '第二章第二节'
                                            },
                                        ],
                                    },
                                ]
                            },
                            {
                                title: '第一章第二节'
                            },
                        ],
                    },
                    {
                        title: '第二章',
                        children: [
                            {
                                title: '第二章第一节'
                            },
                            {
                                title: '第二章第二节'
                            },
                        ],
                    },
                ]
            }
        },
        components: {
            CatalogCell,
        }
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
