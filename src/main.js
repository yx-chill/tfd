import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import storage from '@/includes/storage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

import zh from '@/language/zh-TW.json'
import en from '@/language/en-US.json'

const i18n = createI18n({
  legacy: false,
  locale: storage.get('locale') ?? 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    "zh-TW": zh,
    "en-US": en
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
