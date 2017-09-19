<template>
    <view
        :is_header="false"
        :is_refresh="true"
        :is_load="true"
        @refresh="refreshHandle"
        @load="loadHandle"
        @pullingDown="pullingDownHandle"
        @pullingUp="pullingUpHandle"
        ref="scroller">
        <div class="home-header">
            <div class="home-header-top">
                <div class="home-header-top-date">
                    <div class="home-header-top-date-con">
                        <text class="home-header-top-date-con-day-txt">{{dayComputed}}</text>
                        <svg class="home-header-date-icon">
                            <path fill="#F7F7FA" d="M4.19,37.714c0,2.324,1.871,4.19,4.19,4.19h27.238c2.324,0,4.19-1.871,4.19-4.19V10.476c0-2.324-1.871-4.19-4.19-4.19H8.381
c-2.324,0-4.19,1.871-4.19,4.19V37.714z M8.381,4.19h27.238c3.472,0,6.286,2.799,6.286,6.286v27.238
c0,3.472-2.799,6.286-6.286,6.286H8.381c-3.472,0-6.286-2.799-6.286-6.286V10.476C2.095,7.004,4.894,4.19,8.381,4.19z"/>
                            <path fill="#F7F7FA" d="M40.369,16.848v-2.095H4.065v2.095H40.369z M11.733,8.331c0,0.579,0.469,1.048,1.047,1.048c0.579,0,1.048-0.469,1.048-1.047
c0,0,0-0.001,0-0.001V2.099c0-0.579-0.469-1.048-1.047-1.048c-0.579,0-1.048,0.469-1.048,1.047c0,0,0,0.001,0,0.001
C11.733,2.099,11.733,8.331,11.733,8.331z M30.59,8.331c0,0.579,0.469,1.048,1.047,1.048s1.048-0.469,1.048-1.047
c0,0,0-0.001,0-0.001V2.099c0-0.579-0.469-1.047-1.048-1.047c-0.578,0-1.047,0.469-1.047,1.047C30.59,2.099,30.59,8.331,30.59,8.331
z"/>
                        </svg>
                    </div>
                    <text class="home-header-top-date-txt">{{dateComputed}}</text>
                </div>
                <svg class="home-header-top-filter-btn" @click="filterHandle">
                    <path fill="#F7F7FA" d="M40.899,6.731L25.338,25.379v10.847c0,0.25-0.125,0.501-0.292,0.667l-5.006,4.088c-0.542,0.459-1.377,0.042-1.377-0.667
V25.379L3.102,6.731C2.643,6.189,3.018,5.354,3.727,5.354h36.504C40.94,5.354,41.357,6.189,40.899,6.731L40.899,6.731z"/>
                </svg>
            </div>
            <div class="home-header-search-link" @click="toSearchHandle">
                <text class="home-header-search-link-txt">搜索文章</text>
            </div>
        </div>
        <article-list-item v-for="item in rows" :key="item"></article-list-item>
    </view>
</template>

<script>
    import Tool from '../../assets/lib/Tool'
    import View from '../../components/view/view.vue'
    import ArticleListItem from '../../components/article-list-item.vue'
    import PageUrl from '../../config/page_url_config'
    import navigator from '../../module/navigator/navigator'
    export default {
        data () {
            return {
                rows: 10
            }
        },
        computed: {
            /**日期计算属性*/
            dateComputed () {
                return Tool.format('yyyy-MM-dd');
            },
            /**几号计算属性*/
            dayComputed () {
                return Tool.format('dd');
            }
        },
        methods: {
            /**下拉距离*/
            pullingDownHandle (event) {
            },
            /**上拉距离*/
            pullingUpHandle (event) {
            },
            refreshHandle () {
                setTimeout(() => {
                    this.rows = 10;
                    this.$refs.scroller.refreshed();
                    this.$refs.scroller.regainLoad();
                }, 2000)
            },
            loadHandle () {
                setTimeout(() => {
                    this.rows += 10;
                    if(this.rows >= 30) {
                        this.$refs.scroller.banLoad();
                    }
                    this.$refs.scroller.loaded();
                }, 1500)
            },
            toSearchHandle () {
                navigator.push({url: PageUrl['search']})
            },
            filterHandle () {
                navigator.push({url: PageUrl['filter']})
            }
        },
        components: {
            ArticleListItem,
            View
        }
    }
</script>

<style>
    .home-header{
        width: 750px;
        height: 240px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #58B7FF;
    }
    .home-header-search-link{
        background-color: #fff;
        margin-top: 20px;
        margin-left: 32px;
        margin-right: 32px;
        height: 72px;
        border-radius: 72px;
        box-shadow: 0 6px 6px 0 rgba(0,0,0,.2);
    }
    .home-header-search-link-txt{
        text-align: center;
        color: #333;
        font-size: 28px;
        line-height: 72px;
    }
    .home-header-top{
        position: relative;
        color: #f2f2f2;
        height: 70px;
        line-height: 70px;
    }
    .home-header-top-date{
        position: absolute;
        top: 0;
        height: 70px;
        left: 40px;
        padding-left: 60px;
    }
    .home-header-top-date:after{
        position: absolute;
        right: -30px;
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top:  6px solid #f2f2f2;
    }
    .home-header-top-date-con{
        position: absolute;
        left: 0;
        top: 13px;
        height: 44px;
        width: 44px;
    }
    .home-header-top-date-con-day-txt{
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 22px;
    }
    .home-header-top-date-txt{
        line-height: 70px;
        font-size: 28px;
        color: #fff;
    }
    .home-header-date-icon{
        position: absolute;
        height: 48px;
        width: 48px;
        left: 0;
        top: 0;
    }
    .home-header-top-filter-btn{
        position: absolute;
        height: 50px;
        width: 50px;
        top: 10px;
        right: 40px;
    }
</style>
