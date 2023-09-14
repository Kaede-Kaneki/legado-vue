import type { Router } from 'vue-router'

export const setGuards = (router: Router) => {
  router.beforeEach((to) => {
    window.document.title = to.meta.title ?? ''
  })
}
