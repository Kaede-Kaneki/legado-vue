import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/bookshelf',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/bookshelf',
        name: 'legadoBookshelf',
        component: () => import('@/views/legado/bookshelf/index.vue'),
        meta: {
          title: '书架',
        },
      },
      {
        path: '/mine',
        name: 'legadoMine',
        component: () => import('@/views/legado/mine/index.vue'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
] as RouteRecordRaw[]
