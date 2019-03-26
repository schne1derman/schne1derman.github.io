import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store";
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

Vue.config.productionTip = false;

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

let app = "";

/****User status****/

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

/*****database
const database = firebase.initializeApp(config);
database.signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    store.commit("setCurrentUser", firebase.auth().currentUser);

    return true;
  } catch (error) {
    return error;
  }
};
export default database;****/
