<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { locale } = useI18n()

const lang = route.path.slice(1, 3)
locale.value = lang

</script>

<template>
  <p>NEWS</p>
</template>

<style lang="scss" scpoed>
</style>