<template>
  <div class="">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <van-tabbar fixed route placeholder v-model="current">
      <van-tabbar-item
        v-for="(item, index) in computedTabbar"
        :key="item.path"
        replace
        :to="{ path: item.path, query: $route.query }"
        :icon="index === current ? item.meta?.iconSelected : item.meta?.icon"
      >
        {{ item.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  const computedTabbar = computed(() => {
    const routes = router.getRoutes()
    const tabbarRoute = routes.find((item) => item.path === '/')
    return tabbarRoute?.children ?? []
  })
  const current = ref(computedTabbar.value.findIndex((item) => item.path === route.path))
</script>

<style lang="scss" scoped></style>
