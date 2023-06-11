import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setupStore from './hooks/use-vuex-persisted'

const app = createApp(App)

app.use(router).use(store).use(setupStore)
app.mount('#app')

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
