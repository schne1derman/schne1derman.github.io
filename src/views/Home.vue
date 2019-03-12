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
  <b-container>
    <b-carousel id="carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="4000"
                img-height="2020"
                v-model="slide">
                <b-carousel-slide caption="First slide"
                                  text="this is a duck."
                                  img-src= "../src/assets/pictures/Berg_Hall.jpg">
                </b-carousel-slide>
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                    ut lacus vel interdum.
                  </p>
                </b-carousel-slide>
      </b-carousel>
</b-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  }
};
</script>

<style>
body {
  background-color: #ed9a9a;
}
</style>
