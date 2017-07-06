<template>
    <div class="container-wrap">
        <div class="container-inner">
            <crumb></crumb>
            <div class="operate-wrap el-col el-col-24">
                <h2 class="session-title">角色基本信息</h2>
                <a href="#/permission/role/details/woshiajuana/resource" class="el-button el-button--primary"><i class="el-icon-upload el-icon--left"></i>新增资源</a>
            </div>
            <div class="add-con">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="角色名称">
                        <el-input :disabled="true" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input :disabled="true" type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="operate-wrap el-col el-col-24">
                <h2 class="session-title">角色资源列表</h2>
            </div>
        </div>
    </div>
</template>
<script>
    import Crumb from '../../../components/crumb.vue'
    export default {
        name: 'permission-role-add-or-edit',
        data() {
            return {
                form: {
                    name: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
        components: {
            Crumb
        }
    }
</script>
