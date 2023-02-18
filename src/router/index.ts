import {createRouter, createWebHistory} from 'vue-router';
import type {RouteRecordRaw, Router} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        name: 'table',
        path: '/table',
        component: () => import('../pages/TablePage.vue'),
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('../pages/AboutPage.vue'),
    },
]

export const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});
