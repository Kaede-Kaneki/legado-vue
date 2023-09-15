import type { Router } from 'vue-router'

export const setGuards = (router: Router) => {
  router.beforeEach((to) => {
    window.document.title = '阅读 - ' + to.meta.title ?? ''
  })
}
