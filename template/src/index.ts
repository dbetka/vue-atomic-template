import { createApp } from 'vue'
import AppComponent from './app.vue'
import router from './router'
import store from './store'
import './index.sass'
import { materialIcons } from '@dbetka/vue-material-icons'
import '@dbetka/vue-material-icons/dist/vue-material-icons.css'

createApp(AppComponent)
  .use(store)
  .use(router)
  .use(materialIcons)
  .mount('#app')
