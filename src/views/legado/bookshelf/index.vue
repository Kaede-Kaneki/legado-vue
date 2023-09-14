<template>
  <div class="">
    书架

    <ul>
      <li v-for="(item, index) in books" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { reqBookshelf } from '@/api'
  import { BookItem } from '@/types'

  const books = ref<BookItem[]>([])

  onBeforeMount(async () => {
    await initBookshelf()
  })

  const initBookshelf = async () => {
    books.value = await reqBookshelf()
  }
</script>

<style lang="scss" scoped></style>
