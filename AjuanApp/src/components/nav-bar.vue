<template>
    <div class="nav-bar-wrap">
        <div class="nav-bar-item" v-for="( nav_bar_item, nav_bar_index ) in nav_bar_arr" :key="nav_bar_index" @click="switchNavBarHandle(nav_bar_index)">
            <image :src="nav_bar_item.checked ? nav_bar_item.img_src1 : nav_bar_item.img_src2" class="nav-bar-img"></image>
            <text class="nav-bar-txt">{{nav_bar_item.txt}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'nav_bar_arr' ],
        methods: {
            /**切换导航菜单*/
            switchNavBarHandle (nav_bar_index) {
                this.$emit('switchNavBar', nav_bar_index);
            }
        }
    }
</script>
<style scoped>
    .nav-bar-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-top-color: #e5e5e5;
        border-top-style: solid;
        border-top-width: 2px;
    }
    .nav-bar-item{
        background-color: #ccc;
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 98px;
    }
    .nav-bar-item:active {
        background-color: #ccc;
    }
    .nav-bar-txt {
        justify-content: center;
        align-items: center;
        /*height: 60;*/
    }
    .nav-bar-img {
        justify-content: center;
        align-items: center;
        border:1px solid #8496a2;
        width: 44px;
        height: 44px;
    }
</style>
