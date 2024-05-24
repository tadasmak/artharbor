import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { modalMixin } from './mixins/modalMixin'

const app = createApp(App)

app.mixin(modalMixin)

app.use(router)

app.mount('#app')
