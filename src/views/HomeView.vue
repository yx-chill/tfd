<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'
import { useLangStore } from '@/stores/index'
import { computed } from '@vue/reactivity';

const route = useRoute()
const useLang = useLangStore()
useLang.setLang(route.path.slice(1, 3))
const lang = computed(() => useLang.lang)
const locale = computed(() => useLang.locale)

</script>

<template>
  <Header />
  <div class="main">

  </div>
  <Footer />
</template>

<style lang="scss" scoped>
</style>