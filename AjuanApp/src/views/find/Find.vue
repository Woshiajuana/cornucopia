<template>
    <switch-com
        :switch_page_arr="switch_page_arr">
    </switch-com>
</template>

<script>
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

        },
        components: {
            SwitchCom
        }
    }
</script>

<style>

</style>
