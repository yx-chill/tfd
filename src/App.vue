<script setup>
import Gotop from '@/components/Gotop.vue'
// import storage from './includes/storage'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue';

const { locale } = useI18n()
let showGotop = ref(false)

// watch(locale, newlocale => {
//   storage.set('locale', newlocale)
// })

document.addEventListener('scroll', throttle(scroll, 400))

function scroll() {
  showGotop.value = document.documentElement.scrollTop > 200 ? true : false
}

function throttle(fn, delay) {
  let timer
  let prevTime
  return function (...args) {
    const currTime = Date.now()
    const context = this
    if (!prevTime) prevTime = currTime
    clearTimeout(timer)

    if (currTime - prevTime > delay) {
      prevTime = currTime
      fn.apply(context, args)
      clearTimeout(timer)
      return
    }

    timer = setTimeout(function () {
      prevTime = Date.now()
      timer = null
      fn.apply(context, args)
    }, delay)
  }
}
</script>

<template>
    <RouterView />
  <Gotop ref="gotop" :showGotop="showGotop" />
</template>

<style lang="scss" scoped>
</style>
