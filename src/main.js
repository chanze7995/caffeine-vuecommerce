import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Swiper from 'swiper/bundle'

import './utils/svg-icons'

createApp(App)
  .use(store)
  .use(router)
  // .use(Swiper)
  .mount('#app')
