<template>
  <b-container>
    <b-carousel id="carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide">
                <b-carousel-slide caption="First slide"
                                  text="this is a duck."
                                  img-src= "../src/assets/pictures/Tusant.jpg">
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
