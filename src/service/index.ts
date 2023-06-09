import Service from './request/service'
import { BASE_URL, TIMEOUT } from './request/config'
import localCache from '@/utils/localCache'

const service = new Service(
  {
    baseURL: BASE_URL,
    timeout: TIMEOUT
  },
  {
    requestInterceptor: (config) => {
      const token = localCache.getItem('token')
      if (token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      // console.log('Current instance request successful.')
      return config
    },
    requestInterceptorCatch(err) {
      console.log('Current instance request failed.')
      return err
    },
    responseInterceptor(res) {
      // console.log('Current instance response successful.')
      return res
    },
    resonseInterceptorCatch(err) {
      console.log('Current instance response failed.')
      return err
    }
  }
)

export default service
