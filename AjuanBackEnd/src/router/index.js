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

/**标签管理*/
import Tag from '../views/tag/Tag.vue'
import TagList from '../views/tag/children/TagList.vue'
import TagAddOrEdit from '../views/tag/children/TagAddOrEdit.vue'

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
                            { path: '/list?tag=all', icon: 'el-icon-document', con: '文章管理' },
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
                /**标签管理页*/
                {
                    path: 'tag',
                    name: 'tag',
                    component: Tag,
                    meta: {
                        tab_index: '/tag',
                        crumb: [
                            { con: '标签管理' }
                        ]
                    },
                    children: [
                        /**标签列表页*/
                        {
                            path: 'list',
                            name: 'tag-list',
                            component: Tag,
                            meta: {
                                tab_index: '/tag',
                                crumb: [
                                    { con: '标签管理' }
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

