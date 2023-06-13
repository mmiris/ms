import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setupStore from './hooks/use-vuex-persisted'

const app = createApp(App)

app.use(store).use(setupStore).use(router)
app.mount('#app')
