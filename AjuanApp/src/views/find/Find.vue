<template>
    <view
        center_item_title="标题"
        right_item_title="活动"
        :is_refresh="true"
        :is_load="true"
        @refresh="refreshHandle"
        @load="loadHandle"
        @pullingDown="pullingDownHandle"
        @pullingUp="pullingUpHandle"
        ref="scroller">
        <article-list-item v-for="item in rows" :key="item"></article-list-item>
    </view>
</template>

<script>
    import View from './../../components/view.vue'
    import ArticleListItem from '../../components/article-list-item.vue'
    export default {
        data () {
            return {
                rows: 10
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
                }, 2000)
            },
            loadHandle () {
                setTimeout(() => {
                    this.rows += 10;
                    this.$refs.scroller.loaded();
                }, 1500)
            }
        },
        components: {
            View,
            ArticleListItem
        }
    }

</script>

<style>

</style>
