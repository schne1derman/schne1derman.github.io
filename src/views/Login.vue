<template>
  <div id="nav">
  <h1>VIRTUAL PLATDORMS </h1>
  <b-navbar toggleable="md" type="dark" variant="danger">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand :to="'home'">Home</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item :to="'/createroom'">Create Room</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search for Room"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
        <b-nav-item :to="'/login'">Login</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
  <b-container class="pt-5 login">
    <b-row class="justify-content-center">
    <b-col cols="8" class="border border-danger bg-white">
    <b-form @submit= "onSubmit">
      <b-form-group id="emailInput"
                    label="Email address:"
                    label-for="emailInput">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordInput"
                    label="Password:"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button @click= "loginAction" type="button" variant="success">Login</b-button>
      <br><br>
      <b-link :to="'Signup'">Not a user yet? Join Here!</b-link>
  </b-form>
  </b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginAction: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          function(user) {
            alert("Well done you are now connected " + user);
          },
          function(err) {
            alert("Something went wrong.." + err.message);
          }
        );
    }
  }
};
</script>

<style>
body {
  background-color: #ed9a9a;
}
</style>
