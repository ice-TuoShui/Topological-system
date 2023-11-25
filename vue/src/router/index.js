import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Manage.vue'),
    redirect: "/home",
    children: [
      { path: 'home', name: '首页', component: () => import('../views/Home.vue')},
      { path: 'ipNodeDetectProcess', name: '探测任务', component: () => import('../views/IpNodeDetectProcess.vue')},
      { path: 'pathManage', name: '拓扑路径管理', component: () => import('../views/PathManage.vue')},
      { path: 'ipNodeMap', name: '关键节点识别', component: () => import('../views/IpNodeMap.vue')},
      { path: 'topologyResult', name: '抽象拓扑图', component: () => import('../views/TopologyResult.vue')},
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  localStorage.setItem("currentPathName", to.name)  // 设置当前的路由名称，为了在Header组件中去使用
  store.commit("setPath")  // 触发store的数据更新
  next()  // 放行路由
})

export default router