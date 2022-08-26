import { defineStore } from 'pinia'

export const useLangStore = defineStore({
  id: 'lang',
  state: () => ({
    lang: '',
    locale: ''
  }),
  getters: {
  },
  actions: {
    setLang(l) {
      this.lang = l
      this.locale = this.lang
    },
    changeLang() {
      this.lang = this.lang == 'tw' ? 'en' : 'tw'
      this.locale = this.lang
    }
  }
})
