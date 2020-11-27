import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'

//测试组件


//实例组件
import NotFont from '../views/NotFont.vue'


Vue.use(VueRouter)

const routes = [
  // 实例组件开始

  // 实例组件结束
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //404;
  {
    path: '*',
    component: NotFont
  }
  //404;
]

const router = new VueRouter({
  routes
})

export default router
