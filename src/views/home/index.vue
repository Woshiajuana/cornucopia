<template>
    <div class="home-view-wrap">
        <div class="cell" v-for="(item, index) in arrData" :key="index">
            <p class="cell-date">2020年{{index+1}}月</p>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
        </div>
        <article-cell-loading
            :is-complete="isComplete"
        ></article-cell-loading>
    </div>
</template>
<script>

    import ArticleCell from 'src/components/article-cell'
    import ArticleCellLoading from 'src/components/article-cell-loading'
    import ScrollMixin from 'src/mixins/scroll.mixin'

    export default {
        mixins: [
            ScrollMixin,
        ],
        data () {
            return {
                arrData: [],
                isLoading: false,
                isComplete: false,
            }
        },
        methods: {
            reqArticleList () {

            },
            scrollCallback () {
                let { scrollTop, scrollHeight, clientHeight } = this.scroll$;
                if (scrollTop + clientHeight > scrollHeight - 300) {
                    if (this.$route.path === '/') this.loadingMore();
                }
            },
            loadingMore () {
                if (this.isLoading)
                    return console.log('正在加载中...');
                if (this.isComplete)
                    return console.log('没有更多了');
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                    if (this.arrData > 20) {
                        return this.isComplete = true;
                    }
                    this.arrData += 5;
                }, 2000);
            },
        },
        components: {
            ArticleCell,
            ArticleCellLoading,
        },
    }

</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .home-view-wrap{
    }
    .cell{

    }
    .cell-date{
        @extend %df;
        @extend %aic;
        @extend %c6;
        @extend %fwb;
        @extend %ps;
        top: j(50);
        padding-left: j(20);
        font-size: j(18);
        background-color: #f2f2f2;
        height: j(50);
    }
</style>
