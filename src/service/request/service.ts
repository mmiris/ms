import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { IInstanceInterceptors, IRequestInterceptors } from './type'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

export default class Service {
  private _instance: AxiosInstance
  private _loader: LoadingInstance | null = null
  private _isLoading: boolean
  private _interceptors?: IInstanceInterceptors
  private _loading?: boolean

  constructor(config: AxiosRequestConfig, interceptor?: IInstanceInterceptors, loading?: boolean) {
    this._instance = axios.create(config)
    this._interceptors = interceptor
    this._isLoading = this._loading = loading ?? true

    this._instance.interceptors.request.use(
      (config) => {
        // TODO
        if (this._loading) {
          this._loader = ElLoading.service({
            lock: true,
            text: '加载中。。。',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        this._loading = this._isLoading
        // console.log(`All instance requset successful.`)
        return config
      },
      (err) => {
        // TODO
        console.log(`All instance requset failed.`)
        return err
      }
    )
    this._instance.interceptors.response.use(
      (res) => {
        // TODO
        this._loader && this._loader.close()
        // console.log('All instance response successful.')
        return res
      },
      (err) => {
        // TODO
        this._loader && this._loader.close()
        console.log('All instance response failed.')
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

  request(config: AxiosRequestConfig, interceptors?: IRequestInterceptors, loading?: boolean): Promise<AxiosResponse> {
    if (this._loading) {
      this._loading = loading ?? true
    }

    if (interceptors?.requestInterceptor) {
      config = interceptors.requestInterceptor(config)
    }

    if (interceptors?.requestInterceptorCatch) {
      this._instance.interceptors.request.use(undefined, interceptors.requestInterceptorCatch)
    }

    return new Promise((resolve, reject) => {
      this._instance
        .request(config)
        .then((res) => {
          if (interceptors?.responseInterceptor) {
            res = interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          if (interceptors?.resonseInterceptorCatch) {
            interceptors.resonseInterceptorCatch(err)
          }
          reject(err)
        })
    })
  }

  get(config: AxiosRequestConfig, interceptor?: IRequestInterceptors, loading?: boolean) {
    return this.request({ ...config, method: 'GET' }, interceptor, loading)
  }

  post(config: AxiosRequestConfig, interceptor?: IRequestInterceptors, loading?: boolean) {
    return this.request({ ...config, method: 'POST' }, interceptor, loading)
  }

  delete(config: AxiosRequestConfig, interceptor?: IRequestInterceptors, loading?: boolean) {
    return this.request({ ...config, method: 'DELETE' }, interceptor, loading)
  }

  patch(config: AxiosRequestConfig, interceptor?: IRequestInterceptors, loading?: boolean) {
    return this.request({ ...config, method: 'PATCH' }, interceptor, loading)
  }
}
