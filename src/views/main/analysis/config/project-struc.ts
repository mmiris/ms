const projectStrucConf = `
├── README.md
├── auto-imports.d.ts
├── babel.config.js
├── commitlint.config.js
├── components.d.ts
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── common.less
│   │   │   └── index.less
│   │   └── imgs
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── common-ui
│   │   ├── u-breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── UBreadcurmb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── u-echarts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── UEcharts.vue
│   │   │       ├── data
│   │   │       │   └── china.json
│   │   │       └── hooks
│   │   │           └── use-echarts.ts
│   │   ├── u-form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── UForm.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── u-table
│   │       ├── index.ts
│   │       └── src
│   │           └── UTable.vue
│   ├── components
│   │   ├── data-card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── DataCard.vue
│   │   ├── dialog-form
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── DialogForm.vue
│   │   ├── nav-header
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── NavHeader.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── NavMenu.vue
│   │   ├── search-form
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── SearchForm.vue
│   │   └── table-content
│   │       ├── index.ts
│   │       └── src
│   │           └── TableContent.vue
│   ├── hooks
│   │   ├── use-dialog-form.ts
│   │   ├── use-permission-verification.ts
│   │   ├── use-search-form.ts
│   │   └── use-vuex-persisted.ts
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   ├── service
│   │   ├── analysis
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── sysytem.ts
│   │   │   └── types.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── service.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── index.ts
│   │   │   │   └── types.ts
│   │   │   └── system
│   │   │       ├── index.ts
│   │   │       └── types.ts
│   │   └── type.ts
│   ├── utils
│   │   ├── date-format.ts
│   │   ├── local-cache.ts
│   │   ├── map-menus-breadcrumb.ts
│   │   ├── map-menus-checkedKeys.ts
│   │   ├── map-menus-permission.ts
│   │   └── map-menus-routes.ts
│   └── views
│       ├── login
│       │   ├── LoginView.vue
│       │   ├── config
│       │   │   └── account-rules.ts
│       │   └── cpns
│       │       └── LoginForm.vue
│       └── main
│           ├── MainView.vue
│           ├── analysis
│           │   ├── AnalysisDashboard.vue
│           │   ├── AnalysisOverview.vue
│           │   ├── config
│           │   │   ├── git-regs.ts
│           │   │   ├── project-struc.ts
│           │   │   └── technology-stacks.ts
│           │   ├── cpns
│           │   │   ├── BarVisual.vue
│           │   │   ├── GitRegs.vue
│           │   │   ├── LineVisual.vue
│           │   │   ├── MapVisual.vue
│           │   │   ├── PieVisual.vue
│           │   │   ├── ProjectStruc.vue
│           │   │   ├── RoseVisual.vue
│           │   │   └── TechnologyStacks.vue
│           │   ├── index.ts
│           │   └── utils
│           │       ├── convert-data.ts
│           │       └── coordinate-data.ts
│           ├── product
│           │   ├── ProductCategory.vue
│           │   ├── ProductGoods.vue
│           │   ├── config
│           │   │   ├── category.dialogConf.ts
│           │   │   ├── category.formConfig.ts
│           │   │   ├── category.tableConfig.ts
│           │   │   ├── goods.formConfig.ts
│           │   │   └── goods.tableConfig.ts
│           │   └── index.ts
│           ├── story
│           │   ├── StoryChat.vue
│           │   ├── StoryList.vue
│           │   └── index.ts
│           └── system
│               ├── SystemDepartment.vue
│               ├── SystemMenu.vue
│               ├── SystemRole.vue
│               ├── SystemUser.vue
│               ├── config
│               │   ├── department.formConf.ts
│               │   ├── department.tableConf.ts
│               │   ├── depatment.dialogConf.ts
│               │   ├── menu.formConfig.ts
│               │   ├── menu.tableConfig.ts
│               │   ├── role.dialogConf.ts
│               │   ├── role.formConfig.ts
│               │   ├── role.tableConfig.ts
│               │   ├── user.dialogConf.ts
│               │   ├── user.formConfig.ts
│               │   └── user.tableConfig.ts
│               ├── index.ts
│               └── types
│                   └── index.ts
├── tsconfig.json
└── vue.config.js`

export default projectStrucConf
