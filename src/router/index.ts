import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes = ((s) =>
  Object.values(s).reduce<RouteRecordRaw[]>(
    (res, item: any) => [...res, ...(item.default || [])],
    [],
  ))(import.meta.glob('./modules/*.ts', { eager: true }))

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
