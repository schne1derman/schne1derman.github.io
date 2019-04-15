<template>
<div class="setup">
<h1>Bed</h1>
<select id='a'>
    <option>Please Select One</option>
    <option>Left Corner Horizontal</option>
    <option>Left Corner Vertical</option>
    <option>Middle Horizontal</option>
    <option>Middle Vertical</option>
    <option>Right Corner Horizontal</option>
    <option>Right Corner Vertical</option>
</select><br>
  <h1>Desk</h1>
<select id='b'>
    <option>Please Select One</option>
    <option>Under Bed</option>
    <option>Left Corner</option>
    <option>Right Corner</option>
    <option>Middle</option>
</select><br>
  <h1>Dresser</h1>
<select id='c'>
    <option>Please Select One</option>
    <option>Under Bed</option>
    <option>Left Corner</option>
    <option>Right Corner</option>
    <option>Middle</option>
</select><br>
  <h1>Closet</h1>
<select id='d'>
    <option>Please Select One</option>
    <option>Left Corner</option>
    <option>Right Corner</option>
    <option>Middle</option>
</select><br><br>
<button @click="setup" variant="primary">Sign Up</button>


</div>
</template>

<script>
export default {
  name: "setup",
  methods: {
    setup: function() {
      var select = document.getElementById("a");
      // return the index of the selected option
      console.log(select.selectedIndex); // 1
      // return the value of the selected option
      console.log(select.options[select.selectedIndex].value);

      var select2 = document.getElementById("b");
      // return the index of the selected option
      console.log(select2.selectedIndex); // 2
      // return the value of the selected option
      console.log(select2.options[select2.selectedIndex].value);

      var select3 = document.getElementById("c");
      // return the index of the selected option
      console.log(select3.selectedIndex); // 3
      // return the value of the selected option
      console.log(select3.options[select3.selectedIndex].value);

      var select4 = document.getElementById("d");
      // return the index of the selected option
      console.log(select4.selectedIndex); // 4
      // return the value of the selected option
      console.log(select4.options[select4.selectedIndex].value);

      if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 3
      ) {
        console.log("input needed 1133");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 4 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 1142");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 3
      ) {
        console.log("input needed 1233");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 3
      ) {
        console.log("input needed 1313");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 3
      ) {
        console.log("input needed 1323");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 4 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 1341");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 1412");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 1431");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 3122");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 3131");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 3212");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 3231");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 3311");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 3321");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 5122");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 5212");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 3
      ) {
        console.log("input needed 5233");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 5311");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 5323");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 3
      ) {
        console.log("input needed 5323");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        console.log("input needed 5431");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 2
      ) {
        console.log("input needed 5422");
      } else if (select2.selectedIndex == 2) {
        console.log("Door is in the way");
      } else if (select2.selectedIndex == 4) {
        console.log("Not Enough Room");
      } else if (select2.selectedIndex == 6) {
        console.log("Radiator is in the way");
      } else console.log("Error, the objects will not fit in selected spaces");
    } //function ending
  } //method ending
};
</script>
