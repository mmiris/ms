<script lang="ts" setup>
import { useStore } from 'vuex'
import { IStore } from '@/store/type'
import { Setting, Monitor, Goods, ChatLineRound } from '@element-plus/icons-vue'

const props = defineProps<{
  isFold: boolean
}>()
const store = useStore<IStore>()
const userMenus = store.state.login.userMenus
const icons = [Setting, Monitor, Goods, ChatLineRound]
</script>

<template>
  <div class="nav-menu">
    <el-menu
      default-active="0-0"
      :collapse="props.isFold"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <template v-for="(menu, index) in userMenus" :key="index">
        <template v-if="menu.type === 1">
          <el-sub-menu :index="`${index}`">
            <template #title>
              <el-icon>
                <component :is="icons[index]"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <!-- <template v-if="!props.isFold"> -->
            <template v-for="(subMenu, subIndex) in menu.children" :key="subIndex">
              <el-menu-item :index="index + '-' + subIndex">{{ subMenu.name }}</el-menu-item>
              <!-- </template> -->
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="`${index}`">
            <i v-if="menu.icon" :class="menu.icon" />
            <template #title>{{ menu.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.el-menu {
  border-right: none;
  height: 100vh;
}

.el-sub-menu .is-active {
  background-color: var(--el-menu-hover-bg-color);
  border-bottom: 1px solid #ffd04b;
}

.el-menu-item {
  border-bottom: 1px solid transparent;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>
