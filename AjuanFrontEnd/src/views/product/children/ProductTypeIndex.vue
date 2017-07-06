<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner">
            <crumb></crumb>
            <div class="operate-wrap el-col el-col-24">
                <h2 class="session-title">产品类型列表</h2>
                <a href="#/product/type/add" class="el-button el-button--primary"><i class="el-icon-upload el-icon--left"></i>新增数据</a>
            </div>
            <el-table
                ref="multipleTable"
                :data="product_institution_arr"
                border
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                    type="index"
                    width="60">
                </el-table-column>
                <el-table-column
                    label="产品类型名称"
                    width="120">
                    <template scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                    prop="code"
                    label="分类编码">
                </el-table-column>
                <el-table-column
                    prop="salesCommRatio"
                    label="默认提成比例%">
                </el-table-column>
                <el-table-column
                    width="180"
                    label="操作">
                    <template scope="scope">
                        <a :href="'#/product/type/edit/' +  scope.row.bizId" class="el-button el-button--small">编辑</a>
                        <button @click="deleteData(scope.row)" class="el-button el-button--danger el-button--small">删除</button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination-wrap">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="page_index"
                :page-size="10"
                layout="total, prev, pager, next, jumper"
                :total="page_total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import Crumb from '../../../components/crumb.vue'
    import types from '../../../store/mutation-types'
    import Util from '../../../assets/lib/Util'
    export default {
        name: 'product-type-index',
        data() {
            return {
                is_loading: false,
                page_size: 10,
                page_index: 1,
                page_total: 0,
                product_institution_arr: []
            }
        },
        created () {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            /**获取数据*/
            fetchData ( route ) {
                this.is_loading = true;
                var page_index = route ? route.query.page_index: this.$route.query.page_index;
                this.page_index = +page_index || 1;
                Util.fetchProductTypeList({
                    pageIndex: this.page_index,
                    pageSize: this.page_size
                }, (result) => {
                    setTimeout( () => {
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            var data = result.respBody;
                            this.product_institution_arr = data.records;
                            this.page_total = data.total;
                        }
                        this.is_loading = false;
                    },300);
                }, (error) => {
                    this.is_loading = false;
                    this.$message({type: 'error', message: '服务器响应失败'});
                });
            },
            /**删除数据*/
            deleteData ( item ) {
                this.$confirm('是否删除'+ item.name +'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteSystemInstitutionList({
                        bizId: item.bizId,
                    }, (result) => {
                        setTimeout( () => {
                            if( result.respHeader.respCode === 'umi-00000' ) {
                                this.fetchData();
                                this.$message({type: 'success', message: result.respHeader.respMessage});
                            } else {
                                this.$message({type: 'error', message: result.respHeader.respMessage});
                            }
                            this.is_loading = false;
                        },300);
                    }, (error) => {
                        this.is_loading = false;
                        this.$message({type: 'error', message: '服务器响应失败'});
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            handleCurrentChange(val) {
                this.$router.push('/system/institution?page_index=' + val);
            }
        },
        components: {
            Crumb
        }
    }
</script>
