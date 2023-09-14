<template>
  <div class=""> 书架 </div>
</template>

<script setup lang="ts">
  import { reqBookshelf } from '@/api'

  onBeforeMount(async () => {
    await reqBookshelf()
  })
</script>

<style lang="scss" scoped></style>
