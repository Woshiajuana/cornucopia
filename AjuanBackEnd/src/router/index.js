import Vue from 'vue'
import Router from 'vue-router'

import Store from '../store/index'
import types from '../store/mutation-types'

/**登录页*/
import Login from '../views/login/Login.vue'

/**首页*/
import Home from '../views/home/Home.vue'

/**文章列表*/
import List from '../views/list/List.vue'

/**编辑列表*/
import Editor from '../views/editor/Editor.vue'

/**类别管理*/
import Tag from '../views/tag/Tag.vue'
import TagList from '../views/tag/children/TagList.vue'
import TagAddOrEdit from '../views/tag/children/TagAddOrEdit.vue'
import GroupList from '../views/tag/children/GroupList.vue'
import GroupAddOrEdit from '../views/tag/children/GroupAddOrEdit.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/list?tag=all',
            children: [
                /**文章列表页*/
                {
                    path: 'list',
                    name: 'list',
                    component: List,
                    meta: {
                        tab_index: '/list?tag=all',
                        crumb: [
                            { con: '文章管理' },
                            { con: '全部文章' }
                        ]
                    }
                },
                /**编辑新增文章页*/
                {
                    path: 'editor',
                    name: 'editor',
                    component: Editor,
                    meta: {
                        tab_index: '/editor',
                        crumb: [
                            { con: '新增文章' }
                        ]
                    }
                },
                /**类别管理页*/
                {
                    path: 'tag',
                    name: 'tag',
                    component: Tag,
                    meta: {
                        tab_index: '/tag',
                        crumb: [
                            { con: '类别管理' }
                        ]
                    },
                    children: [
                        /**类别列表页*/
                        {
                            path: 'list',
                            name: 'tag-list',
                            component: TagList,
                            meta: {
                                tab_index: '/tag/list',
                                crumb: [
                                    { con: '类别管理' },
                                    { con: '文章类别' }
                                ]
                            }
                        },
                        /**类别新增页*/
                        {
                            path: 'list/add',
                            name: 'tag-add',
                            component: TagAddOrEdit,
                            meta: {
                                tab_index: '/tag/list',
                                crumb: [
                                    { con: '类别管理' },
                                    { path: '/tag/list', con: '文章类别' },
                                    { con: '新增文章类别' }
                                ]
                            }
                        },
                        /**类别编辑页*/
                        {
                            path: 'list/edit',
                            name: 'tag-edit',
                            component: TagAddOrEdit,
                            meta: {
                                tab_index: '/tag/list',
                                crumb: [
                                    { con: '类别管理' },
                                    { path: '/tag/list', con: '文章类别' },
                                    { con: '编辑文章类别' }
                                ]
                            }
                        },
                        /**分组列表*/
                        {
                            path: 'group',
                            name: 'group-list',
                            component: GroupList,
                            meta: {
                                tab_index: '/tag/group',
                                crumb: [
                                    { con: '类别管理' },
                                    { con: '类别分组' }
                                ]
                            }
                        },
                        /**分组列表新增*/
                        {
                            path: 'group/add',
                            name: 'group-add',
                            component: GroupAddOrEdit,
                            meta: {
                                tab_index: '/tag/group',
                                crumb: [
                                    { con: '类别管理' },
                                    { path: '/tag/group', con: '文章分组' },
                                    { con: '新增类别分组' }
                                ]
                            }
                        },
                        /**分组列表编辑*/
                        {
                            path: 'group/edit',
                            name: 'group-edit',
                            component: GroupAddOrEdit,
                            meta: {
                                tab_index: '/tag/group',
                                crumb: [
                                    { con: '类别管理' },
                                    { path: '/tag/group', con: '文章分组' },
                                    { con: '编辑类别分组' }
                                ]
                            }
                        }
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

