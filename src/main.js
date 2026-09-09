import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'

import { Quasar, Notify } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './style.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify },
})

app.use(router)

app.mount('#app')