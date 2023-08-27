import {createRouter,createWebHistory} from 'vue-router'

export default createRouter({
    // 路由的模式
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue'),
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
        },
    ],
    scrollBehavior() {
        return { top: 0,left: 0 }
    }
})