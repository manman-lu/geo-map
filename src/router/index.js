import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta:{
        requiresAuth: true //this route requires users to be authenticated to see it
      }
    },
    {
      path:'/signup',
      name:'Signup',
      component: Signup

    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/profile/:id',
      name:'ViewProfile',
      component: ViewProfile,
      meta:{
        requiresAuth: true //this route requires users to be authenticated to see it
      }
    }
  ]
})

//create route guard here
//user cannot get to homepage if they are not signed in 
// and will redirect them to signin page
router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)) {// check requiresAuth is true or not
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, proceed to route
      next()
    } else {
      //no user signed in, redirect to log in
      next({
        name:'Login'
      })
    }

  } else{
    next()
  }
})

export default router

