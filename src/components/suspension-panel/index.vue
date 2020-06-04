<template>
    <div class="suspension-panel">

        <div class="suspension-item" title="微信">
            <span class="iconfont icon-github"></span>
        </div>

        <div class="suspension-item">
            <span class="iconfont icon-weixin"></span>
            <div class="suspension-image">
                <img src="https://cdn.sunofbeaches.com/images/test/2.jpg">
            </div>
        </div>

        <div class="suspension-item">
            <span class="iconfont icon-e-mail"></span>
        </div>

        <div class="suspension-item">
            <span class="iconfont icon-lianjie"></span>
        </div>

        <div class="suspension-item">
            <span class="iconfont icon-top02"></span>
        </div>


        <div class="suspension-item"
             @click="jumpPageOrFireFn(item)"
             v-for="(item, index) in arrButton"
             :title="item.title"
             :key="index">
            <span class="iconfont" :class="[item.icon]"></span>
            <div v-if="item.image"
                 class="suspension-image">
                <img :src="item.image">
            </div>
        </div>
    </div>
</template>

<script>
    import ScrollMixin from 'src/mixins/scroll.mixin'
    import JumpMixin from 'src/mixins/jump.mixin'

    export default {
        mixins: [
            JumpMixin,
            ScrollMixin,
        ],
        computed: {

        },
        data () {
            return {
                arrButton: [
                    {
                        title: 'GitHub',
                        icon: 'icon-github',
                        link: 'https://github.com/Woshiajuana',
                    },
                    {
                        title: '微信',
                        icon: 'icon-weixin',
                        image: 'https://cdn.sunofbeaches.com/images/test/2.jpg',
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
            scrollCallback (event) {
                console.log('滚动事件 => ', this.scroll$.top);
            }
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
        @extend %pr;
        @include tst(all, 0.3s);
        width: j(40);
        height: j(40);
        font-size: j(24);
        &:hover{
            font-size: j(28);
            color: $mainColor;
            .suspension-image{
                @extend %df;
            }
        }
    }
    .suspension-image{
        @extend %dn;
        @extend %pa;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %t50;
        @extend .scale;
        margin-top: j(-50);
        border-radius: j(5);
        left: j(-100);
        width: j(100);
        height: j(100);
        background-color: #fff;
        img{
            @extend %db;
            width: j(80);
            height: j(80);
        }
    }

    @-webkit-keyframes scale {
        from {
            transform: scale(0);
            transform-origin: right 50%;
        }
        to {
            transform: scale(1);
            transform-origin: right 50%;
        }
    }

    @keyframes scale {
        from {
            transform: scale(0);
            transform-origin: right 50%;
        }
        to {
            transform: scale(1);
            transform-origin: right 50%;
        }
    }

    .scale {
        -webkit-animation-name: scale;
        animation-name: scale;
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
</style>
