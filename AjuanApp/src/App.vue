<template>
    <div class="views-wrap">
        <!--主体-->
        <div class="views-inner">
            <embed class="view-content" v-for="(item, index) in nav_bar_arr" :key="index" :style="{visibility: item.visibility}" :src="item.src" type="weex"></embed>
        </div>
        <!--/主体-->
        <!--导航栏-->
        <nav-bar class="nav-bar" :nav_bar_arr="nav_bar_arr" @switchNavBar="switchNavBarHandle"></nav-bar>
        <!--/导航栏-->
    </div>
</template>

<script>
    import NavBar from './components/nav-bar.vue'
    import source from './assets/lib/source'
    import PageUrlConfig from './config/page_url_config'
    const modal = weex.requireModule('modal');
    export default {
        data () {
            return {
                nav_bar_arr: [
                    {
                        index: 0,
                        txt: '首页1',
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
                    }
                ]
            }
        },
        methods: {
            switchNavBarHandle ( index ) {
                for (var i = 0; i < this.nav_bar_arr.length; i++) {
                    var nav_item = this.nav_bar_arr[i];
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
            NavBar
        }
    }
</script>

<style scoped>
    .views-wrap{
        flex: 1;
    }
    .views-inner{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 100px;
        width: 750px;
    }
    .view-content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .nav-bar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 99px;
        background-color: #F7F7FA;
        border-top-width: 1px;
        border-top-color: #c0bfc4;
        border-top-style: solid;
    }
</style>
