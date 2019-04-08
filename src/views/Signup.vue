<template>
  <b-container class="pt-5 signup">
    <b-row class="justify-content-center">
    <b-col cols="8" class="border border-danger bg-white">
    <b-form @submit= "SignUp">
      <b-form-group id="emailInput"
                    label="Email address:"
                    label-for="emailInput">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="email"
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordInput"
                    label="Password:"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="password"
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-button @click="signUpAction" type="button" variant="success" >Signup</b-button>
      <br><br>
    </b-form>
  </b-col>
  </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUpAction: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created", console.log(user));
          },
          function(err) {
            alert("Something went wrong.. " + err.message);
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
