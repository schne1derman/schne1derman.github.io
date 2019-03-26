<template>
  <div>
  <div id="app">
    <div id="nav">
    <h1>VIRTUAL PLATDORMS </h1>
    <b-navbar toggleable="md" type="dark" variant="danger">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand router-link to="/home">Home</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item router-link to="/createroom">Create Room</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item router-link to="/support">Support</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav right>
        <b-nav-item router-link to="/login">{{currentUser}}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
    <router-view/>
  </div>
</div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: #ed9a9a;
}
</style>
