import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/demo',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/demo',
        name: 'demoHome',
        component: () => import('@/views/demo/home/index.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
