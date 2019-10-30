import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Register from './views/NavForm.vue'
import Login from './views/NavForm2.vue'
import HomePage from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue')
    }
  ]
})
