<template>
    <div id="app">
        <!--主体内容视图-->
        <transition :name="animateName">
            <!--<keep-alive>-->
                <router-view class="view-wrap"></router-view>
            <!--</keep-alive>-->
        </transition>
        <!--/主体内容视图-->
        <!--svg-->
        <svg-template></svg-template>
        <!--/svg-->
    </div>
</template>

<script>
    import SvgTemplate from 'src/components/svg-template.vue'
    export default {
        name: 'app',
        computed: {
            animateName () {
                return this.$store.state.animateName;
            },
        },
        created () {
            let eleApp = document.getElementsByTagName("body")[0];
            eleApp.addEventListener('blur', this.handleBlur, true);
        },
        methods: {
            handleBlur (event) {
                let target = event.target || {};
                if (target.nodeName
                    && (target.nodeName.toLocaleUpperCase() === 'INPUT'
                        || target.nodeName.toLocaleUpperCase() === 'SELECT'
                        || target.nodeName.toLocaleUpperCase() === 'TEXTAREA')) {
                    setTimeout(() => {
                        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
                    }, 100);
                }
            },
        },
        components: {
            SvgTemplate,
        }
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/reset";
    @import "~src/assets/scss/define";
    body{
        @extend %oh;
        /*background-color: #333;*/
        .el-message-box{
            width: j(350);
        }
    }
    @media screen and (max-width: 768px){
    }
    /* 768 */
    @media screen and (min-width: 768px){
        html,
        body{
            font-size: 37.5px !important;
        }
    }
    .view-wrap{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %r0;
        @extend %b0;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .vux-pop-in-enter-active,.vux-pop-in-leave-active,.vux-pop-out-enter-active,.vux-pop-out-leave-active {
        will-change: transform;
        -webkit-transition: all .5s;
        transition: all .5s;
        position: absolute;
        top: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
    }
    .vux-pop-out-enter {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
    .vux-pop-in-enter,.vux-pop-out-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }
    .vux-pop-in-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
    .weui-toast__content{
        font-size: 12px !important;
        padding: 10px 5px !important;
    }

    .vux-loading .weui-toast {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>
