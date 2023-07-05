import { ref } from 'vue'

const useSearchForm = () => {
  const tableContentRef = ref()
  const searchContent = (model: any) => tableContentRef.value?.searchContent(model)

  return { tableContentRef, searchContent }
}

export default useSearchForm
