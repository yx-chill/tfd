<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const lang = route.path.slice(1, 3)
</script>

<template>
<Header :lang="lang" />
<div class="main">

</div>
<Footer :lang="lang" />
</template>

<style lang="scss" scoped>

</style>