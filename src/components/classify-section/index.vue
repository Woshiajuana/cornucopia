<template>
    <div class="classify-section">
        <div class="classify-indicator iconfont icon-biaoqian" :style="{ top: numCurrent * 30 + 'px' }"></div>
        <div class="classify-item"
             @click="handleSelect(item)"
             :class="[numCurrent === index && 'active']"
             v-for="(item, index) in arrClassify"
             :key="index">
            <span>{{item.title}} ({{item.number}})</span>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                numCurrent: 0,
                arrClassify: [],
            }
        },
        watch: {
            '$route.params' (v) {
                this.assignmentData(v);
            },
        },
        created () {
            this.reqClassifyList();
        },
        methods: {
            reqClassifyList () {
                this.$curl.get('static/mocks/classify.json').then((res) => {
                    let number = 0;
                    res.forEach((item) => number += item.number);
                    this.arrClassify = [{ title: '全部', number, }, ...res];
                    this.assignmentData();
                });
            },
            handleSelect (item) {
                let path = item.title;
                if (path === '全部') {
                    return this.$router.push('/');
                }
                this.$router.push(`/classify/${path.toLocaleLowerCase()}`);
            },
            assignmentData (v = this.$route.params) {
                let index = 0;
                this.arrClassify.forEach((item, i) => {
                    if (v.classify === item.title.toLocaleLowerCase()) index = i;
                });
                this.numCurrent = index;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .classify-section{
        @extend %pf;
        width: j(240);
    }
    .classify-item{
        @extend %pr;
        @extend %c6;
        @extend %df;
        @extend %cp;
        @extend %aic;
        @include tst(all, 0.3s);
        padding-left: j(20);
        height: j(30);
        font-size: j(13);
        background-color: transparent;
        &:hover{
            background-color: #ddd;
        }
        &.active{
            @extend %fwb;
            color: $mainColor;
            &:hover{
                background-color: transparent;
            }
        }
    }
    .classify-indicator{
        @extend %cp;
        @extend %pa;
        @extend %r0;
        @extend %l0;
        @extend %t0;
        @extend %df;
        @extend %cp;
        @extend %aic;
        @include tst(all, 0.3s);
        height: j(30);
        font-size: j(16);
        color: $mainColor;
    }
</style>
