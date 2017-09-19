<template>
    <switch-com
        :use_menu="true"
        :switch_page_arr="switch_page_arr">
        <nav-bar style="flex: 1;" slot="menu" :nav_bar_arr="switch_page_arr" @switchNavBar="switchMenuHandle"></nav-bar>
    </switch-com>
</template>

<script>
    import NavBar from '../../components/nav-bar.vue'
    import SwitchCom from '../../components/switch/switch.vue'
    import PageUrlConfig from './../../config/page_url_config'
    export default {
        data () {
            return {
                switch_page_arr: [{
                    txt: '首页',
                    src: PageUrlConfig['home'],
                    visibility: 'visible',
                    img_icon_name: 'home-icon',
                    checked: true
                },
                {
                    txt: '发现',
                    src: PageUrlConfig['find'],
                    visibility: 'hidden',
                    img_icon_name: 'find-icon',
                    checked: false
                },
                {
                    txt: '留言',
                    src: PageUrlConfig['message'],
                    visibility: 'hidden',
                    img_icon_name: 'message-icon',
                    checked: false
                },
                {
                    txt: '关于',
                    src: PageUrlConfig['about'],
                    visibility: 'hidden',
                    img_icon_name: 'about-icon',
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
            NavBar
        }
    }
</script>

<style>
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
