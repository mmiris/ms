import type { InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from 'axios'

interface ICommInterceptors {
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  resonseInterceptorCatch?: (err: any) => any
}

interface IInstanceInterceptors extends ICommInterceptors {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
}

interface IRequestInterceptors extends ICommInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
}

export { IInstanceInterceptors, IRequestInterceptors }
