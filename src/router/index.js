import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cooperative from '../components/data/Cooperative.vue'
import Loadapprentice from '../components/data/Dowload/Loadapprentice.vue'
import LoadCooperative from '../components/data/Dowload/LoadCooperative.vue'
import AllImg from '../components/data/AllNewImg/AllImg.vue'
import AllNew from '../components/data/AllNewImg/AllNew.vue'
import Schedulecoop from '../components/data/Schedule/Schedulecoop.vue'
import Scheduleprent from '../components/data/Schedule/Scheduleprent.vue'
import Ndetail from '../components/Newdetail/Ndetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/coop',
    name: 'Cooperative',
    component: Cooperative
  },
  {
    path: '/La',
    name: 'Loadapprentice',
    component: Loadapprentice
  },
  {
    path: '/Anew',
    name: 'AllNew',
    component: AllNew
  },
  {
    path: '/Aimg',
    name: 'AllImg',
    component: AllImg
  },
  {
    path: '/Lc',
    name: 'LoadCooperative',
    component: LoadCooperative
  },
  {
    path: '/Schecoop',
    name: 'Schedulecoop',
    component: Schedulecoop
  },
  {
    path: '/Scheprent',
    name: 'Scheduleprent',
    component: Scheduleprent
  },
  {
    path: '/Nc/:newsID',
    name: 'Ndetail',
    component: Ndetail
  },
  {
    path: '/esta',
    name: 'Establishment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/data/Establishment.vue')
  },
 
  {
    path: '/Fa',
    name: 'Facebook',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Facebook.vue')
  },
  
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
