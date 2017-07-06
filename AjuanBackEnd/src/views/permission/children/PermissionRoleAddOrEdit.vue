<template>
    <div class="container-wrap">
        <div class="container-inner">
            <crumb></crumb>
            <div class="add-role-con">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="角色名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
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
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
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
<style lang="scss">
    @import "../../../assets/scss/define";
    .add-role-con{
        padding: 20px;
        .el-form{
            @extend %db;
            width: 500px;
        }
    }
</style>
