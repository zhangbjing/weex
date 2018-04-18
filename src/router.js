/* global Vue */

import Router from 'vue-router'

import Login from '@/components/Login'
import ForgetPassword from '@/components/ForgetPassword'
import PromptNew from '@/components/PromptNew'
import PromptOld from '@/components/PromptOld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/promptNew',
      name: 'PromptNew',
      component: PromptNew
    },
    {
      path: '/promptOld',
      name: 'PromptOld',
      component: PromptOld
    }
  ]
})
