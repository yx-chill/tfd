<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Gotop from '@/components/Gotop.vue'
import storage from './includes/storage'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue';

const { t, locale } = useI18n()

watch(locale, (newlocale) => {
  storage.set('locale', newlocale)
})

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 200) {
  }
})

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
  <div class="body">
    <Header />
    <RouterView />
    <Footer />

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav>
    <select v-model="locale">
      <option>zh-TW</option>
      <option>en-US</option>
    </select>
  </nav>
  <p>{{ t("cancel") }}</p>
  <p>{{ t("email") }}</p>
  <p>{{ t("date") }}</p>
  <p>{{ t("subject") }}</p>
  <p>{{ t("message") }}</p>
  <p>{{ t("upload") }}</p>

  <button @click="locale = 'zh-TW'">中文</button>
  <button @click="locale = 'en-US'">英文</button>

  <Gotop ref="gotop" />
</template>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  height: 300vh;
}
</style>
