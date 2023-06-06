import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './service'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')

service.request(
  {
    url: '/search',
    params: {
      q: 'axios'
    },
    method: 'GET'
  },
  {
    requestInterceptor: config => {
      console.log('Current request requestInterceptor.')
      return config
    },
    requestInterceptorCatch(err) {
      console.log('Current request requestInterceptorCatch.')
      return err
    },
    responseInterceptor(res) {
      console.log('Current request responseInterceptor.')
      return res
    },
    resonseInterceptorCatch(err) {
      console.log('Current request responseInterceptorCatch.')
      return err
    }
  }
)
