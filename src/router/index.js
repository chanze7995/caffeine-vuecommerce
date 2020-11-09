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
        component: () => import(/* webpackChunkName: "HomeBanner" */ '../views/navBar/HomeBanner.vue')
      },
      {
        path: '/explore',
        name: 'Explore',
        component: () => import(/* webpackChunkName: "Explore" */ '../views/navBar/Explore.vue')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import(/* webpackChunkName: "Shop" */ '../views/navBar/Shop.vue')
      },
      {
        path: '/locations',
        name: 'Locations',
        component: () => import(/* webpackChunkName: "Locations" */ '../views/navBar/Locations.vue')
      },
      {
        path: '/course',
        name: 'Course',
        component: () => import(/* webpackChunkName: "Course" */ '../views/navBar/Course.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '../views/navBar/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
