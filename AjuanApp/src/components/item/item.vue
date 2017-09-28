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
            <text :style="{ width: left_width, textAlign: left_text_align }" class="item-text item-left">{{left_text}}</text>
            <text v-if="!is_input" :style="{ width: left_width, textAlign: right_text_align }" class="item-text item-right">{{right_text}}</text>
            <input :placeholder="is_placeholder" v-if="is_input" class="item-text item-right" type="text"/>
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
            /**右边文案*/
            right_text: { default: '右边' },
            /**右边文案对齐方式*/
            right_text_align: { default: 'right' },
            /**距离左边宽度*/
            padding_left: { default: 20 },
            /**距离右边宽度*/
            padding_right: { default: 0 },
            /**边框宽度*/
            border_bottom_width: { default: 1 },
            /**边框颜色*/
            border_bottom_color: { default: '#333333' },
            /**边框宽度*/
            border_bottom_style: { default: 'solid' },
            /**是否是输入框*/
            is_input: { default: false },
            /**输入框类型*/
            input_type: { default: 'text' },
            /**输入框提示预览*/
            is_placeholder: { default: '请输入' }
        },
        methods: {
            /**点击事件*/
            pressHandle (event) {
                this.$emit('onPress',event);
            }
        }
    }
</script>

<style>
    .item-wrap{
        background-color: #3494E6;
    }
    .item-inner{
        flex: 1;
        flex-direction: row;
        align-items: center;
    }
    .item-inner-arrow:after{
        content: '';
        width: 20px;
        height: 20px;
        background-color: red;
    }
    .item-left{
        background-color: #999999;
    }
    .item-right{
        flex: 1;
        background-color: #3a3a3a;
    }
</style>
