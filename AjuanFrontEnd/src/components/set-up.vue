<template>
    <div class="set-up-wrap">
        <h2 class="set-up-title">SET-UP</h2>
        <div class="set-up-inner">
            <dl class="set-up-con">
                <dt class="set-up-con-title">字体大小设置</dt>
                <dd class="set-up-item">
                    <div class="set-up-font-size">
                        <span class="set-up-font-size-btn">-</span>
                        <span class="set-up-font-size-con">13</span>
                        <span class="set-up-font-size-btn">+</span>
                    </div>
                </dd>
                <dt class="set-up-con-title">模式设置</dt>
                <dd class="set-up-item">
                    <div class="set-up-mode">
                        <span class="set-up-mode-btn active" title="白天">
                            <svg class="set-btn-icon">
                                <use xlink:href="#son-icon"></use>
                            </svg>
                        </span>
                        <span class="set-up-mode-btn" title="晚上">
                             <svg class="set-btn-icon">
                                 <use xlink:href="#moon-icon"></use>
                             </svg>
                        </span>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'set-up'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .set-up-wrap{
        z-index: 1;
        @extend %pa;
        @extend %t0;
        @extend %b0;
        @extend %oh;
        @include tst(box-shadow,1s);
        right: -300px;
        width: 300px;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
    .set-up-title{
        @extend %f16;
        @extend %c3;
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
    }
    .set-up-inner{
        @extend %pa;
        @extend %l0;
        @extend %b0;
        @extend %oya;
        padding-bottom: 30px;
        right: -18px;
        overflow-y: scroll;
        top: 50px;
    }
    .set-up-con{
        @extend %f14;
        dt{
            @extend %pr;
            height: 30px;
            line-height: 30px;
            padding-left: 40px;
            &:before{
                @extend %pa;
                @extend %t50;
                left: 30px;
                content: '';
                margin-top: -2px;
                background-color: #333;
                width: 4px;
                height: 4px;
            }
        }
        dd{
            margin: 10px;
            padding-left: 54px;
        }
    }
    .set-up-font-size{
        width: 92px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #ddd;
        span{
            @extend %fl;
            @extend %tac;
            height: 24px;
        }
    }
    .set-up-font-size-con{
        width: 40px;
    }
    .set-up-font-size-btn{
        @extend %cp;
        @extend %cfff;
        width: 26px;
        background-color: #ddd;
    }
    .set-up-mode{
        height: 26px;
    }
    .set-up-mode-btn{
        @extend %fl;
        @extend %cp;
        width: 26px;
        height: 26px;
        margin-right: 20px;
        &.active{
            .set-btn-icon{
                fill: #f15556;
            }
        }
    }
    .set-btn-icon{
        @extend %w100;
        @extend %h100;
        fill: #999;
    }
</style>
