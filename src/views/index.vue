<template>
  <div class="">
    demo test husky

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
