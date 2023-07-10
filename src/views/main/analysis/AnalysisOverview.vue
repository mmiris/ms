<template>
  <div class="overview">
    <DataCard title="关于">
      <div>MS 基于 Vue3、Vuex、VueRouter、Webpack、 ElementPlus、TypeScript、Echart5 等后台系统解决方案。</div>
    </DataCard>
    <DataCard title="技术栈">
      <TechnologyStacks :technology-stacks-conf="technologyStacksConf" />
    </DataCard>
    <DataCard title="Git提交规范">
      <GitRegs :git-regs-conf="gitRegsConf" />
    </DataCard>
  </div>
  <DataCard title="项目结构">
    <ProjectStruc :project-struc-conf="progjectStrucConf" />
  </DataCard>
</template>

<script lang="ts" setup>
import DataCard from '@/components/data-card'
import TechnologyStacks from './cpns/TechnologyStacks.vue'
import GitRegs from './cpns/GitRegs.vue'
import ProjectStruc from './cpns/ProjectStruc.vue'

import technologyStacksConf from './config/technology-stacks'
import gitRegsConf from './config/git-regs'
import progjectStrucConf from './config/project-struc'
</script>

<style scoped lang="less"></style>
