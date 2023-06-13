import { RouteRecordRaw } from 'vue-router'
import StoryChat from './StoryChat.vue'
import StoryList from './StoryList.vue'

const storyRoutes: RouteRecordRaw[] = [
  {
    name: 'storyChat',
    path: 'story/chat',
    component: StoryChat
  },
  {
    name: 'storyList',
    path: 'story/list',
    component: StoryList
  }
]

export default storyRoutes
