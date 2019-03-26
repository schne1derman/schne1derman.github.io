import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Welcome from "@/views/Welcome.vue";
import Room from "@/views/Room.vue";
import CreateRoom from "@/views/CreateRoom.vue";
import Signup from "@/views/Signup.vue";
import Support from "@/views/Support.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home
      //meta: {
      //  requiresAuth: true
      //}
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/room",
      name: "room",
      component: Room
      //  meta: {
      //    requiresAuth: true
      //  }
    },
    {
      path: "/createroom",
      name: "createroom",
      component: CreateRoom
      //  meta: {
      //    requiresAuth: true
      //  }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/support",
      name: "support",
      component: Support
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
