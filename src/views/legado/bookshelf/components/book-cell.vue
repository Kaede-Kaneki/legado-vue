<template>
  <div class="">
    <img :src="item.coverUrl" alt="" :onerror="handleError" />
    <span>{{ item.name }}</span>
  </div>
</template>

<script setup lang="ts">
  import { BookItem } from '@/types'
  import { PropType } from 'vue'

  defineProps({
    item: {
      type: Object as PropType<BookItem>,
      default: () => {},
    },
  })

  const handleError = () => {
    console.log(11)
  }
</script>

<style lang="scss" scoped></style>
