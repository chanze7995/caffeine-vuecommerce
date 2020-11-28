import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/svg-icons'
// import SvgIcon from './components/SvgIcon'
// const app = createApp({}) // svg component
// app.component('svg-icon', SvgIcon) // register globally

// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./assets/img/icons', false, /\.svg$/)
// requireAll(req)

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
