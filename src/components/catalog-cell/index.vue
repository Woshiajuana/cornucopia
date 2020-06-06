<template>
    <div class="catalog-cell"
         :class="[ data.start <= scrollTop && scrollTop < data.end && 'active']">
        <a class="catalog-cell-title" href="javascript:;">
            <i></i><span>{{data.title}}</span>
        </a>
        <catalog-cell
            v-if="data.children"
            v-for="(item, index) in data.children"
            :key="index"
            :data="item"
            :scroll-top="scrollTop"
        ></catalog-cell>
    </div>
</template>

<script>
    export default {
        name: 'catalog-cell',
        props: {
            data: { default: '' },
            scrollTop: { default: '' },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .catalog-cell{
        @extend %pr;
        .catalog-cell{
            padding-left: j(25);
        }
        &.active{
            > .catalog-cell-title{
                @extend %fwb;
                color: $mainColor;
            }
        }
    }
    .catalog-cell-title{
        @extend %df;
        @extend %cp;
        @extend %aic;
        @extend %c6;
        @include tst(all, 0.3s);
        padding: 0 j(20);
        font-size: j(14);
        height: j(30);
        &:hover{
            text-decoration: underline;
        }
        span{
            @extend %df1;
            @extend %twno;
        }
    }
</style>
