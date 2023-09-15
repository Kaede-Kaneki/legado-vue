<template>
  <div class="">
    书架
    <book-cell v-for="(item, index) in books" :key="index" :item="item" />
  </div>
</template>

<script setup lang="ts">
  import { reqBookshelf } from '@/api'
  import { BookItem } from '@/types'
  import BookCell from './components/book-cell.vue'

  const books = ref<BookItem[]>([])
  onBeforeMount(async () => {
    await initBookshelf()
  })

  const initBookshelf = async () => {
    books.value = await reqBookshelf()
  }
</script>

<style lang="scss" scoped></style>
