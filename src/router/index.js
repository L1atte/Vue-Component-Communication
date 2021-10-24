/*
 * @Author: Latte
 * @Date: 2021-10-24 02:12:37
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-25 00:41:15
 * @FilePath: \vue-component-demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/FatherProp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import(/* webpackChunkName: "about" */ '../views/$parent.vue')
  },
  {
    path: '/fatherProvide',
    name: 'FatherProvide',
    component: () => import(/* webpackChunkName: "about" */ '../components/inject/Father.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
