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
    meta:{title:'注册',keepAlive:false}

  },   
  {
    path:'/showacticle',
    name:'showacticle',
    component:() => import("../views/ShowActicle/index.vue")
  },
  {
    path:'/change',
    name:'change',
    component:() => import("../views/Change/index.vue")
  },
  {
    path:'/write',
    name:'write',
    component:() => import("../views/Write/index.vue"),
    meta:{keepAlive:false}
  },
  {
    path:'/alluseracticle',
    name:'alluseracticel',
    component:() => import("../views/AllUserActicle/index.vue"),
    meta:{keepAlive:true}
  },
  {
    path:'/contact',
    name:'contact',
    component:() => import("../views/Contact/index.vue")
  },
  {
    path:'/administration',
    name:'administration',
    component:() => import("../views/Administration/index.vue")
  },
  {
    path:'/index',
    component:() => import('../views/Index/index.vue'),
    redirect:'/index/lately',
    children:[
        {
          path:"/index/lately",
          component:() => import("../views/Lately/index.vue")
        },
        {
          path:'/index/allactive',
          component:() => import("../views/AllActicle/index.vue")
        },
        {
          path:"/index/follow",
          component:() => import("../views/Follow/index.vue")
        }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,form,next) => {
  next()
}) 

export default router
