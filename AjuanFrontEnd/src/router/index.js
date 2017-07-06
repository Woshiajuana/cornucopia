import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

import Store from '../store/index'
import types from '../store/mutation-types'

/**权限管理*/
import Permission from '../views/permission/Permission.vue'
import PermissionRoleIndex from '../views/permission/children/PermissionRoleIndex.vue'
import PermissionRoleAddOrEdit from '../views/permission/children/PermissionRoleAddOrEdit.vue'
import PermissionRoleAddResource from '../views/permission/children/PermissionRoleAddResource.vue'
import PermissionRoleDetails from '../views/permission/children/PermissionRoleDetails.vue'
import PermissionResourceIndex from '../views/permission/children/PermissionResourceIndex.vue'
import PermissionResourceAddOrEdit from '../views/permission/children/PermissionResourceAddOrEdit.vue'
import PermissionAdminIndex from '../views/permission/children/PermissionAdminIndex.vue'
import PermissionAdminAddOrEdit from '../views/permission/children/PermissionAdminAddOrEdit.vue'
import PermissionLogIndex from '../views/permission/children/PermissionLogIndex.vue'

/**系统管理*/
import System from '../views/system/System.vue'
import SystemInstitutionIndex from '../views/system/children/SystemInstitutionIndex.vue'
import SystemInstitutionAddOrEdit from '../views/system/children/SystemInstitutionAddOrEdit.vue'

/**产品管理*/
import Product from '../views/product/Product.vue'
import ProductTypeIndex from '../views/product/children/ProductTypeIndex.vue'
import ProductTypeAdd from '../views/product/children/ProductTypeAdd.vue'
import ProductTypeEdit from '../views/product/children/ProductTypeEdit.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                /**权限管理*/
                {
                    path: 'permission',
                    name: 'permission',
                    component: Permission,
                    meta: {
                        tab_index: 'permission'
                    },
                    children: [
                        /**角色管理*/
                        {
                            path: 'role',
                            name: 'permission-role-index',
                            component: PermissionRoleIndex,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '角色管理' }
                                ]
                            }
                        },
                        /**添加角色*/
                        {
                            path: 'role/add',
                            name: 'permission-role-add-or-edit',
                            component: PermissionRoleAddOrEdit,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { con: '添加系统角色' }
                                ]
                            }
                        },
                        /**编辑角色*/
                        {
                            path: 'role/edit/:role_id',
                            name: 'permission-role-add-or-edit',
                            component: PermissionRoleAddOrEdit,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { con: '编辑系统角色' }
                                ]
                            }
                        },
                        /**角色详情*/
                        {
                            path: 'role/details/:role_id',
                            name: 'permission-role-details',
                            component: PermissionRoleDetails,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { con: '角色详情' }
                                ]
                            }
                        },
                        /**角色添加资源*/
                        {
                            path: 'role/details/:role_id/resource',
                            name: 'permission-role-add-resource',
                            component: PermissionRoleAddResource,
                            meta: {
                                tab_index: '/permission/role',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/role', con: '角色管理' },
                                    { path: '/permission/role/details', params: 'role_id', con: '角色详情' },
                                    { con: '添加系统资源' }
                                ]
                            }
                        },
                        /**资源管理*/
                        {
                            path: 'resource',
                            name: 'permission-resource-index',
                            component: PermissionResourceIndex,
                            meta: {
                                tab_index: '/permission/resource',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '资源管理' }
                                ]
                            }
                        },
                        /**添加资源*/
                        {
                            path: 'resource/add',
                            name: 'permission-resource-add-or-edit',
                            component: PermissionResourceAddOrEdit,
                            meta: {
                                tab_index: '/permission/resource',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/resource', con: '资源管理' },
                                    { con: '添加系统资源' }
                                ]
                            }
                        },
                        /**编辑资源*/
                        {
                            path: 'resource/edit/:resource_id',
                            name: 'permission-resource-add-or-edit',
                            component: PermissionResourceAddOrEdit,
                            meta: {
                                tab_index: '/permission/resource',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/resource', con: '资源管理' },
                                    { con: '编辑系统资源' }
                                ]
                            }
                        },
                        /**管理员管理*/
                        {
                            path: 'admin',
                            name: 'permission-admin-index',
                            component: PermissionAdminIndex,
                            meta: {
                                tab_index: '/permission/admin',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '管理员管理' }
                                ]
                            }
                        },
                        /**新增管理员数据*/
                        {
                            path: 'admin/add',
                            name: 'permission-admin-add-or-edit',
                            component: PermissionAdminAddOrEdit,
                            meta: {
                                tab_index: '/permission/admin',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/admin', con: '管理员管理' },
                                    { con: '新增管理员' }
                                ]
                            }
                        },
                        /**编辑管理员数据*/
                        {
                            path: 'admin/edit/:admin_id',
                            name: 'permission-admin-add-or-edit',
                            component: PermissionAdminAddOrEdit,
                            meta: {
                                tab_index: '/permission/admin',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { path: '/permission/admin', con: '管理员管理' },
                                    { con: '编辑管理员' }
                                ]
                            }
                        },
                        /**管理员日志*/
                        {
                            path: 'log',
                            name: 'permission-log-index',
                            component: PermissionLogIndex,
                            meta: {
                                tab_index: '/permission/log',
                                crumb: [
                                    { path: '/permission', icon: 'el-icon-message', con: '权限管理' },
                                    { con: '管理员日志' }
                                ]
                            }
                        },
                    ]
                },
                /**产品管理*/
                {
                    path: 'product',
                    name: 'product',
                    component: Product,
                    meta: {
                        tab_index: 'product'
                    },
                    children: [
                        /**产品类型管理*/
                        {
                            path: 'type',
                            name: 'product-type-index',
                            component: ProductTypeIndex,
                            meta: {
                                tab_index: '/product/type',
                                crumb: [
                                    { path: '/product', icon: 'el-icon-message', con: '产品管理' },
                                    { con: '产品类型管理' }
                                ]
                            }
                        },
                        /**添加产品类型*/
                        {
                            path: 'type/add',
                            name: 'product-type-add',
                            component: ProductTypeAdd,
                            meta: {
                                tab_index: '/product/type',
                                crumb: [
                                    { path: '/product', icon: 'el-icon-message', con: '产品管理' },
                                    { path: '/product/type', con: '产品类型管理' },
                                    { con: '添加产品类型' }
                                ]
                            }
                        },
                        /**编辑产品类型*/
                        {
                            path: 'type/edit/:bizId',
                            name: 'product-type-edit',
                            component: ProductTypeEdit,
                            meta: {
                                tab_index: '/product/type',
                                crumb: [
                                    { path: '/product', icon: 'el-icon-message', con: '产品管理' },
                                    { path: '/product/type', con: '产品类型管理' },
                                    { con: '编辑产品类型' }
                                ]
                            }
                        },
                    ]
                },
                /**系统管理*/
                {
                    path: 'system',
                    name: 'system',
                    component: System,
                    meta: {
                        tab_index: 'system'
                    },
                    children: [
                        /**机构类型管理*/
                        {
                            path: 'institution',
                            name: 'system-institution-index',
                            component: SystemInstitutionIndex,
                            meta: {
                                tab_index: '/system/institution',
                                crumb: [
                                    { path: '/system', icon: 'el-icon-message', con: '系统管理' },
                                    { con: '机构类型管理' }
                                ]
                            }
                        },
                        /**添加机构类行*/
                        {
                            path: 'institution/add',
                            name: 'system-institution-add-or-edit',
                            component: SystemInstitutionAddOrEdit,
                            meta: {
                                tab_index: '/system/institution',
                                crumb: [
                                    { path: '/system', icon: 'el-icon-message', con: '系统管理' },
                                    { path: '/system/institution', con: '机构类型管理' },
                                    { con: '添加机构类型' }
                                ]
                            }
                        },
                        /**编辑角色*/
                        {
                            path: 'institution/edit/:bizId',
                            name: 'system-institution-add-or-edit',
                            component: SystemInstitutionAddOrEdit,
                            meta: {
                                tab_index: '/system/institution',
                                crumb: [
                                    { path: '/system', icon: 'el-icon-message', con: '系统管理' },
                                    { path: '/system/institution', con: '机构类型管理' },
                                    { con: '编辑机构类型' }
                                ]
                            }
                        },
                    ]
                }
            ]
        },
        /**登录页*/
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

/**
 * 判断用户是否有登录，没有登录则跳转到登录页面
 * 如果用户已经登录，则回跳到登录的页的时候，要转到首页
 * */
router.beforeEach( (to, from, next) => {
    // var user = Tool.dataToSessionStorageOperate.achieve('user');
    // var token = Tool.dataToSessionStorageOperate.achieve('token');
    // if ((!token || !user) && to.path != '/login'){
    //     next('/login');
    // } else if ( token && user && to.path == '/login'){
    //     next('/?tab=all');
    // } else if ( token && user && to.path == '/' && !to.query.tab) {
    //     next('/?tab=all');
    // } else {
    //     next();
    // }
    if( to.meta.tab_index ) Store.commit( types.SET_TAB_INDEX, to.meta.tab_index );
    next();
});
export default router

