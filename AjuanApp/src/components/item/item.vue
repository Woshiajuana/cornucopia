<template>
    <div class="item-wrap"
        :style="{ height: height,
        paddingLeft: padding_left,
        paddingRight: padding_right}"
        @click="pressHandle">
        <div class="item-inner item-inner-arrow"
            :style="{ borderBottomWidth: border_bottom_width,
             borderBottomColor: border_bottom_color,
             borderBottomStyle: border_bottom_style,
             paddingRight: padding_left}">
            <image class="item-left-img"
                   v-if="left_img_src"
                   :style="{width: left_img_width_and_height[0],
                   height: left_img_width_and_height[1]}"
                   :src="left_img_src"></image>
            <text class="item-text item-left"
                  :style="{ width: left_width,
                  color: left_text_color,
                  fontSize: left_text_size,
                  textAlign: left_text_align }">{{left_text}}</text>
            <text class="item-text item-right"
                  v-if="!is_input"
                  :style="{ width: left_width,
                  color: right_text_color,
                  fontSize: right_text_size,
                  textAlign: right_text_align }">{{right_text}}</text>

            <input class="item-text item-right"
                   :placeholder="is_placeholder"
                   v-if="is_input"
                   :value="input_value"
                   @input="inputHandle"
                   :maxlength="input_max_length"
                   :style="{ width: left_width,
                   color: right_text_color,
                   fontSize: right_text_size,
                   textAlign: right_text_align }"
                   :type="input_type"/>
            <image class="item-right-img"
                :style="{width: right_img_width_and_height[0],
                height: right_img_width_and_height[1]}"
                v-if="right_img_src"
                :src="right_img_src"></image>
            <div class="item-arrow"
                 v-if="is_arrow"
                 :style="{ borderTopColor: is_arrow_color,
                 borderRightColor: is_arrow_color}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: {
            /**高度*/
            height: { default: 90 },
            /**左边宽度*/
            left_width: { default: 120 },
            /**左边文案*/
            left_text: { default: '左边' },
            /**左边文案对齐方式*/
            left_text_align: { default: 'left' },
            /**左边文案颜色*/
            left_text_color: { default: '#333' },
            /**左边文案字体大小*/
            left_text_size: { default: 28 },
            /**右边文案*/
            right_text: { default: '右边' },
            /**右边文案颜色*/
            right_text_color: { default: '#333' },
            /**右边文案对齐方式*/
            right_text_align: { default: 'right' },
            /**右边文案字体大小*/
            right_text_size: { default: 28 },
            /**距离左边宽度*/
            padding_left: { default: 20 },
            /**距离右边宽度*/
            padding_right: { default: 0 },
            /**边框宽度*/
            border_bottom_width: { default: 1 },
            /**边框颜色*/
            border_bottom_color: { default: '#ddd' },
            /**边框宽度*/
            border_bottom_style: { default: 'solid' },
            /**是否是输入框*/
            is_input: { default: false },
            /**输入框类型*/
            input_type: { default: 'text' },
            /**输入最大值*/
            input_max_length: { default: 11 },
            /**输入框提示预览*/
            is_placeholder: { default: '请输入' },
            /**是否需要右边icon*/
            is_arrow: { default: true },
            /**是否需要右边icon*/
            is_arrow_color: { default: '#999999' },
            /**左边图片*/
            left_img_src: { default: '' },
            /**左边图片宽*/
            left_img_width_and_height: { default: [40,40] },
            /**右边图片*/
            right_img_src: { default: '' },
            /**右边图片宽*/
            right_img_width_and_height: { default: [40,40] }
        },
        data () {
            return {
                input_value: ''
            }
        },
        created () {
            this.input_value = this.right_text;
        },
        methods: {
            /**点击事件*/
            pressHandle (event) {
                this.$emit('onPress',event);
            },
            inputHandle (){
                this.$emit('inputChange', this.input_value);
            }
        }
    }
</script>

<style>
    .item-wrap{
        background-color: #ffffff;
    }
    .item-inner{
        flex: 1;
        flex-direction: row;
        align-items: center;
    }
    .item-arrow{
        width: 24px;
        height: 24px;
        margin-right: 10px;
        margin-left: 10px;
        border-top-width: 3px;
        border-top-style: solid;
        border-right-width: 3px;
        border-right-style: solid;
        transform: rotate(45deg);
    }
    .item-right-img{
        margin-left: 10px;
    }
    .item-left-img{
        margin-right: 10px;
    }
    .item-left{

    }
    .item-right{
        flex: 1;
    }
</style>
