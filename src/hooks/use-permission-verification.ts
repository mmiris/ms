import { useStore } from 'vuex'
import { IStore } from '@/store/type'

const verifyPermission = (cpnName: string, validator: string) => {
  const store = useStore<IStore>()
  return !!store.state.login.permissions.find((item) => item === `system:${cpnName}:${validator}`)
}

export default verifyPermission
