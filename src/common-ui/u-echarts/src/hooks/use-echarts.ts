import * as echarts from 'echarts'

const useEcharts = (elementRef: HTMLElement) => {
  const echartsInstance = echarts.init(elementRef)
  const setOption: (option: echarts.EChartsOption) => void = (option) => echartsInstance.setOption(option)

  window.addEventListener('resize', () => echartsInstance.resize())
  return { setOption }
}

export { useEcharts }
