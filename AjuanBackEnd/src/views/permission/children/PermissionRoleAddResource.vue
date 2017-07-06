<template>
    <div class="container-wrap">
        <div class="container-inner">
            <crumb></crumb>
            <div class="add-role-con">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="系统资源">
                        <el-select v-model="form.region" placeholder="请选择系统资源">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
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
        name: 'permission-role-add-resource',
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
