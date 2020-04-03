import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/home'
import category from '../views/category/category'
import cart from '../views/cart/cart'
import profile from '../views/profile/profile'
import detail from '../views/detail/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})
