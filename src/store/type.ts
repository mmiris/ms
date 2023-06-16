import { ILoginState } from './login/type'
import { ISytemState } from './main/system/types'

interface IRootState {
  name: string
}

enum EModules {
  login = 'login',
  system = 'system'
}

interface IStore extends IRootState {
  login: ILoginState
  system: ISytemState
}

export { IRootState, EModules, IStore }
