<template>
    <div class="switch-menu-wrap"
         :style="{ height: menu_height,
         top: menu_position ? 0 : 'auto',
         bottom: menu_position ? 'auto' : 0,
         borderTopWidth: menu_position ? 0 : 1,
         borderBottomWidth: menu_position ? 1 : 0,
         backgroundColor: menu_background_color }">
        <slot v-if="use_menu"></slot>
        <div v-if="!use_menu"
             class="switch-menu-item"
             v-for="(item, index) in switch_page_arr"
             :key="index">
            <text class="switch-menu-item-txt" :style="{color: nav_bar_item.checked ? '#58B7FF' : '#999999'}">{{item}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'switch_page_arr', 'menu_position', 'menu_height', 'menu_background_color', 'use_menu' ],
        created () {
            console.log(this.use_menu)
        }
    }
</script>
<style>
    .switch-menu-wrap {
        position: absolute;
        left: 0;
        width: 750px;
        flex-direction: row;
        align-items: center;
        border-top-width: 1px;
        border-top-color: #c0bfc4;
        border-top-style: solid;
        border-bottom-color: #c0bfc4;
        border-bottom-style: solid;
    }
    .switch-menu-item {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .switch-menu-item-txt {
        font-size: 22px;
        justify-content: center;
        align-items: center;
    }
    .switch-menu-img {
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
    }
</style>
