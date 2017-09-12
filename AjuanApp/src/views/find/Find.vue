<template>
    <view
        :is_header="false"
        center_item_title="发现发现发现发"
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
    const modal = weex.requireModule('modal');
    export default {
        data () {
            return {
                rows: 10
            }
        },
        methods: {
            /**下拉距离*/
            pullingDownHandle (event) {
                modal.toast({message: '下拉距离——' + event.pullingDistance})
            },
            /**上拉距离*/
            pullingUpHandle (event) {
                modal.toast({message: '上拉距离——' + event.pullingDistance})
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
