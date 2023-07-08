import { ILoginState } from './login/type'
import { ISytemState } from './main/system/types'
import { IAnalysisState } from './main/analysis/types'

interface IRootState {
  name: string
  departmentList: any[]
  roleList: any[]
  menuList: any[]
}

enum EModules {
  login = 'login',
  system = 'system',
  analysis = 'analysis'
}

interface IStore extends IRootState {
  login: ILoginState
  system: ISytemState
  analysis: IAnalysisState
}

export { IRootState, IStore, EModules }
