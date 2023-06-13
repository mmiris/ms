import { RouteRecordRaw } from 'vue-router'
import AnalysisOverview from './AnalysisOverview.vue'
import AnalysisDashboard from './AnalysisDashboard.vue'

const analysisRoutes: RouteRecordRaw[] = [
  {
    name: 'analysisOvervie',
    path: '/analysis/overview',
    component: AnalysisOverview
  },
  {
    name: 'analysisDashbord',
    path: '/analysis/dashboard',
    component: AnalysisDashboard
  }
]

export default analysisRoutes
