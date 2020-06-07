<template>
    <div class="details-view-wrap">
        <div class="article-header" v-if="strContent">
            <h1>第一章好 i 哦对大时代萨蒂简欧</h1>
            <p class="time">2020-09-09 12:12:12</p>
            <div class="tag">
                <span class="tag-item">HTML</span>
                <span class="tag-item">CSS</span>
                <span class="tag-item">JS</span>
            </div>
        </div>
        <div class="article-content" ref="article" id="article" v-html="strContent"></div>
    </div>
</template>
<script>
    import marked from 'marked'
    import hljs from 'highlight.js';
    import 'highlight.js/styles/monokai-sublime.css';

    export default {
        data () {
            return {
                strContent: '',
                objHLevel: {
                    H1: 1,
                    H2: 2,
                    H3: 3,
                    H4: 4,
                    H5: 5,
                    H6: 6,
                    H7: 7,
                }
            }
        },
        watch: {
            //监听路由变化
            $route( to, from ){
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        },
        created () {
            this.reqArticleContent();
        },
        methods: {
            reqArticleContent () {
                this.$curl.get('static/test.md').then((res) => {
                    this.strContent = marked(res);
                    this.$nextTick(() => {
                        document.querySelectorAll('pre').forEach((block) => {
                            hljs.highlightBlock(block);
                        });
                        this.$store.commit('SET_CATALOG', this.$refs.article);
                        // let childrens = Array.from(this.$refs.article.children);
                        // childrens = childrens
                        //     .filter((item, index) => this.objHLevel[item.nodeName])
                        //     .map((item, index) => {
                        //         let id = `heading-${index + 1}`;
                        //         item.id = `heading-${index + 1}`;
                        //         return {
                        //             id,
                        //             level: this.objHLevel[item.nodeName],
                        //             title: item.innerHTML,
                        //             offsetTop: item.offsetTop,
                        //         }
                        //     }).reverse();
                        // let result = [], loop;
                        // (loop = (nodes) => {
                        //     let node = nodes.splice(0, 1)[0];
                        //     if (!node) return;
                        //     for (let i = 0, len = nodes.length; i < len; i++) {
                        //         let item = nodes[i];
                        //         if (item.level < node.level) {
                        //             node.parent = true;
                        //             if (!item.children) {
                        //                 item.children = [];
                        //             }
                        //             item.children.unshift(node);
                        //             break;
                        //         }
                        //     }
                        //     if (!node.parent) {
                        //         result.unshift(node)
                        //     }
                        //     loop(nodes);
                        // }) (childrens);
                        // console.log(result);
                    })
                }).catch((err) => {
                    console.log(err);
                })
            },
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
    .article-content{
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
    }
</style>
