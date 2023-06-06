import Service from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const service = new Service(
  {
    baseURL: BASE_URL,
    timeout: TIMEOUT
  },
  {
    requestInterceptor: config => {
      console.log('Current instance requestInterceptor.')
      return config
    },
    requestInterceptorCatch(err) {
      console.log('Current instance requestInterceptorCatch.')
      return err
    },
    responseInterceptor(res) {
      console.log('Current instance responseInterceptor.')
      return res
    },
    resonseInterceptorCatch(err) {
      console.log('Current instance responseInterceptorCatch.')
      return err
    }
  }
)

export default service
