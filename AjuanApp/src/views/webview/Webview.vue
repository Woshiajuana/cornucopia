<template>
    <div class="webview-wrap">
        <web class="content" ref="webview" :src="fullLink" @pagestart="startload" @pagefinish="finishload" @error="failload" :style="{ top: top }"></web>
        <div class="tabbar">
            <div class="tabbar-item" @click="goBack">
                <image class="icon" :src="back_src"></image>
            </div>
            <div class="tabbar-item" @click="reload">
                <image class="icon" :src="reload_src"></image>
            </div>
            <div class="tabbar-item" @click="close">
                <image class="icon" :src="close_src"></image>
            </div>
        </div>
    </div>
</template>

<script>
    import navigator from '../../module/navigator/navigator';
    import source from '../../tool/source';
    const webview = weex.requireModule('webview');
    export default {
        data: function () {
            return {
                top: 0,
                count: 0,
            }
        },
        computed: {
            fullLink: function () {
                var info = navigator.params(this) || {};
                return info.link || '';
            },
            back_src: function () {
                return source('return-icon.png');
            },
            reload_src: function () {
                return source('refresh-icon.png');
            },
            close_src: function () {
                return source('close-icon.png');
            }
        },
        methods: {
            startload: function(e) {
                this.count += 1;
            },
            finishload: function(e) {

            },
            failload: function(e) {

            },
            goBack: function (e) {
                var count = this.count;
                webview.goBack(this.$refs.webview);
                setTimeout(function() {
                    if (count === this.count) return navigator.pop(); // hack
                }.bind(this), 200);
            },
            reload: function (e) {
                webview.reload(this.$refs.webview)
            },
            close: function (e) {
                navigator.pop();
            }
        },
        created: function() {
//            var env = this.$getConfig().env;
//            if (env.platform === 'iOS') {
//                var scale = env.scale;
//                var deviceWidth = env.deviceWidth / scale;
//                this.top = 20.0 * 750.0 / deviceWidth;
//            }
        },
    };
</script>

<style>
    .webview-wrap {
        width: 750px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 98px;
    }
    .tabbar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 98px;
        width: 750px;
        flex-direction: row;
        justify-content: space-between;
        background-color: #f5f5f9;
    }
    .tabbar-item {
        justify-content: center;
        align-items: center;
        height: 98px;
        width: 98px;
    }
    .icon {
        width: 45px;
        height: 45px;
    }
</style>
