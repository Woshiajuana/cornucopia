<template>
    <div class="view-wrap">
        <view-header
        v-if="is_header"
        :background_color="background_color"
        :header_height="header_height"
        :left_item_img_src="left_item_img_src"
        :left_item_title="left_item_title"
        :left_item_color="left_item_color"
        :center_item_title="center_item_title"
        :center_item_color="center_item_color"
        :right_item_img_src="right_item_img_src"
        :right_item_title="right_item_title"
        :right_item_color="right_item_color"
        @rightItemClick="rightItemClickHandle"
        @leftItemClick="leftItemClickHandle"
        ></view-header>
        <scroller :style="{ top: is_header ? 90 : 1 }" class="view-inner">
            <!--上拉刷新-->
            <refresh v-if="is_refresh" class="view-refresh" @refresh="refreshHandle" @pullingdown="pullingDownHandle" :display="is_refresh_status ? 'show' : 'hide'">
                <loading-indicator class="view-refresh-icon"></loading-indicator>
            </refresh>
            <!--/上拉刷新-->
            <!--主体-->
            <slot></slot>
            <!--/主体-->
            <!--下拉刷新-->
            <loading v-if="is_load" class="view-loading" @loading="loadHandle" @pullingup="pullingUpHandle" :display="is_load_status">
                <loading-indicator class="view-loading-icon"></loading-indicator>
            </loading>
            <!--/下拉刷新-->
        </scroller>
    </div>
</template>

<script>
    import ViewHeader from './children/view-header.vue'
    const modal = weex.requireModule('modal');
    export default {
        data () {
            return {
                /**下拉状态*/
                is_refresh_status: false,
                /**上拉状态*/
                is_load_status: 'hide'
            }
        },
        props: {
            /**是否有头部*/
            is_header: { default: true },
            /**是否支持下拉刷新*/
            is_refresh: { default: false },
            /**是否支持上拉加载*/
            is_load: { default: false },
            /**导航条背景色*/
            background_color: { default: '#ffffff' },
            /**导航条高度*/
            header_height: { default: 90 },
            /**左侧按钮图片*/
            left_item_img_src: { default: 'http://dsposweb.oss-cn-hangzhou.aliyuncs.com/Image/jyfl_1.png' },
            /**左侧按钮标题*/
            left_item_title: { default: '' },
            /**左侧按钮颜色*/
            left_item_color: { default: '#000' },
            /**导航条标题*/
            center_item_title: { default: '' },
            /**导航条标题颜色*/
            center_item_color: { default: 'black' },
            /**右侧按钮图片*/
            right_item_img_src: { default: '' },
            /**右侧按钮标题*/
            right_item_title: { default: '邀请注册' },
            /**右侧按钮标题颜色*/
            right_item_color: { default: 'black' }
        },
        methods: {
            /**右边按钮点击事件*/
            rightItemClickHandle (event) {
                this.$emit('rightItemClick',event);
            },
            /**左边按钮点击事件*/
            leftItemClickHandle (event) {
                this.$emit('leftItemClick',event);
            },
            /**上拉加载数据*/
            loadHandle (event) {
                this.is_load_status = 'show';
                this.$emit('load', event);
            },
            /**下拉刷新数据*/
            refreshHandle (event) {
                this.is_refresh_status = true;
                this.$emit('refresh', event);
            },
            /**下拉距离*/
            pullingDownHandle (event) {
                this.$emit('pullingDown', event);
            },
            /**上拉距离*/
            pullingUpHandle (event) {
                this.$emit('pullingUp', event);
            },
            /**重置状态*/
            reset () {
                this.is_load_status = 'hide';
                this.is_refresh_status = 'hide';
            },
            /**上拉完成*/
            loaded () {
                this.is_load_status = 'hide';
            },
            /**下拉完成*/
            refreshed () {
                this.is_refresh_status = false;
            }
        },
        components: {
            ViewHeader
        }
    }
</script>

<style>
    .view-wrap{
        flex: 1;
    }
    .view-inner{
        position: absolute;
        width: 750px;
        left: 0;
        bottom: 0;
        background-color: #f5f5f5;
    }
    .view-refresh,
    .view-loading{
        justify-content:center;
        flex-direction: row;
        align-items:center;
        height: 80px;
        line-height: 80px;
        background-color: #383838;
    }
    .view-refresh-icon,
    .view-loading-icon{
        margin-bottom: 15px;
        width: 50px;
        height: 50px;
    }
</style>
