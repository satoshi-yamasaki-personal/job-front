import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Singup from "../components/singup.vue";
import Singin from "../components/singin.vue";
import Singout from "../components/singout.vue";
import Mypage from "../components/mypage.vue";
import "firebase/compat/auth";
// import * as firebase from "../firebase";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/singup",
    name: "singup",
    component: Singup
  },
  {
    path: "/singin",
    name: "singin",
    component: Singin
  },
  {
    path: "/singout",
    name: "singout",
    component: Singout
  },
  {
    path: "/mypage",
    name: "mypage",
    component: Mypage,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
//   if (requiresAuth && !(await firebase.getCurrentUser())) {
//     next({ path: "/singin", query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// });

// firebase.getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       unsubscribe()
//       resolve(user);
//     }, reject);
//   });
// };

export default router
