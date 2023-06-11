import { ILoginState } from './login/type'

export interface IRootState {
  name: string
}

export enum EModules {
  login = 'login'
}

export interface IStore<T = ILoginState> extends IRootState {
  login: T
}
