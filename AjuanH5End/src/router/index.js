import Vue from 'vue'
import Router from 'vue-router'
/**store参数变量*/
import types from '../store/mutation-types'
/**首页*/
import Home from '../views/home/Home.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                status: 1
            }
        }
    ]
});

/**
 * 判断用户是否第一次打开APP，是否启动引导页面
 * 设置路由之间的跳转动画
 * */
router.beforeEach(( to, from, next ) => {
    let store = this.a.app.$store;
    if( store ){
        if( from.meta.status > to.meta.status ) store.commit( types.SET_ANIMATE_NAME, 'vux-pop-out' );
        else store.commit( 'SET_ANIMATE_NAME', 'vux-pop-in' );
    }
    // let is_not_first = Tool.dataToLocalStorageOperate.achieve('is_not_first');
    // if ( !is_not_first && to.path != '/guide' ) next('/guide');
    // else if( is_not_first && to.path == '/guide' ) next('/');
    // else next();
    next();
});

export default router
