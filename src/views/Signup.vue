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
      <b-form-group id="repasswordInput"
                    label="Re-enter Password:"
                    label-for="repasswordInput">
        <b-form-input id="repasswordInput"
                      type="password"
                      v-model="form.repassword"
                      required
                      placeholder="Re-Enter password">
        </b-form-input>
      </b-form-group>
      <b-form-group id="yearInput"
            label="What year are you?:"
            label-for="yearInput">
          <b-form-select id="yearInput"
              :options="years"
              required
              v-model="form.year">
          </b-form-select>
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
      form: {
        email: "",
        password: "",
        repassword: "",
        year: ""
      },
      years: [
        { text: "Select One", value: null },
        "Freshman",
        "Sophmore",
        "Junior",
        "Senior"
      ],
      show: true
    };
  },
  methods: {
    signUpAction: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          function(user) {
            alert("Your account has been created " - user);
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
