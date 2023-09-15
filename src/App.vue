<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive max="10" :include="[]">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @import '@/assets/scss/index.scss';
</style>
