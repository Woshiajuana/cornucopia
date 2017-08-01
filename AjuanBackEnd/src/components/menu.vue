<template>
    <div class="menu-wrap">
        <div class="menu-inner">
            <el-menu theme="dark" router unique-opened :default-active="tagIndex" class="el-menu-vertical-demo">
                <el-submenu index="/list">
                    <template slot="title"><i class="el-icon-document"></i>文章管理</template>
                    <el-menu-item-group v-loading="tagLoading">
                        <el-menu-item index="/list?tag=all">全部文章</el-menu-item>
                        <el-menu-item v-for="(tag_item,tag_index) in tagArr" :key="tag_index" :index="'/list?tag=' + tag_item.tag_name">{{ tag_item.tag_name }}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/editor"><i class="el-icon-plus"></i>新增文章</el-menu-item>
                <el-submenu index="/tag">
                    <template slot="title"><i class="el-icon-star-on"></i>类别管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/tag/list">文章类别</el-menu-item>
                        <el-menu-item index="/tag/group">类别分组</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>
<script>
    import types from '../store/mutation-types'
    export default {
        name: 'menu',
        data () {
            return {
                is_loading: false
            }
        },
        computed: {
            tagIndex(){
                return this.$store.state.tag_index;
            },
            tagArr () {
                return this.$store.state.tag_arr;
            },
            tagLoading () {
                return this.$store.state.tag_loading;
            }
        },
        created () {
            this.$store.dispatch('fetchTagList',() => {
                this.$nextTick( () => {
                    this.$route.query.tag && this.$store.commit(types.SET_TAG_INDEX,'/list?tag=' + this.$route.query.tag);
                })
            });
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
