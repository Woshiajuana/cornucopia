import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
nprogress.configure({ showSpinner: false });

Vue.use(Router);

const router = new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'home',
            component: () => import('src/views/home'),
            meta: {
                useClassify: true,
                useCopyright: true,
            }
        },
        {
            path: '/classify/:classify',
            component: () => import('src/views/home'),
            meta: {
                useClassify: true,
                useCopyright: true,
            }
        },
        // 详情
        {
            path: '/details/:classify/:id',
            name: 'details',
            component: () => import('src/views/details'),
            meta: {
                useClassify: false,
                useCatalog: true,
            }
        },
        {
            path: '*',
            redirect: '/',
        }
    ]
});

router.beforeEach((to, from, next) => {
    nprogress.start();
    next();
});

router.afterEach(() => {
    nprogress.done();
});

export default router
