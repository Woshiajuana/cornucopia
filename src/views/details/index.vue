<template>
    <div class="details-view-wrap">
        <article-cell-loading v-if="!strContent || !objArticle"></article-cell-loading>
        <template v-show="strContent && objArticle">
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
                this.$curl.get(`articles/${classify}/${id}?v=${new Date().getTime()}`).then((res) => {
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
                    });
                }).catch((err) => {
                    console.log(err);
                })
            },
            reqArticleList () {
                this.$curl.get(`mocks/articles.json?v=${new Date().getTime()}`).then((res) => {
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
            font-size: j(30);
            line-height: 1.5;
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

    @media screen and (max-width: 768px){
        .article-header{
            h1{
                font-size: j(26);
            }
        }
    }
</style>

<style lang="scss">
    @import "~src/assets/scss/define";
    @import "~src/assets/scss/highlight";
    .article-content{
        h1{
            @extend %dn;
            margin: j(16) 0;
        }
        h2{
            @extend %c3;
            font-size: j(24);
            line-height: j(46);
            margin: j(16) 0;
        }
        h3{
            @extend %c3;
            margin: j(16) 0;
            font-size: j(20);
        }
        h4{
            @extend %c3;
            font-size: j(18);
            margin: j(10) 0;
        }
        h6,
        h5{
            @extend %c3;
            font-size: j(14);
            margin: j(5) 0;
        }
        pre{
            border-radius: j(5);
            padding: j(10);
            font-size: j(13);
            line-height: 1.4;
            font-weight: 400;
            margin: j(20) 0;
            background-color: #2d2d2d;
        }
        blockquote{
            margin: j(10) 0;
            padding: j(5) j(10);
            font-size: j(14);
            line-height: 1.5;
            border-left: j(5) solid #e6e6e6;
            background-color: #fafafa;
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

        table{
            @extend %bsb;
            width: 100%;
            margin-bottom: 20px;
            border-collapse: collapse;
            border: 1px solid #eee;
            border-left: none;
            word-break: break-word;
            td,
            th{
                padding: 8px;
                border: 1px solid #eee;
                line-height: 20px;
                vertical-align: middle;
            }
            tr:nth-child(2n){
                background-color: hsla(0,0%,70.2%,.15);
            }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        li {
            > code{
                padding: j(2) j(5);
                font-size: j(13);
                color: #c7254e;
                background-color: #f2f2f2;

            }
        }
        p{
            margin-bottom: j(20);
        }
    }
</style>
