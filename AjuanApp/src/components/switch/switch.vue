<template>
    <div class="switch-wrap">
        <switch-menu
            v-if="menu_position=='top'"
            :class="menu_position == 'top' ? '' : ''"
            :switch_page_arr="switch_page_arr"
            :menu_position_top="0"
            :menu_position_bottom="'auto'"
            :menu_height="menu_height"
            :menu_background_color="menu_background_color"
            @switchMenu="switchMenuHandle">
        </switch-menu>
        <!--主体-->
        <div class="switch-inner">
            <embed class="switch-content"
                   v-if="menu_position=='top'"
                   v-for="(item, index) in nav_bar_arr"
                   :key="index"
                   :style="{visibility: item.visibility}"
                   :src="item.src"
                   type="weex">
            </embed>
        </div>
        <!--/主体-->
        <switch-menu
            v-if="menu_position=='bottom'"
            :switch_page_arr="switch_page_arr"
            :menu_position="menu_position"
            :menu_position_top="'auto'"
            :menu_position_bottom="0"
            :menu_height="menu_height"
            :menu_background_color="menu_background_color"
            @switchMenu="switchMenuHandle">
        </switch-menu>
    </div>
</template>

<script>
    import SwitchMenu from './children/switch-menu.vue'
    import PageUrlConfig from './../../config/page_url_config'
    export default {
        props: {
            /**菜单位置*/
            menu_position: { default: 'top' },
            /**菜单高度*/
            menu_height: { default: 100 },
            /**菜单颜色*/
            menu_background_color: { default: '#FFFFFF' },
            /**内容*/
            switch_page_arr: { default: [{
                index: 0,
                txt: '首页',
                src: PageUrlConfig['home'],
                visibility: 'visible',
                img_icon_name: 'home-icon',
                checked: true
            },
            {
                index: 1,
                txt: '发现',
                src: PageUrlConfig['find'],
                visibility: 'hidden',
                img_icon_name: 'find-icon',
                checked: false
            },
            {
                index: 2,
                txt: '留言',
                src: PageUrlConfig['message'],
                visibility: 'hidden',
                img_icon_name: 'message-icon',
                checked: false
            },
            {
                index: 3,
                txt: '关于',
                src: PageUrlConfig['about'],
                visibility: 'hidden',
                img_icon_name: 'about-icon',
                checked: false
            }] }
        },
        methods: {
            /**切换菜单*/
            switchMenuHandle () {
                for (var i = 0; i < this.switch_page_arr.length; i++) {
                    var nav_item = this.switch_page_arr[i];
                    if (i == index) {
                        nav_item.visibility = 'visible';
                        nav_item.checked = true;
                    } else {
                        nav_item.visibility = 'hidden';
                        nav_item.checked = false;
                    }
                }
            }
        },
        components: {
            SwitchMenu
        }
    }
</script>

<style>
    .switch-content,
    .switch-wrap{
        flex: 1;
    }
    .switch-inner{
        position: absolute;
        width: 750px;
        left: 0;
        right: 0;
    }
</style>
