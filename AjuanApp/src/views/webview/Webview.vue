<template>
    <div class="webview-wrap">
        <web class="webview-inner"
             ref="webview"
             :src="webviewSrcCom"
             :style="{ top: top }"
             @pagestart="pageStartHandle"
             @pagefinish="pageFinishHandle"
             @error="pageErrorHandle">
        </web>
        <div class="webview-menu">
            <div class="webview-menu-item" @click="leftMenuClickHandle">
                <image class="webview-menu-item-icon" :src="leftMenuSrcCom"></image>
            </div>
            <div class="webview-menu-item" @click="centerMenuClickHandle">
                <image class="webview-menu-item-icon" :src="centerMenuSrcCom"></image>
            </div>
            <div class="webview-menu-item" @click="rightMenuClickHandle">
                <image class="webview-menu-item-icon" :src="rightMenuSrcCom"></image>
            </div>
        </div>
    </div>
</template>

<script>
    import navigator from '../../module/navigator/navigator';
    import source from '../../tool/source';
    const webview = weex.requireModule('webview');
    const modal = weex.requireModule('modal');
    export default {
        data: function () {
            return {
                top: 0,
                count: 0,
            }
        },
        computed: {
            /**webview内容资源*/
            webviewSrcCom: function () {
                var webview_src = navigator.params(this) || {};
                return webview_src.link || '';
            },
            /**左边菜单资源*/
            leftMenuSrcCom: function () {
                modal.toast('触发')
                return source('return-icon.png');
            },
            /**中间菜单资源*/
            centerMenuSrcCom: function () {
                return source('refresh-icon.png');
            },
            /**右边菜单资源*/
            rightMenuSrcCom: function () {
                return source('close-icon.png');
            }
        },
        methods: {
            /**页面开始加载触发*/
            pageStartHandle: function(event) {
                modal.toast('触发')
                this.count += 1;
            },
            /**页面加载完成触发*/
            pageFinishHandle: function(e) {

            },
            /**页面加载失败触发*/
            pageErrorHandle: function(e) {

            },
            /**左边菜单点击事件*/
            leftMenuClickHandle: function (event) {
                var count = this.count;
                webview.goBack(this.$refs.webview);
                setTimeout(function() {
                    if (count === this.count) return navigator.pop(); // hack
                }.bind(this), 200);
            },
            /**中间菜单点击事件*/
            centerMenuClickHandle: function (event) {
                webview.reload(this.$refs.webview)
            },
            /**右边菜单点击事件*/
            rightMenuClickHandle: function (event) {
                navigator.pop();
            }
        }
    };
</script>

<style>
    .webview-wrap {
        flex: 1;
    }
    .webview-inner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 98px;
    }
    .webview-menu {
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
    .webview-menu-item {
        justify-content: center;
        align-items: center;
        height: 98px;
        width: 98px;
    }
    .webview-menu-item-icon {
        width: 45px;
        height: 45px;
    }
</style>
