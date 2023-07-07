<script lang="ts" setup>
import { useStore } from 'vuex'
import { IStore } from '@/store/type'
import { useRoute } from 'vue-router'
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
    <div class="logo">
      <span v-show="!props.isFold" style="color: #31765f">Vue</span>
      <img src="~@/assets/imgs/logo.svg" alt="Vue-TS" />
      <span v-show="!props.isFold" style="color: #2662b9">TS</span>
    </div>
    <el-menu :default-active="useRoute().path" :collapse="props.isFold" :router="true">
      <template v-for="(menu, index) in userMenus" :key="index">
        <template v-if="menu.type === 1">
          <el-sub-menu :index="`${index}`">
            <template #title>
              <el-icon>
                <component :is="icons[index]"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="(subMenu, subIndex) in menu.children" :key="subIndex">
              <el-menu-item :index="subMenu.url">{{ subMenu.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="menu.url">
            <template #title>
              <el-icon>
                <component :is="icons[index]"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 28px;
  box-sizing: border-box;
  margin-top: 10px;
  justify-content: space-around;

  img {
    height: 100%;
  }

  span {
    margin: 25px;
  }
}

.el-menu {
  border-right: none;
  .el-sub-menu {
    .el-sub-menu__title {
      justify-content: space-between;

      span {
        flex: 1;
        text-align: center;
      }
    }

    .el-menu-item {
      justify-content: center;
      padding: 0 !important;
      border-bottom: 1px solid transparent;
    }

    .is-active {
      background-color: var(--el-menu-hover-bg-color);
      border-bottom: 1px solid var(--el-menu-active-color);
    }
  }
}

.el-menu:not(.el-menu--collapse) {
  width: 180px;
}
</style>
