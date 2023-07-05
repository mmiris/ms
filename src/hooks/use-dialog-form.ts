import { ref } from 'vue'
import { IFormConfig } from '@/common-ui/u-form'
import { ITableConfig } from '@/views/main/system'

export const useDialogForm = (dialogConf: IFormConfig, tableConfig: ITableConfig) => {
  const dialogModel = ref()
  const title = ref('')
  const dialogFormRef = ref()

  const hiddenConvert = (conf: IFormConfig, ishidden: boolean) => {
    dialogFormRef.value.dialogVisible = true
    conf.items.map((item) => {
      if (item.ishidden !== undefined) {
        item.ishidden = ishidden
      }
    })
  }

  const handleNew = () => {
    hiddenConvert(dialogConf, false)
    title.value = tableConfig.header.btnCotent
    dialogModel.value = {}
  }

  const handleEdit = (row: any) => {
    hiddenConvert(dialogConf, true)
    title.value = '编辑'
    dialogModel.value = { ...row }
  }

  return { title, dialogModel, dialogFormRef, handleNew, handleEdit }
}

export default useDialogForm
