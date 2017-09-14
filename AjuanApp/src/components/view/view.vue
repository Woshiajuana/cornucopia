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
            @leftItemClick="leftItemClickHandle">
        </view-header>
        <scroller :style="{ top: is_header ? 90 : .1 }" class="view-inner">
            <!--上拉刷新-->
            <refresh class="view-refresh"
                     v-if="is_refresh"
                     @refresh="refreshHandle"
                     @pullingdown="pullingDownHandle"
                     :style="{ backgroundColor: refresh_load_background_color }"
                     :display="is_refresh_status ? 'show' : 'hide'">
                <loading-indicator class="view-refresh-icon"
                                   v-if="is_refresh_type"
                                   :style="{ visibility: is_refresh_type ? 'visible' : 'hidden',
                                   color: indicator_color,
                                   backgroundColor: indicator_background_color }">
                </loading-indicator>
            </refresh>
            <!--/上拉刷新-->
            <!--主体-->
            <slot></slot>
            <!--/主体-->
            <!--下拉刷新-->
            <loading class="view-loading"
                     v-if="is_load"
                     @loading="loadHandle"
                     @pullingup="pullingUpHandle"
                     :style="{ backgroundColor: refresh_load_background_color }"
                     :display="is_load_status ? 'show' : 'hide'">
                <loading-indicator class="view-loading-icon"
                                   :style="{ visibility: is_load_type ? 'visible' : 'hidden',
                                   color: indicator_color,
                                   backgroundColor: indicator_background_color }">
                </loading-indicator>
                <text class="view-loading-text"
                      v-if="!is_load_type"
                      :style="{ color: load_done_color }">没有更多了</text>
            </loading>
            <!--/下拉刷新-->
        </scroller>
    </div>
</template>

<script>
    import ViewHeader from './children/view-header.vue'
    import navigator from '../../module/navigator/navigator'
    import source from '../../tool/source'
    export default {
        data () {
            return {
                /**下拉状态*/
                is_refresh_status: false,
                /**上拉状态*/
                is_load_status: false,
                /**是否可以上拉*/
                is_load_type: true,
                /**是否可以下拉*/
                is_refresh_type: true
            }
        },
        props: {
            /**是否不启用默认点击事件*/
            is_not_enabled_left_default_click: { default: false },
            /**是否有头部*/
            is_header: { default: true },
            /**是否支持下拉刷新*/
            is_refresh: { default: false },
            /**是否支持上拉加载*/
            is_load: { default: false },
            /**导航条背景色*/
            background_color: { default: '#FFFFFF' },
            /**导航条高度*/
            header_height: { default: 90 },
            /**左侧按钮图片*/
            left_item_img_src: { default: source('return-icon.png') },
            /**左侧按钮标题*/
            left_item_title: { default: '' },
            /**左侧按钮颜色*/
            left_item_color: { default: '#000000' },
            /**导航条标题*/
            center_item_title: { default: '' },
            /**导航条标题颜色*/
            center_item_color: { default: '#000000' },
            /**右侧按钮图片*/
            right_item_img_src: { default: '' },
            /**右侧按钮标题*/
            right_item_title: { default: '' },
            /**右侧按钮标题颜色*/
            right_item_color: { default: '#000000' },
            /**下拉上拉背景色*/
            refresh_load_background_color: { default: '#383838' },
            /**指示器颜色*/
            indicator_color: { default: '#58B7FF' },
            /**指示器背景颜色*/
            indicator_background_color: { default: '#FFFFFF' },
            /**字体颜色*/
            load_done_color: { default: '#FFFFFF' }
        },
        methods: {
            /**右边按钮点击事件*/
            rightItemClickHandle (event) {
                this.$emit('rightItemClick',event);
            },
            /**左边按钮点击事件*/
            leftItemClickHandle (event) {
                this.is_not_enabled_left_default_click ? this.$emit('leftItemClick',event) : navigator.pop();
            },
            /**上拉加载数据*/
            loadHandle (event) {
                this.is_load_status = true;
                this.is_load_type && this.$emit('load', event);
                !this.is_load_type && setTimeout(this.loaded,0);
            },
            /**下拉刷新数据*/
            refreshHandle (event) {
                this.is_refresh_status = true;
                this.is_refresh_type && this.$emit('refresh', event);
                !this.is_refresh_type && setTimeout(this.refreshed,0);
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
            resetStatus () {
                this.is_load_status = false;
                this.is_refresh_status = false;
            },
            /**上拉完成*/
            loaded () {
                this.is_load_status = false;
            },
            /**下拉完成*/
            refreshed () {
                this.is_refresh_status = false;
            },
            /**禁止上拉*/
            banLoad () {
                this.is_load_type = false;
            },
            /**恢复上拉*/
            regainLoad () {
                this.is_load_type = true;
            },
            /**禁止下拉*/
            banRefresh () {
                this.is_refresh_type = false;
            },
            /**恢复下拉*/
            regainRefresh () {
                this.is_refresh_type = true;
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
        height: 100px;
        line-height: 100px;
    }
    .view-refresh-icon,
    .view-loading-icon{
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
    .view-refresh-icon{
        margin-bottom: 25px;
    }
    .view-loading-text{
        font-size: 24px;
    }
</style>
