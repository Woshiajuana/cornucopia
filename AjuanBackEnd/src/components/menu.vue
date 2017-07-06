<template>
    <div class="menu-wrap">
        <div class="menu-inner">
            <el-menu theme="dark" router unique-opened :default-active="tabIndex" class="el-menu-vertical-demo">
                <el-submenu index="/permission">
                    <template slot="title"><i class="el-icon-message"></i>权限管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/permission/role">角色管理</el-menu-item>
                        <el-menu-item index="/permission/resource">资源管理</el-menu-item>
                        <el-menu-item index="/permission/admin">管理员管理</el-menu-item>
                        <el-menu-item index="/permission/log">管理员日志</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="/app">
                    <template slot="title"><i class="el-icon-message"></i>APP权限管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/app/role">角色管理</el-menu-item>
                        <el-menu-item index="/app/resource">资源管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>入驻机构管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">入驻代理机构列表</el-menu-item>
                        <el-menu-item index="2-2">机构管理员列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-message"></i>产品机构管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">产品机构列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-message"></i>APP设置</template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">广告位管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-message"></i>消息设置</template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">跑马灯设置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-message"></i>版本管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="5-1">版本记录</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="6"><i class="el-icon-message"></i>会员列表</el-menu-item>
                <el-submenu index="/product">
                    <template slot="title"><i class="el-icon-message"></i>产品管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="6-1">快贷产品管理</el-menu-item>
                        <el-menu-item index="6-2">信用卡产品管理</el-menu-item>
                        <el-menu-item index="6-3">信贷产品管理</el-menu-item>
                        <el-menu-item index="/product/type">产品类型管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-message"></i>订单管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="7-1">申卡订单</el-menu-item>
                        <el-menu-item index="7-2">快贷订单</el-menu-item>
                        <el-menu-item index="7-3">便民订单</el-menu-item>
                        <el-submenu index="7-4">
                            <template slot="title">信贷订单</template>
                            <el-menu-item index="7-4-1">赎楼贷订单</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="/system">
                    <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/system/institution">机构分类管理</el-menu-item>
                        <el-menu-item index="6-2">标签管理</el-menu-item>
                        <el-menu-item index="6-4">板块管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'menu',
        data () {
            return {
                is_loading: false
            }
        },
        computed: {
            tabIndex(){
                return this.$store.state.tab_index;
            },
            labelArr () {
                return this.$store.state.label_arr;
            },
            labelLoading () {
                return this.$store.state.label_loading;
            }
        },
        created () {
//            this.$store.dispatch('fetchLabel');
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .menu-wrap{
        @extend %pa;
        @extend %bsb;
        @extend %l0;
        @extend %b0;
        @extend %oh;
        top: 50px;
        width: 250px;
        background: #41586e;
        .el-menu-item-group{
            padding-bottom: 20px;
        }
        .el-menu-item,
        .el-submenu__title{
            height: 45px;
            line-height: 45px;
        }
    }
    .menu-inner{
        @extend %pa;
        @extend %r0;
        @extend %l0;
        @extend %b0;
        @extend %t0;
        overflow-y: scroll;
        width: 268px;
        padding-bottom: 50px;
    }
    .el-menu-item{
        @extend %pr;
        a{
            @extend %pa;
            @extend %db;
            font-size: 13px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0 45px;
            color: inherit;
        }
    }

    .el-submenu__icon-arrow{
        @include tfr(90deg)
    }
    .el-submenu.is-opened>.el-submenu__title i.el-submenu__icon-arrow {
        @include tfr(0deg)
    }
    .el-submenu{
        .el-menu{
            .el-submenu__title{
                padding-left: 44px !important;
                text-indent: 1em;
                .el-submenu__icon-arrow{
                    text-indent: 0;
                }
            }
            .el-menu{
                .el-menu-item{
                    padding-left: 44px !important;
                    text-indent: 2em;
                }
            }
        }
        .el-menu-item{
            padding-left: 44px !important;
            text-indent: 1em;
        }
    }
</style>
