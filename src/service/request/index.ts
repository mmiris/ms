import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { IInstanceInterceptors, IRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

export default class Service {
  private _instance: AxiosInstance
  private _interceptors?: IInstanceInterceptors
  private _loading?: LoadingInstance | boolean

  constructor(
    config: AxiosRequestConfig,
    interceptor?: IInstanceInterceptors,
    loading?: boolean
  ) {
    this._instance = axios.create(config)
    this._interceptors = interceptor
    this._loading = loading ?? true

    this._instance.interceptors.request.use(
      config => {
        // TODO
        if (this._loading) {
          this._loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        console.log('All instance requsetInterceptor.')
        return config
      },
      err => {
        // TODO
        console.log(`All instance requsetInterceptorCatch.`)
        return err
      }
    )
    this._instance.interceptors.response.use(
      res => {
        // TODO
        ;(this._loading as LoadingInstance).close()
        console.log('All instance responseInterceptor.')
        return res
      },
      err => {
        // TODO
        console.log('All instance responseInterceptorCatch.')
        return err
      }
    )

    this._instance.interceptors.request.use(
      this._interceptors?.requestInterceptor,
      this._interceptors?.requestInterceptorCatch
    )
    this._instance.interceptors.response.use(
      this._interceptors?.responseInterceptor,
      this._interceptors?.resonseInterceptorCatch
    )
  }

  request<T>(
    config: AxiosRequestConfig,
    interceptors?: IRequestInterceptors,
    loading?: boolean
  ): Promise<T> {
    if (this._loading) {
      this._loading = loading ?? true
    }
    if (interceptors?.requestInterceptor) {
      config = interceptors.requestInterceptor(config)
    }

    if (interceptors?.requestInterceptorCatch) {
      this._instance.interceptors.request.use(
        undefined,
        interceptors.requestInterceptorCatch
      )
    }

    if (interceptors?.resonseInterceptorCatch) {
      this._instance.interceptors.response.use(
        undefined,
        interceptors.resonseInterceptorCatch
      )
    }

    return new Promise((resolve, reject) => {
      this._instance
        .request(config)
        .then(res => {
          if (interceptors?.responseInterceptor) {
            res = interceptors.responseInterceptor(res)
          }
          resolve(res.data)
        })
        .catch(err => reject(err))
    })
  }

  get(
    config: AxiosRequestConfig,
    interceptor?: IRequestInterceptors,
    loading?: boolean
  ) {
    return this.request({ ...config, method: 'GET' }, interceptor, loading)
  }

  post(
    config: AxiosRequestConfig,
    interceptor?: IRequestInterceptors,
    loading?: boolean
  ) {
    return this.request({ ...config, method: 'POST' }, interceptor, loading)
  }

  delete(
    config: AxiosRequestConfig,
    interceptor?: IRequestInterceptors,
    loading?: boolean
  ) {
    return this.request({ ...config, method: 'DELETE' }, interceptor, loading)
  }

  patch(
    config: AxiosRequestConfig,
    interceptor?: IRequestInterceptors,
    loading?: boolean
  ) {
    return this.request({ ...config, method: 'PATCH' }, interceptor, loading)
  }
}
