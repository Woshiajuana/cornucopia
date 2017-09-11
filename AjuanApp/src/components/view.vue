<template>
    <div class="view-wrap">
        <view-header
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
        <slot></slot>
    </div>
</template>

<script>
    import ViewHeader from './children/view-header.vue'
    export default {
        props: {
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
            right_item_title: { default: '' },
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
</style>
