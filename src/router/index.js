import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'HomeBanner',
        component: () => import(/* webpackChunkName: "HomeBanner" */ '../views/page/HomeBanner.vue')
      },
      {
        path: '/explore',
        name: 'Explore',
        component: () => import(/* webpackChunkName: "Explore" */ '../views/page/Explore.vue')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import(/* webpackChunkName: "Shop" */ '../views/page/Shop.vue')
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
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '../views/page/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
