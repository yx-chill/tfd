<script setup>
import { ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLangStore } from '@/stores/index';
import { useRouter } from 'vue-router';

const { t, locale } = useI18n()
const router = useRouter()
const useLang = useLangStore()
const lang = computed(() => useLang.lang)
const isLang = ref(lang.value == 'tw')

locale.value = useLang.locale

// const props = defineProps(['lang'])
// const { t, locale } = useI18n()
// const lang = ref(props.lang)
// const isLang = ref(lang.value == 'tw')

// watch(isLang, (newLang) => {
//   locale.value = newLang ? 'tw' : 'en'
// })

const changeLang = () => {
  isLang.value = !isLang.value
  useLang.setLang(isLang.value ? 'tw' : 'en')
  locale.value = useLang.locale
}

</script>

<template>
  <header class="header">
    <div class="header-top">
      <nav>
        <RouterLink :to="isLang ? '/en' : '/tw'" @click="changeLang">
          <i class="fa-solid fa-globe"></i>
          {{ isLang ? 'ENGLISH' : 'TW' }}
        </RouterLink>
        <RouterLink :to="isLang ? '/tw/news' : '/en/news'">
          <i class="fa-solid fa-share-nodes"></i>
          {{ t('share') }}
        </RouterLink>
        <RouterLink :to="isLang ? '/tw/news' : '/en/news'">
          <i class="fa-solid fa-diagram-project"></i>
          {{ t('map') }}
        </RouterLink>
      </nav>
      <nav>
        <RouterLink :to="isLang ? '/tw/news' : '/en/news'">
          <i class="fa-solid fa-diagram-project"></i>
          {{ t('home') }}
        </RouterLink>
        <RouterLink :to="isLang ? '/tw/news' : '/en/news'">
          <i class="fa-solid fa-diagram-project"></i>
          {{ t('contactus') }}
        </RouterLink>
        <RouterLink :to="isLang ? '/tw/news' : '/en/news'">
          <i class="fa-solid fa-diagram-project"></i>
          {{ t('securitypolicy') }}
        </RouterLink>
      </nav>
    </div>
    <h1>Header</h1>
  </header>
</template>

<style lang="scss" scoped>
</style>