import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

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
      component: () => import("./views/Welcome.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/room",
      name: "room",
      component: () => import("./views/Room.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/createroom",
      name: "createroom",
      component: () => import("./views/CreateRoom.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./views/Signup.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  //else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
