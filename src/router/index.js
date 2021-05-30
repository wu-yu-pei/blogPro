import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/logon'
  },
  {
    path:'/logon',
    component:() => import('../views/LogOn/index.vue'),
    meta:{title:'登录'}
  },
  {
    path:'/login',
    component:() => import('../views/LogIn/index.vue'),
    meta:{title:'注册'}

  }, 
  {
    path:'/index',
    component:() => import('../views/Index/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,form,next) => {
  next()
}) 

export default router
