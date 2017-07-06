<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner inner-1">
            <crumb></crumb>
            <div class="add-con">
                <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
                    <el-form-item label="机构分类名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="机构分组名称" prop="groupName">
                        <el-input v-model="ruleForm.groupName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="subData('ruleForm')">确认</el-button>
                        <a class="el-button" href="javascript:history.back(-1);">返回</a>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import Crumb from '../../../components/crumb.vue'
    import Util from '../../../assets/lib/Util'
    export default {
        name: 'system-institution-add-or-edit',
        data() {
            return {
                is_loading: false,
                bizId: this.$route.params.bizId,
                ruleForm: {
                    name: '',
                    groupName: ''
                },
                rules: {
                    name: [
                        { required: true, message: '机构分类名称', trigger: 'blur' }
                    ],
                    groupName: [
                        { required: true, message: '机构分组名称', trigger: 'change' }
                    ]
                }
            }
        },
        created () {
            if ( this.bizId ) this.queryData( this.bizId );
        },
        methods: {
            subData (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if ( this.bizId ) this.updateData( this.bizId );
                        else this.addData();
                    } else {
                        return false;
                    }
                });
            },
            /**获取数据*/
            queryData ( bizId ) {
                this.is_loading = true;
                Util.querySystemInstitutionList({
                    bizId: bizId
                }, ( result ) => {
                    setTimeout( () => {
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            this.ruleForm = {
                                name: result.respBody.name,
                                groupName: result.respBody.groupName
                            }
                        }
                        this.is_loading = false;
                    },300);
                }, (error) => {
                    this.is_loading = false;
                    this.$message({type: 'error', message: '服务器响应失败'});
                })
            },
            /**编辑数据*/
            updateData ( bizId ) {
                this.is_loading = true;
                this.ruleForm.bizId = bizId;
                Util.updateSystemInstitutionList(this.ruleForm, ( result ) => {
                    setTimeout( () => {
                        this.is_loading = false;
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            this.$message({type: 'success', message: result.respHeader.respMessage});
                            this.$router.push('/system/institution');
                        } else {
                            this.$message({type: 'error', message: result.respHeader.respMessage});
                        }
                    },300);
                }, (error) => {
                    this.is_loading = false;
                    this.$message({type: 'error', message: '服务器响应失败'});
                })
            },
            /**添加数据*/
            addData () {
                this.is_loading = true;
                Util.addSystemInstitutionList(this.ruleForm, ( result ) => {
                    setTimeout( () => {
                        this.is_loading = false;
                        if( result.respHeader.respCode === 'umi-00000' ) {
                            this.$message({type: 'success', message: result.respHeader.respMessage});
                            this.$router.push('/system/institution');
                        } else {
                            this.$message({type: 'error', message: result.respHeader.respMessage});
                        }
                    },300);
                }, (error) => {
                    this.is_loading = false;
                    this.$message({type: 'error', message: '服务器响应失败'});
                })
            }
        },
        components: {
            Crumb
        }
    }
</script>
