import * as echarts from 'echarts'
import chinaMap from '../data/china.json'

echarts.registerMap('china', chinaMap)

const useEcharts = (elementRef: HTMLElement) => {
  const EChartsInstance = echarts.init(elementRef)
  const setOption: (option: echarts.EChartsOption) => void = (option) => EChartsInstance.setOption(option, true)

  window.addEventListener('resize', () => EChartsInstance.resize())
  return { setOption }
}

export { useEcharts }
