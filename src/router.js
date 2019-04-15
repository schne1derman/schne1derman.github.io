import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Welcome from "@/views/Welcome.vue";
import CreateRoom from "@/views/CreateRoom.vue";
import Signup from "@/views/Signup.vue";
import Support from "@/views/Support.vue";
import SetupRoom from "@/views/SetupRoom.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "welcome",
      component: () => import("./views/Welcome.vue")
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/createroom",
      name: "createroom",
      component: CreateRoom,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/support",
      name: "support",
      component: Support,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/setuproom",
      name: "setuproom",
      component: SetupRoom
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
