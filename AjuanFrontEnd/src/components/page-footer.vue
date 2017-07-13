<template>
    <footer class="footer-wrap">
        <div class="footer-inner">
            <div class="footer-icon">
                <a title="新浪微博" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#xlwb-icon"></use>
                    </svg>
                </a>
                <a title="腾讯微博" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txwb-icon"></use>
                    </svg>
                </a>
                <a title="微信" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wx-icon"></use>
                    </svg>
                </a>
                <a title="QQ" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#qq-icon"></use>
                    </svg>
                </a>
                <a title="GitHub" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gh-icon"></use>
                    </svg>
                </a>
            </div>
            <p class="footer-copy">
                Copyright &copy; 2017 Ajuan | <a href="http://www.miitbeian.gov.cn/">粤ICP备16081042号</a>
            </p>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'footer'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .footer-wrap{
        margin-top: 1px;
        margin-bottom: 80px;
    }
    .footer-inner{
        @extend %wm;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
        padding: 30px 0;
        background-color: #fff;
    }
    .footer-icon,.footer-copy{
        @extend %pr;
        @extend %tac;
    }
    .footer-icon{
        @extend %oh;
        height: 32px;
    }
    .icon-item{
        @extend %dib;
        @extend %oh;
        margin: 0 10px;
        width: 32px;
        height: 32px;
        opacity: 0.5;
        svg{
            @extend %w100;
            @extend %h100;
            @include tst(fill,.5s);
            fill: #f15556;
        }
        &:hover{
            svg{
                fill: #f15556;
            }
        }
    }
    .footer-copy{
        @extend %c9;
        @extend %f12;
        margin-top: 15px;
        a{
            @extend %c9;
        }
    }
    @media screen and (max-width: 800px) {
        .footer-wrap{
            margin-bottom: 0;
        }
        .footer-inner{
            width: 100%;
            padding: 20px 0;
        }
        .icon-item{
            width: 26px;
            height: 26px;
            margin: 0 2px;
        }
        .footer-copy{
            margin-top: 0;
        }
    }
</style>
