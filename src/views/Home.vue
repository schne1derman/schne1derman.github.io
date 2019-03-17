<template>
  <div>
  <b-carousel
    id="carousel1"
    style="text-shadow: 1px 1px 2px #333;"
    controls
    indicators
    background="#ababab"
    :interval="4000"
    img-width="100"
    img-height="50"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide
      caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=52"
    />

    <!-- Slides with custom text -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      <h1>Hello world!</h1>
    </b-carousel-slide>

    <!-- Slides with image only -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <b-carousel-slide>
      <img
        slot="img"
        class="d-block img-fluid w-100"
        width="100"
        height="50"
        src="https://picsum.photos/1024/480/?image=55"
        alt="image slot"
      />
    </b-carousel-slide>

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
      </p>
    </b-carousel-slide>
  </b-carousel>
      <br>
      <p>Students moving into dorms at Sacred Heart University do not entirely know what their dorm room will look like before they move in. This leads to a series of problems on move in day.  First students do not know what amenities the room offers already and might move in without bringing something from home because they thought the room would have it already. Alternatively, there are students that bring too much stuff with them on move in day.  They might bring a fan along with their roommate. Now the students are left with too many fans and items are just left to clutter the room. Lastly, there is little to no communication between students on what each person is bringing to the room. Thus items are left out and students are forced to find their local Target to try and get something to fit their needs.</p>
</div>
</template>

<style>
body {
  background-color: #ed9a9a;
}
</style>
