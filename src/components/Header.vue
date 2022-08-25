<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps(['lang'])
const { t, locale } = useI18n()
const lang = ref(props.lang)
const isLang = ref(lang.value == 'tw')

watch(isLang, (newLang) => {
  locale.value = newLang ? 'tw' : 'en'
})

const changeLang = () => {
  isLang.value = !isLang.value
}
</script>

<template>
  <header class="header">
    <div class="header-top">
      <nav>
        <RouterLink :to="isLang ? '/en' : '/tw'" @click="changeLang">{{ isLang ? 'ENGLISH' : 'TW' }}</RouterLink>
        <!-- <RouterLink :to="lang == 'tw' ? '/en' : '/tw'">{{ lang == 'tw' ? 'ENGLISH' : 'TW'  }}</RouterLink> -->
      </nav>
      <nav>
        <!-- <RouterLink></RouterLink> -->
      </nav>
    </div>
    <h1>Header</h1>
  </header>
</template>

<style lang="scss" scoped>
</style>