<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner">
            <crumb></crumb>
            <div class="operate-wrap el-col el-col-24">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="key_words" placeholder="请输入分组名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="searchGroupByGroupName">查询</el-button>
                    </el-form-item>
                </el-form>
                <router-link to="/tag/group/add" class="el-button el-button--primary"><i class="el-icon-plus el-icon--left"></i>新增</router-link>
                <el-button @click="deleteManyGroupsData" class="el-button el-button--danger" :disabled="!select_arr.length"><i class="el-icon-delete el-icon--left"></i>删除</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="group_arr"
                border
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                style="width: 100%">
                <el-table-column
                    type="selection"
                    align="center"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="group_name"
                    label="分组名称">
                </el-table-column>
                <el-table-column
                    label="日期"
                    width="120">
                    <template scope="scope">{{ scope.row.group_date | format('yyyy-MM-dd') }}</template>
                </el-table-column>
                <el-table-column
                    width="240"
                    align="center"
                    label="操作">
                    <template scope="scope">
                        <router-link :to="'/tag/group/edit/'+ scope.row._id" class="el-button el-button--small">编辑</router-link>
                        <button @click="deleteGroupData(scope.row)" class="el-button el-button--danger el-button--small">删除</button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination-wrap">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="page_num"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="page_size"
                layout="total, prev, pager, next, jumper"
                :total="group_total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import Crumb from '../../../components/crumb.vue'
    import Util from '../../../assets/lib/Util'
    export default {
        name: 'group-list',
        data() {
            return {
                select_arr: [],
                page_num: 1,
                page_size: 10,
                group_total: 0,
                key_words: '',
                is_loading: false,
                group_arr: []
            }
        },
        watch: {
            '$route': 'fetchGroupList'
        },
        created () {
            this.fetchGroupList();
        },
        methods: {
            /**删除多个数据*/
            deleteManyGroupsData () {
                if (!this.select_arr.length) return;
                this.$confirm('是否删除当前选择的'+ this.select_arr.length +'条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteManyGroupsData(this.select_arr).then((result) => {
                        setTimeout( () => {
                            this.is_loading = false;
                            if(result.status){
                                this.fetchGroupList();
                                this.$message({type: 'success', message: result.msg});
                            }else{
                                this.$message({type: 'error', message: result.msg});
                            }
                        },300);
                    }).catch( (err) => {
                        this.is_loading = false;
                        this.$message({
                            showClose: true,
                            message: '系统开了小差',
                            type: 'error'
                        });
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            /**多项选择*/
            handleSelectionChange (rows) {
                this.select_arr = rows;
            },
            /**搜索*/
            searchGroupByGroupName() {
                this.page_num = 1;
                this.$route.query.key_words ? this.$router.push('/tag/group?page_num=' + this.page_num + '&key_words=' + this.key_words) :
                this.key_words ? this.$router.push('/tag/group?page_num=' + this.page_num + '&key_words=' + this.key_words) : '';
            },
            handleCurrentChange (val) {
                this.page_num = val;
                this.key_words ? this.$router.push('/tag/group?page_num=' + this.page_num + '&key_words=' + this.key_words)
                    : this.$router.push('/tag/group?page_num=' + this.page_num);
            },
            /**删除文章数据*/
            deleteGroupData ({ _id, group_name }) {
                this.$confirm('是否删除'+ group_name +'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteGroupData(_id).then((result) => {
                        setTimeout( () => {
                            this.is_loading = false;
                            if(result.status){
                                this.fetchGroupList();
                                this.$message({type: 'success', message: result.msg});
                            }else{
                                this.$message({type: 'error', message: result.msg});
                            }
                        },300);
                    }).catch( (err) => {
                        this.is_loading = false;
                        this.$message({
                            showClose: true,
                            message: '系统开了小差',
                            type: 'error'
                        });
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            /**获取列表数据*/
            fetchGroupList (route) {
                this.is_loading = true;
                var key_words = route ? route.query.key_words: this.$route.query.key_words;
                var page_num = route ? route.query.page_num: this.$route.query.page_num;
                this.page_num = +page_num || 1;
                Util.fetchGroupList(this.page_num,this.page_size,key_words).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.group_arr = data.arr;
                            this.group_total = data.total;
                        }
                        else this.$message({type: 'error', message: result.msg});
                        this.is_loading = false;
                    },300);
                }).catch( (err) => {
                    this.is_loading = false;
                    this.$message({
                        showClose: true,
                        message: '系统开了小差',
                        type: 'error'
                    });
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
