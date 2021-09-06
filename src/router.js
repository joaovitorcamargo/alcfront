import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue'
import Sistema from '@/views/Sistema.vue'
import EditFormUser from '@/components/Users/EditFormUser.vue'

Vue.use(Router);

const router = new Router({
  mode:'history',
  routes:[
    {
      path: "/",
      redirect: "/login"
    },
    {
      path:'/login',
      name: "Login",
      component: Login
    },
    {
      path:'/sistema',
      name:"Sistema",
      component:Sistema,
      meta:{
        login:true
      }
    },
    {
      path:'/sistema/edituser/:id',
      name: "EditFormUse",
      props: true,
      component: EditFormUser
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.login)){
    if(!window.localStorage.token){
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})
export default router;