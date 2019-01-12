import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

var config = {
  apiKey: "AIzaSyA4owKAzDsdyW3mAxJJp1HGWeAYb6pEK2c",
  authDomain: "virtual-platdorms.firebaseapp.com",
  databaseURL: "https://virtual-platdorms.firebaseio.com",
  projectId: "virtual-platdorms",
  storageBucket: "virtual-platdorms.appspot.com",
  messagingSenderId: "416051239684"
};

firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
