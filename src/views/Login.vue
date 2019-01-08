<template>
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
      <b-button type="submit" variant="primary">Login</b-button>
      <br><br>
      <b-link :to="'Signup'">Not a user yet? Join Here!</b-link>
  </b-form>
  </b-col>
  </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style>
body {
  background-color: #ff7272;
}
</style>
