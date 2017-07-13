<template>
    <div class="container-wrap">
        <div class="container-inner">
            <crumb></crumb>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="类别名称">
                    <el-input v-model="formInline.user" placeholder="类别名称"></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-col :span="24">
                        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            <div class="operate-wrap el-col el-col-24">
                <h2 class="session-title">类别列表</h2>
                <el-button class="el-button el-button--danger" :disabled="true"><i class="el-icon-delete el-icon--left"></i>删除</el-button>
                <el-button class="el-button el-button--warning" :disabled="true"><i class="el-icon-upload el-icon--left"></i>下架</el-button>
                <el-button class="el-button el-button--primary" :disabled="true"><i class="el-icon-upload el-icon--left"></i>上架</el-button>
                <router-link to="/tag/list/add" class="el-button el-button--primary"><i class="el-icon-plus el-icon--left"></i>新增</router-link>
            </div>
            <el-table
                ref="multipleTable"
                :data="tableData3"
                border
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    align="center"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="类别名称">
                </el-table-column>
                <el-table-column
                    label="日期"
                    width="120">
                    <template scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    width="240"
                    align="center"
                    label="操作">
                    <template scope="scope">
                        <router-link to="/tag/list/edit" class="el-button el-button--small">编辑</router-link>
                        <button class="el-button el-button--danger el-button--small">删除</button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination-wrap">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import Crumb from '../../../components/crumb.vue'
    export default {
        name: 'tag-list',
        data() {
            return {
                formInline: {
                    user: '',
                    region: '',
                    date1: '',
                    date2: ''
                },
                page_num:1,
                page_count: 0,
                page_size:12,
                article_total: 0,
                key_word: '',
                is_loading: false,
                article_arr: [],
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    is: true,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    is: true,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    is: true,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    is: true,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            onSubmit() {
                console.log('submit!');
            },
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
            handleIconClick () {
                Tool.jumpPage('?tab='+this.$route.query.tab+'&&key_word='+this.key_word);
            },
            handleCurrentChange (val) {
                this.page_num = val;
                Tool.jumpPage('?tab='+this.$route.query.tab+'&&page_num='+this.page_num);
            },
            /**删除文章数据*/
            deleteArticle ({_id,article_title}) {
                this.$confirm('是否删除'+ article_title +'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteArticle(_id,(result) => {
                        this.is_loading = false;
                        if(result.status){
                            this.fetchArticlesList();
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
            fetchArticlesList (route) {
                this.is_loading = true;
                var tab = route ? route.query.tab: this.$route.query.tab;
                var key_word = route ? route.query.key_word: this.$route.query.key_word;
                var page_num = route ? route.query.page_num: this.$route.query.page_num;
                this.page_num = +page_num || 1;
                setTimeout(()=>{
                    this.$store.commit(types.SET_TAB_INDEX,tab);
                },600);
                Util.fetchArticlesList({
                    tab: tab,
                    page_num: this.page_num,
                    page_size: this.page_size,
                    key_word: key_word
                }, (result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.article_arr = data.article_arr;
                            this.page_count = data.page_count;
                            this.article_total = data.article_total;
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
            Crumb
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
</style>
