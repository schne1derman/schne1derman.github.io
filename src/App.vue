<template>
  <div>
  <div id="app">
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
</style>
