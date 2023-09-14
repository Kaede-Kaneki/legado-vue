import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { setGuards } from './guards'

const routes = ((s) =>
  Object.values(s).reduce<RouteRecordRaw[]>(
    (res, item: any) => [...res, ...(item.default || [])],
    [],
  ))(import.meta.glob('./modules/*.ts', { eager: true }))

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

setGuards(router)

export default router
