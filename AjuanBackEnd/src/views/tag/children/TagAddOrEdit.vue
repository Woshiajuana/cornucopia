<template>
    <div class="container-wrap"
         v-loading="is_loading"
         element-loading-text="加载中~~~">
        <div class="container-inner">
            <crumb></crumb>
            <div class="add-con">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="类别名称">
                        <el-input v-model="form.tag_name"></el-input>
                    </el-form-item>
                    <el-form-item label="类别分组">
                        <el-select v-model="form.tag_group" placeholder="请选择类别分组">
                            <el-option
                                v-for="(item,index) in options"
                                :key="index"
                                :label="item.group_name"
                                :value="item.group_name">
                            </el-option>
                        </el-select>
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
        name: 'tag-add-or-edit',
        data() {
            return {
                options: [],
                is_loading: false,
                form: { tag_name: '', tag_group: ''}
            }
        },
        created () {
            this.fetchGroupList();
            this.$route.params._id && this.fetchTagDetailByTagId(this.$route.params._id)
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
            addTagData ( tag_name, tag_group ) {
                this.is_loading = true;
                Util.addTagData( tag_name, tag_group ).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            this.$message({type: 'success', message: result.msg});
                            this.$router.push('/tag/list');
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
            fetchTagDetailByTagId ( _id ) {
                this.is_loading = true;
                Util.fetchTagDetailByTagId( _id).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            var data = result.data;
                            this.form.tag_name = data.tag_name;
                            this.form.tag_group = data.tag_group;
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
            editTagData ( _id, tag_name, tag_group) {
                this.is_loading = true;
                Util.editTagData( _id, tag_name, tag_group).then((result) => {
                    setTimeout( () => {
                        if(result.status == 1) {
                            this.$message({type: 'success', message: result.msg});
                            this.$router.push('/tag/list');
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
                if(!this.form.tag_name) {
                    this.$message({type: 'error', message: '类别名称不能为空'});
                    return;
                }
                if(!this.form.tag_group) {
                    this.$message({type: 'error', message: '类别分组不能为空'});
                    return;
                }
                this.$route.params._id ? this.editTagData(this.$route.params._id,this.form.tag_name,this.form.tag_group)
                    : this.addTagData(this.form.tag_name,this.form.tag_group)
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
