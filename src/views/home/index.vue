<template>
    <div class="home-view-wrap">
        <div class="cell" v-for="(item, index) in computedArticles" :key="index">
            <p class="cell-date">2020年{{index+1}}月</p>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
        </div>
        <article-cell-loading
            :is-complete="numTotal !== -1 && numIndex * numSize >= numTotal"
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
        computed: {
            computedArticles () {
                console.log(this.arrData.slice(0, this.numIndex * this.numSize));
                return this.arrData.slice(0, this.numIndex * this.numSize);
            }
        },
        data () {
            return {
                arrData: [],
                numTotal: -1,
                numSize: 1,
                numIndex: 1,
                isLoading: false,
            }
        },
        created () {
            this.reqArticleList();
        },
        methods: {
            reqArticleList () {
                this.$curl.get('static/mocks/articles.json').then((res) => {
                    this.arrData = res || [];
                    this.numTotal = this.arrData.length;
                });
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
                if (this.numIndex * this.numSize >= this.numTotal)
                    return console.log('没有更多了');
                this.isLoading = true;
                setTimeout(() => {
                    this.numIndex++;
                    this.isLoading = false;
                }, 500);
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
