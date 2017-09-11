<template>
    <div class="view-header" :style="{ height: header_height, backgroundColor: background_color }">
        <div class="view-header-left" @click="leftItemClickHandle">
            <text v-if="!left_item_img_src" :style="{ color: left_item_color }" class="header-left-text">{{left_item_title}}</text>
            <image v-if="left_item_img_src" :src="left_item_img_src" class="header-left-image" resize="cover"></image>
        </div>
        <text :style="{ color: center_item_color }" class="header-center-text">{{center_item_title}}</text>
        <div class="view-header-right" @click="rightItemClickHandle">
            <text v-if="!right_item_img_src" :style="{ color: right_item_color }" class="header-right-text">{{right_item_title}}</text>
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
    .view-header-right {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 108px;
        height: 88px;
    }
    .view-header-left {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 108px;
        height: 88px;
    }
    .header-right-text {
        position: absolute;
        top: 28px;
        right: 32px;
        text-align: right;
        font-size: 30px;
        font-family: 'Open Sans', sans-serif;
    }
    .header-left-text {
        position: absolute;
        top: 28px;
        left :32px;
        text-align :center;
        font-size: 30px;
        font-family: 'Open Sans', sans-serif;
    }
    .header-center-text {
        position: absolute;
        bottom: 26px;
        left: 172px;
        right: 172px;
        text-align: center;
        font-size: 34px;
        font-family: 'Open Sans', sans-serif;
    }
    .header-left-image {
        position: absolute;
        bottom: 20px;
        left: 28px;
        width: 40px;
        height: 40px;
    }
    .header-right-image {
        position: absolute;
        bottom: 20px;
        right: 28px;
        width: 40px;
        height: 40px;
    }
</style>

