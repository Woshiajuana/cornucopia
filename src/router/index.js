import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'home',
            // redirect: '/index',
            component: () => import('src/views/home'),
            meta: {
                useClassify: true,
                useCopyright: true,
            }
        },
        // 详情
        {
            path: '/details',
            name: 'details',
            component: () => import('src/views/details'),
            meta: {
                useClassify: false,
                useCatalog: true,
            }
        },
        {
            path: '/:classify',
            // redirect: '/index',
            component: () => import('src/views/home'),
            meta: {
                useClassify: true,
                useCopyright: true,
            }
        },
        {
            path: '*',
            redirect: '/',
        }
    ]
});

/**
 * 判断用户是否第一次打开APP，是否启动引导页面
 * 设置路由之间的跳转动画
 * */
// router.beforeEach( (to, from, next) => {
//     document.title = to.meta.title || '';
//     let store = this.a.app.$store;
//     if (store) {
//         store.commit('SET_ANIMATE_NAME', from.meta.status > to.meta.status ? 'vux-pop-out' : 'vux-pop-in');
//     }
//     let { path: toPath } = to;
//     let { access_token } = Vue.prototype.$storage.store.get('$$USER_INFO') || {};
//     const beforePath = [ '/user/account', '/user/login', '/user/register', '/user/forget' ];
//     if (access_token && beforePath.indexOf(toPath) > -1) {
//         return next('/');
//     }
//     if (!access_token && beforePath.indexOf(toPath) === -1) {
//         return next('/user/account');
//     }
//     next();
// });

export default router
