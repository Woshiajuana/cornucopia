<template>
    <div class="view-header" :style="{ height: header_height, backgroundColor: background_color }">
        <div class="view-header-left" @click="leftItemClickHandle">
            <image v-if="left_item_img_src" :src="left_item_img_src" class="header-left-image" resize="cover"></image>
            <text v-if="left_item_title" :style="{ color: left_item_color }" class="header-left-text">{{left_item_title}}</text>
        </div>
        <text :style="{ color: center_item_color }" class="header-center-text">{{center_item_title}}</text>
        <div class="view-header-right" @click="rightItemClickHandle">
            <text v-if="right_item_title" :style="{ color: right_item_color }" class="header-right-text">{{right_item_title}}</text>
            <image v-if="right_item_img_src" :src="right_item_img_src" class="header-right-image" resize="cover"></image>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'background_color', 'header_height', 'left_item_img_src', 'left_item_title', 'left_item_color', 'center_item_title', 'center_item_color', 'right_item_img_src', 'right_item_title', 'right_item_color' ],
        methods: {
            /**右边按钮点击事件*/
            rightItemClickHandle (event) {
                this.$emit('rightItemClick',event);
            },
            /**左边按钮点击事件*/
            leftItemClickHandle (event) {
                this.$emit('leftItemClick',event);
            }
        }
    }
</script>

<style>
    .view-header {
        position: fixed;
        flex-direction: row;
        top: 0;
        left: 0;
        right: 0;
        width: 750px;
        border-bottom-width: 2px;
        border-bottom-color: #e5e5e5;
    }
    .view-header-right,
    .view-header-left {
        position: absolute;
        flex-direction: row;
        top: 0;
        height: 88px;
    }
    .view-header-right{
        right: 0;
    }
    .view-header-left{
        left: 0;
    }
    .header-right-text,
    .header-left-text {
        top: 28px;
        padding-left: 25px;
        padding-right: 25px;
        text-align: right;
        font-size: 30px;
        font-family: 'Open Sans', sans-serif;
    }
    .header-center-text {
        position: absolute;
        height: 88px;
        left: 120px;
        right: 120px;
        line-height: 88px;
        text-align: center;
        font-size: 34px;
        font-family: 'Open Sans', sans-serif;
    }
    .header-left-image,
    .header-right-image {
        top: 25px;
        width: 90px;
        height: 40px;
        padding-right: 25px;
        padding-left: 25px;
    }
</style>

