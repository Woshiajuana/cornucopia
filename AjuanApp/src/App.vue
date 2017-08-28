<template>
    <div class="views-wrap">
        <!--主体-->
        <embed class="views-inner" v-for="(item, index) in nav_bar_arr" :key="index" :style="{visibility: item.visibility}" :src="item.src" type="weex"></embed>
        <!--/主体-->
        <!--导航栏-->
        <nav-bar class="nav-bar" :nav_bar_arr="nav_bar_arr" @switchNavBar="switchNavBarHandle"></nav-bar>
        <!--/导航栏-->
    </div>
</template>

<script>
    import NavBar from './components/nav-bar.vue'
    import source from './assets/lib/source'
    export default {
        data () {
            return {
                nav_bar_arr: [
                    {
                        index: 0,
                        txt: '首页',
                        src: 'http://172.21.65.1:13140/dist/index.js',
                        visibility: 'visible',
                        img_src1: source('sy_selected.png'),
                        img_src2: source('sy_normal.png'),
                        checked: true
                    },
                    {
                        index: 1,
                        txt: '发现',
                        src: 'http://172.21.65.1:13140/dist/find.js',
                        visibility: 'hidden',
                        img_src1: source('sxy_selected.png'),
                        img_src2: source('sxy_normal.png'),
                        checked: false
                    },
                    {
                        index: 2,
                        txt: '我的',
                        src: 'http://172.21.65.1:13140/dist/me.js',
                        visibility: 'hidden',
                        img_src1: source('wd_selected.png'),
                        img_src2: source('wd_normal.png'),
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
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 100px;
        background-color: #383838;
    }
    .views-inner{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 100px;
        width: 750px;
    }
    .nav-bar{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 98px;
        background-color: #fff;
    }
</style>
