import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/page/Home.vue')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "Explore" */ '../views/page/Explore.vue')

  },
  {
    path: '/explore/:flavor',
    name: 'CoffeeBeanIntroduction',
    component: () => import(/* webpackChunkName: "CoffeeIntroduction" */ '../components/explore/CoffeeBeanIntroduction.vue')
  },
  // {
  //   path: '/exploretest',
  //   name: 'Exploretest',
  //   component: () => import(/* webpackChunkName: "Explore" */ '../views/page/Exploretest.vue')

  // },
  // {
  //   path: '/exploretest/flavor',
  //   name: 'CoffeeIntroduction',
  //   component: () => import(/* webpackChunkName: "CoffeeIntroduction" */ '../components/explore/CoffeeDescription.vue')
  // },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/page/Shop.vue')
    // children: [
    //   {

    //   },
    // ]
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "Locations" */ '../views/page/Locations.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "Course" */ '../views/page/Course.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "About" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
