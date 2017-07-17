<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner">
            <crumb></crumb>
            <div class="add-con">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="分组名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认</el-button>
                        <el-button @click="returnPage">返回</el-button>
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
        name: 'group-add-or-edit',
        data() {
            return {
                is_loading: false,
                form: { name: ''}
            }
        },
        created () {
            this.$route.params._id && this.fetchGroupDetailByGroupId(this.$route.params._id)
        },
        methods: {
            addGroupData ( group_name ) {
                this.is_loading = true;
                Util.addGroupData( group_name ).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            this.$message({type: 'success', message: result.msg});
                            this.form.name = '';
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
            fetchGroupDetailByGroupId ( _id ) {
                this.is_loading = true;
                Util.fetchGroupDetailByGroupId( _id).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.form.name = data.group_name;
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
            editGroupData ( _id, group_name ) {
                this.is_loading = true;
                Util.fetchGroupDetailByGroupId( _id, group_name).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.form.name = data.group_name;
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
            onSubmit() {
                if(!this.form.name) {
                    this.$message({type: 'error', message: '分组名称不能为空'});
                    return;
                }
                this.$route.params._id ? this.editGroupData(this.$route.params._id,this.form.name)
                    : this.addGroupData(this.form.name)
            },
            returnPage () {
                window.history.go(-1);
            }
        },
        components: {
            Crumb
        }
    }
</script>
