<template>
    <div class="details-view-wrap">
        <article-cell-loading v-show="!strContent"></article-cell-loading>
        <template v-if="strContent">
            <div class="article-header">
                <h1>{{objArticle.title}}</h1>
                <p class="time">{{objArticle.date}}</p>
                <div class="tag">
                    <span class="tag-item">{{objArticle.classify}}</span>
                </div>
            </div>
            <div class="article-content" ref="article" id="article" v-html="strContent"></div>
        </template>
    </div>
</template>
<script>
    import marked from 'marked'
    import hljs from 'src/utils/highlight.pack'
    import ArticleCellLoading from 'src/components/article-cell-loading'

    export default {
        data () {
            return {
                strContent: '',
                objArticle: '',
            };
        },
        watch: {
            //监听路由变化
            '$route.params' () {
                if (this.$route.path.startsWith('/details')) {
                    this.strContent = '';
                    this.objArticle = '';
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                    this.$store.commit('SET_CATALOG', { value: [] });
                    this.reqArticleContent();
                    this.reqArticleList();
                }
            },
        },
        created () {
            this.reqArticleContent();
            this.reqArticleList();
        },
        methods: {
            reqArticleContent () {
                let { classify, id } = this.$route.params;
                this.$curl.get(`static/articles/${classify}/${id}?v=${new Date().getTime()}`).then((res) => {
                    this.strContent = marked(res);
                    this.$nextTick(() => {
                        if (this.$const.BASE_URL) {
                            document.querySelectorAll('img').forEach((img) => {
                                let src = img.getAttribute('src');
                                if (!src.startsWith('http')) {
                                    img.setAttribute('src', `${this.$const.BASE_URL}${src}`);
                                }
                            });
                        }
                        this.$refs.article.querySelectorAll('a').forEach((a) => {
                            a.setAttribute('target', '_bank');
                            if (this.$const.BASE_URL) {
                                let href = a.getAttribute('href');
                                if (!href.startsWith('http')) {
                                    a.setAttribute('href', `${this.$const.BASE_URL}${href}`);
                                }
                            }
                        });
                        setTimeout(() => {
                            document.querySelectorAll('pre').forEach((block) => {
                                hljs.highlightBlock(block);
                            });
                        });
                        this.$store.commit('SET_CATALOG', { el:  this.$refs.article });
                    })
                }).catch((err) => {
                    console.log(err);
                })
            },
            reqArticleList () {
                this.$curl.get(`static/mocks/articles.json?v=${new Date().getTime()}`).then((res) => {
                    let arr = res || [];
                    let { classify, id } = this.$route.params;
                    this.objArticle = arr.filter((item) => item.id === `${classify}/${id}`)[0];
                });
            },
        },
        components: {
            ArticleCellLoading,
        },
    }

</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .details-view-wrap{
    }
    .article-header{
        padding: j(50) j(20);
        h1{
            @extend %c3;
            line-height: j(40);
            font-size: j(30);
        }
        .time{
            @extend %c9;
            padding-left: j(5);
            font-size: j(12);
            margin: j(10) 0;
        }
    }
    .tag{
        @extend %df;
        @extend %aic;
    }
    .tag-item{
        @extend %cfff;
        font-size: j(12);
        margin: 0 j(4);
        border-radius: j(2);
        padding: j(2) j(5);
        background-color: #999;
    }
    .article-content{
        color: #404040;
        line-height: j(28);
        font-size: j(16);
        padding: j(20) j(20) j(100);
    }
</style>

<style lang="scss">
    @import "~src/assets/scss/define";
    @import "~src/assets/scss/highlight";
    .article-content{
        h1{
            @extend %dn;
        }
        h2{
            @extend %c3;
            font-size: j(24);
            margin: j(30) 0 j(30);
        }
        h3{
            @extend %c3;
            font-size: j(20);
            margin: j(30) 0 j(30);
        }
        h4{
            @extend %c3;
            font-size: j(18);
            margin: j(30) 0 j(30);
        }
        pre{
            border-radius: j(5);
            padding: j(10);
            font-size: j(14);
            line-height: 1.2;
            background-color: #111;
        }
        blockquote{
            margin: j(20);
            padding: j(5) j(20);
            font-size: j(14);
            line-height: 1.5;
            border-left: j(2) solid #999;
            background-color: #f2f2f2;
        }
        a{
            color: #0681d0;
            &:hover{
                text-decoration: underline;
            }
        }
        img{
            max-width: 100%;
            height: auto;
        }
    }
</style>
