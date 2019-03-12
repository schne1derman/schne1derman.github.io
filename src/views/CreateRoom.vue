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
    <b-embed type="iframe"
             aspect="16by9"
             src="https://3dwarehouse.sketchup.com/embed.html?mid=edaac701-f360-46ca-a9c4-56d30bef1928"
             allowfullscreen
    ></b-embed>
  </div>
</template>

<style>
body {
  background-color: #ed9a9a;
}
</style>
