import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './service'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')

service
  .request(
    {
      url: '/search',
      params: {
        q: 'axios'
      },
      method: 'GET'
    },
    {
      requestInterceptor: (config) => {
        console.log('Current request request successful.')
        return config
      },
      requestInterceptorCatch(err) {
        console.log('Current request request falied.')
        return err
      },
      responseInterceptor(res) {
        console.log('Current request response successful.')
        return res
      },
      resonseInterceptorCatch(err) {
        console.log('Current request response failed.')
        return err
      }
    }
  )
  .then((res) => console.log(res))
