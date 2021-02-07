import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trickquestion',
    name: 'Trick Question',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TrickQuestion.vue')
  },
  {
    path: '/confirmshaming',
    name: 'Confirmshaming',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConfirmShaming.vue')
  },
  {
    path: '/pricecomparison',
    name: 'Price Comparison Prevention',
    component: () => import(/* webpackChunkName: "about" */ '../views/PriceComparison.vue')
  },
  {
    path: '/sneakintobasket',
    name: 'Sneak Into Basket and Roach Motel',
    component: () => import(/* webpackChunkName: "about" */ '../views/SneakIntoBasketAndRoachMotel.vue')
  },
  {
    path: '/hiddencosts',
    name: 'Hidden Costs',
    component: () => import(/* webpackChunkName: "about" */ '../views/HiddenCosts.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
