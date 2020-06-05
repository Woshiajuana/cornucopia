<template>
    <div class="suspension-panel">

        <div class="suspension-item" title="返回" @click="$router.go(-1)">
            <span class="iconfont icon-fanhui"></span>
        </div>

        <div class="suspension-item" title="日期筛选">
            <span class="iconfont icon-calendar"></span>
            <span class="suspension-date">{{strDay}}</span>
        </div>

        <a class="suspension-item" title="微信" href="https://github.com/Woshiajuana" target="_blank">
            <span class="iconfont icon-github"></span>
        </a>

        <div class="suspension-item">
            <span class="iconfont icon-weixin"></span>
            <div class="suspension-image">
                <img src="https://cdn.sunofbeaches.com/images/test/2.jpg">
            </div>
        </div>

        <a class="suspension-item" title="发送邮件" href="mailto:979703986@qq.com">
            <span class="iconfont icon-e-mail"></span>
        </a>

        <div class="suspension-item" title="分享链接" id="copyUrl">
            <span class="iconfont icon-lianjie" id="url"></span>
        </div>

        <div class="suspension-item"
             @click="handleReturnTop"
             v-show="scroll$.scrollTop > 500">
            <span class="iconfont icon-top02"></span>
        </div>

    </div>
</template>

<script>
    import ScrollMixin from 'src/mixins/scroll.mixin'
    import Clipboard from 'clipboard'

    let timer = '';

    export default {
        mixins: [
            ScrollMixin,
        ],
        data () {
            return {
                strDay: new Date().getDay(),
            };
        },
        mounted () {
           this.$nextTick(this.addClipboard.bind(this));
        },
        methods: {
            addClipboard () {
                new Clipboard('#copyUrl', {
                    text: () => window.location.href,
                }).on('success', (e) => {
                    console.log('复制成功');
                }).on('error', (e) => {
                    console.log('复制失败，请双击文案选择复制');
                });
            },
            handleReturnTop () {
                timer && clearInterval(timer);
                timer = setInterval(() => {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
                    if (scrollTop <= 0) {
                        return clearInterval(timer);
                    }
                    let dir = Math.floor(scrollTop / 1.1);
                    document.documentElement.scrollTop = dir;
                    document.body.scrollTop = dir;
                }, 10);
            },
        },
    }
</script>

<style lang="scss" scoped>

    @import "~src/assets/scss/define";

    .suspension-panel{
        @extend %pf;
        top: j(240);
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
        line-height: j(40);
        font-size: j(24);
        &:hover{
            font-size: j(28);
            color: $mainColor;
            .suspension-image{
                @extend %df;
            }
        }
    }
    .suspension-href{
        @extend %dn;
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
    .suspension-date{
        @extend %pa;
        top: j(2);
        font-size: j(12);
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
