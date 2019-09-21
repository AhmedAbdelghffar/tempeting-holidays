import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './views/Login'
import Home from './views/Home.vue'
import About from './views/About.vue'
import hotelsList from './components/hotels/hotels-list'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'no-sidebar'}
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'default'}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { layout: 'default'}
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: hotelsList,
      meta: { layout: 'default'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  if (!store.state.user.userToken && to.path !== '/login') {
    return next('/login');
  }
  if (store.state.user.userToken && to.path === '/login') {
    return next('/');
  }

  next();
})

export default router