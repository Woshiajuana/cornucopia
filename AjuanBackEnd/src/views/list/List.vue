<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="拼命加载中~~~">
        <div class="container-inner">
            <crumb></crumb>
            <div class="operate-wrap el-col el-col-24">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="文章名称">
                        <el-input v-model="key_word" placeholder="请输入文章名称"></el-input>
                    </el-form-item>
                    <el-form-item label="是否上下架">
                        <el-select v-model="article_is_publish_input" placeholder="是否上下架">
                            <el-option label="是" value="1"></el-option>
                            <el-option label="否" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmitHandle">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-button class="el-button el-button--primary" :disabled="true"><i class="el-icon-circle-check el-icon--left"></i>上架</el-button>
                <el-button class="el-button el-button--warning" :disabled="true"><i class="el-icon-circle-cross el-icon--left"></i>下架</el-button>
                <el-button class="el-button el-button--danger" :disabled="true"><i class="el-icon-delete el-icon--left"></i>删除</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="article_arr"
                border
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                    type="selection"
                    align="center"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="article_title"
                    label="文章名称">
                </el-table-column>
                <el-table-column
                    prop="article_type"
                    label="类别"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="日期"
                    width="200"
                    show-overflow-tooltip>
                    <template scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.article_time | articleTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    width="240"
                    align="center"
                    label="操作">
                    <template scope="scope">
                        <el-button type="default" size="small" @click="editorArticle(scope.row)">编辑</el-button>
                        <el-button @click="offOrReleaseArticle(scope.row)" v-if="scope.row.article_is_publish" type="warning" size="small">下架</el-button>
                        <el-button @click="offOrReleaseArticle(scope.row)" type="info" v-else size="small">发表</el-button>
                        <el-button @click="deleteArticleData(scope.row)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination-wrap">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="page_num"
                :page-size="page_size"
                layout="total, prev, pager, next, jumper"
                :total="article_total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import Util from '../../assets/lib/Util';
    import Tool from '../../assets/lib/Tool';
    import types from '../../store/mutation-types';
    import Crumb from '../../components/crumb.vue'
    import ElButton from "../../../../AjuanFrontEnd/node_modules/element-ui/packages/button/src/button";
    export default {
        name: 'list',
        data() {
            return {
                page_num:1,
                page_count: 0,
                page_size:12,
                article_total: 0,
                key_word: '',
                is_loading: false,
                article_arr: [],
                article_is_publish_input: ''
            }
        },
        created () {
            this.fetchArticleList();
        },
        filters: {
            articleTime (article_time) {
                return Tool.format('yyyy-MM-dd hh:mm',new Date(article_time))
            }
        },
        watch: {
            '$route': 'fetchArticleList'
        },
        methods: {
            /**下架或发布文章*/
            offOrReleaseArticle (article) {
                this.is_loading = true;
                Util.offOrReleaseArticle({
                    _id: article._id,
                    article_is_publish: !article.article_is_publish
                },(result) => {
                    setTimeout( () => {
                        this.is_loading = false;
                        if (result.status) {
                            this.$message({
                                showClose: true,
                                message: result.msg,
                                type: 'success'
                            });
                            this.fetchArticlesList();
                        } else {
                            this.$message({
                                showClose: true,
                                message: result.msg,
                                type: 'error'
                            });
                        }
                    },300)
                })
            },
            onSubmitHandle () {
                Tool.jumpPage('?tab='+this.$route.query.tab+'&&key_word='+this.key_word);
            },
            handleCurrentChange (val) {
                this.page_num = val;
                Tool.jumpPage('?tab='+this.$route.query.tab+'&&page_num='+this.page_num);
            },
            /**删除文章数据*/
            deleteArticleData ({_id,article_title}) {
                this.$confirm('是否删除'+ article_title +'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteArticleData(_id).then((result) => {
                        this.is_loading = false;
                        if(result.status){
                            this.fetchArticleList();
                            this.$message({type: 'success', message: result.msg});
                        }else{
                            this.$message({type: 'error', message: result.msg});
                        }
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            /**获取文章列表数据*/
            fetchArticleList (route) {
                this.is_loading = true;
                var tag = route ? route.query.tag: this.$route.query.tag;
                var key_word = route ? route.query.key_word: this.$route.query.key_word;
                var page_num = route ? route.query.page_num: this.$route.query.page_num;
                this.page_num = +page_num || 1;
                Util.fetchArticleList( page_num, this.page_size, tag, this.article_is_publish_input, key_word ).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.article_arr = data.arr;
                            this.page_count = data.count;
                            this.article_total = data.total;
                        }
                        else this.$message({type: 'error', message: result.msg});
                        this.is_loading = false;
                    },300);
                });
            },
            /**编辑文档*/
            editorArticle (article) {
                this.$router.push('/editor/' + article._id);
            }
        },
        components: {
            ElButton,
            Crumb
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .container-content{
        @extend %pa;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 70px 20px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .search-box{
        @extend %pa;
        top: 20px;
        right: 40px;
        z-index: 1;
        width: 360px;
    }
    .container-box{
        @extend %h100;
    }
    .page-wrap{
        @extend %pa;
        @extend %tac;
        background-color: #fff;
        z-index: 1;
        left: 0;
        right: 0;
        padding: 10px 0 20px;
        bottom: 0;
    }
</style>
