<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner">
            <crumb></crumb>
            <div class="operate-wrap el-col el-col-24">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="key_words" placeholder="请输入类别名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="tag_group" placeholder="请选择类别分组">
                            <el-option :label="'全部'" :value="'all'"></el-option>
                            <el-option
                                v-for="(item,index) in options"
                                :key="index"
                                :label="item.group_name"
                                :value="item.group_name">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="searchData">查询</el-button>
                    </el-form-item>
                </el-form>
                <router-link to="/tag/list/add" class="el-button el-button--primary"><i class="el-icon-plus el-icon--left"></i>新增</router-link>
                <el-button @click="deleteManyTagsData" class="el-button el-button--danger" :disabled="!select_arr.length"><i class="el-icon-delete el-icon--left"></i>删除</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="data_arr"
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
                    prop="tag_name"
                    label="类别名称">
                </el-table-column>
                <el-table-column
                    prop="tag_group"
                    label="所属分组"
                    width="120">
                </el-table-column>
                <el-table-column
                    label="日期"
                    width="120">
                    <template scope="scope">{{ scope.row.tag_date | format('yyyy-MM-dd') }}</template>
                </el-table-column>
                <el-table-column
                    width="240"
                    align="center"
                    label="操作">
                    <template scope="scope">
                        <router-link :to="'/tag/list/edit/'+ scope.row._id" class="el-button el-button--small">编辑</router-link>
                        <button @click="deleteTagData(scope.row)" class="el-button el-button--danger el-button--small">删除</button>
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
                :total="total">
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
                options: [],
                select_arr: [],
                page_num: 1,
                page_size: 12,
                total: 0,
                key_words: '',
                tag_group: '',
                is_loading: false,
                data_arr: []
            }
        },
        watch: {
            '$route': 'fetchTagList'
        },
        created () {
            this.fetchTagList();
            this.fetchGroupList();
        },
        methods: {
            fetchGroupList () {
                this.is_loading = true;
                Util.fetchGroupList().then((result) => {
                    setTimeout(() => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.options = data.arr;
                        }
                        else this.$message({type: 'error', message: result.msg});
                        this.is_loading = false;
                    },300)
                }).catch( (err) => {
                    this.is_loading = false;
                    this.$message({
                        showClose: true,
                        message: '系统开了小差',
                        type: 'error'
                    });
                });
            },
            /**删除多个数据*/
            deleteManyTagsData () {
                if (!this.select_arr.length) return;
                this.$confirm('是否删除当前选择的'+ this.select_arr.length +'条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteManyTagsData(this.select_arr).then((result) => {
                        setTimeout( () => {
                            this.is_loading = false;
                            if(result.status){
                                this.fetchTagList();
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
            searchData () {
                this.$route.query.key_words || this.$route.query.tag_group ?
                    this.$router.push('/tag/list?key_words=' + this.key_words + '&tag_group=' + this.tag_group)
                    : this.key_words ? this.$router.push('/tag/list?key_words=' + this.key_words + '&tag_group=' + this.tag_group)
                    : this.tag_group ? this.$router.push('/tag/list?key_words=' + this.key_words + '&tag_group=' + this.tag_group) : '';
            },
            handleCurrentChange (val) {
                this.page_num = val;
                this.key_words || this.tag_group ? this.$router.push('/tag/list?page_num=' + this.page_num + '&key_words=' + this.key_words + '&tag_group=' + this.tag_group)
                    :  this.$router.push('/tag/list?page_num=' + this.page_num);
            },
            /**删除文章数据*/
            deleteTagData ({ _id, tag_name }) {
                this.$confirm('是否删除'+ tag_name +'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteTagData(_id).then((result) => {
                        setTimeout( () => {
                            this.is_loading = false;
                            if(result.status){
                                this.fetchTagList();
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
            fetchTagList (route) {
                this.is_loading = true;
                var key_words = route ? route.query.key_words: this.$route.query.key_words;
                var page_num = route ? route.query.page_num: this.$route.query.page_num;
                var tag_group = route ? route.query.tag_group: this.$route.query.tag_group;
                this.page_num = +page_num || 1;
                Util.fetchTagList(this.page_num,this.page_size,tag_group,key_words).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.data_arr = data.arr;
                            this.total = data.total;
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
            }
        },
        components: {
            Crumb
        }
    }
</script>
