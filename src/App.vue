<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="body">
    <Header />
    <RouterView />
    <Footer />
  </div>

  <RouterLink :to="{ name: 'news' }">News</RouterLink>
  <RouterLink :to="{ name: 'about' }">About</RouterLink>
</template>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
}
</style>
