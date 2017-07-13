import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Article from '../views/article/Article.vue'


Vue.use(Router);

let router = new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home
        },
        /**文章内容页*/
        {
            path: '/article',
            name: 'article',
            component: Article
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

