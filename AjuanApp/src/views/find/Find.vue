<template>
    <view
        center_item_title="发现"
        right_item_title="筛选"
        left_item_title="关闭">
        <switch-com
            menu_position="top"
            menu_background_color="#ffffff"
            :switch_page_arr="switch_page_arr">
        </switch-com>
    </view>
</template>

<script>
    import SwitchCom from '../../components/switch/switch.vue'
    import View from '../../components/view/view.vue'
    import PageUrlConfig from './../../config/page_url_config'
    export default {
        data () {
            return {
                switch_page_arr: [
                {
                    txt: '好玩的',
                    src: PageUrlConfig['message'],
                    visibility: 'hidden',
                    checked: true
                },
                {
                    txt: '好吃的',
                    src: PageUrlConfig['about'],
                    visibility: 'hidden',
                    checked: false
                }]
            }
        },
        methods: {
            /**切换导航菜单*/
            switchMenuHandle (index) {
                for (var i = 0; i < this.switch_page_arr.length; i++) {
                    var item = this.switch_page_arr[i];
                    if (i == index) {
                        item.visibility = 'visible';
                        item.checked = true;
                    } else {
                        item.visibility = 'hidden';
                        item.checked = false;
                    }
                }
            }
        },
        components: {
            SwitchCom,
            View
        }
    }
</script>

<style>

</style>
