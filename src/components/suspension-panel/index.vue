<template>

    <div class="suspension-panel">
        <div class="suspension-item"
             v-for="(item, index) in arrButton"
             :title="item.title"
             :key="index">
            <span class="iconfont" :class="[item.icon]"></span>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                arrButton: [
                    {
                        title: 'GitHub',
                        icon: 'icon-github',
                    },
                    {
                        title: '微信',
                        icon: 'icon-weixin',
                    },
                    {
                        title: '发送邮件',
                        icon: 'icon-e-mail',
                    },
                    {
                        title: '分享链接',
                        icon: 'icon-lianjie',
                    },
                    {
                        title: '回到顶部',
                        icon: 'icon-top02',
                    },
                ]
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
        width: j(40);
    }
    .suspension-item{
        @extend %cp;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %c6;
        width: j(40);
        height: j(40);
        font-size: j(24);
        &:hover{
            color: $mainColor;
        }
        /*background-color: red;*/
        /*border: 1px solid #ddd;*/
        /*border-radius: j(5);*/
    }

</style>
