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
<br><br>E-mail:<br>
<input type = "email" id = "emailID"/>
<br>Body:<br>
<input type = "body" id = "bodyID"/>
<br><br>
<button @click= "sendemail" variant="danger"> Email to your Roomate</button>


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
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=6fa5c7c8-51dd-4a7f-b3e1-88dd3b9c6888",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1133");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 4 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=4bee8d8a-d932-4980-8ea0-7d86820d3fb6",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1142");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 3
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=616aa00a-b8c0-412c-8792-c4fa1f9d4d97",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1233");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 3
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=0dc75730-858d-4224-b8c4-57cb78ffd018",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1313");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 3
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=d96f3649-4509-4bec-b725-c25c8cbfbd83",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1323");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 4 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=711c145a-4ed2-4c60-9f52-7d3065aa6c52",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1341");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=4bee8d8a-d932-4980-8ea0-7d86820d3fb6",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1412");
      } else if (
        select.selectedIndex == 1 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=f82381eb-fdd5-4e9b-a635-f56b6110f33e",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 1431");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=f5021203-3573-4b4b-8760-1455ec8df7a1",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 3122");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=be359124-6cea-4fdd-98a9-d15add596fee",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 3131");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=b375442f-cefd-4807-a36c-2291fbdab867",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 3212");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=51f5ee3b-0db7-4b3e-90e7-2262b7c002c3",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 3231");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=01ab50a1-4ba6-4131-8a40-c3fb050b0d4a",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 3311");
      } else if (
        select.selectedIndex == 3 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=a24139df-a3b2-4765-a835-5d9ccfe642d7",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 3321");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 1 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=0af541f3-a647-45c0-a06c-9c75e97af9e2",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5122");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=520133ca-84f4-412b-9bb6-9076d86e5513",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5212");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 2 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 3
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=c54512cf-e5df-4176-a3c7-7606b042ac30",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5233");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=45e2f6c6-09d1-4f56-8f39-4c6b5a94ab49",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5311");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 1 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=4bee8d8a-d932-4980-8ea0-7d86820d3fb6",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5323");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 3 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 3
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=dc82b489-7740-498f-a864-52d5cf84affe",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5323");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 3 &&
        select4.selectedIndex == 1
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=e0198b3e-bc9b-4aec-b770-d5446c0b9b77",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5431");
      } else if (
        select.selectedIndex == 5 &&
        select2.selectedIndex == 4 &&
        select3.selectedIndex == 2 &&
        select4.selectedIndex == 2
      ) {
        window.open(
          "https://3dwarehouse.sketchup.com/embed.html?mid=622d8abc-a5ea-4609-8b8b-74b8afee1d3a",
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width= 1000, height=1000"
        );
        console.log("input needed 5422");
      } else if (select2.selectedIndex == 2) {
        alert("The bed cannot go here because the door is in the way");
      } else if (select2.selectedIndex == 4) {
        alert("Not Enough Room since the bed is middle vertical");
      } else if (select2.selectedIndex == 6) {
        alert("The bed cannot go here because the radiator is in the way");
      } else alert("Error, the objects will not fit in selected spaces");
      var x = 12;
      console.log(x);
    },
    sendemail: function() {
      var email = document.getElementById("emailID").value;
      //var subject = "Link to PlatDorm Room";
      var body = document.getElementById("bodyID").value;
      //  window.location.href(
      //    "mailto:" + email + "?subject=" + subject + "&body=" + body + "  " + x
      //  );
      var link =
        "mailto:" +
        email +
        "?subject=" +
        "A note from Platdorm Room" +
        "&body=" +
        body +
        "                   " +
        "Bed position: ";
      document.getElementById("a").options[
        document.getElementById("a").selectedIndex
      ].value +
        ", " +
        "Desk Position: " +
        document.getElementById("b").options[
          document.getElementById("b").selectedIndex
        ].value +
        ", " +
        "Dresser Position: " +
        document.getElementById("c").options[
          document.getElementById("c").selectedIndex
        ].value +
        ", " +
        "Closet Position: " +
        document.getElementById("d").options[
          document.getElementById("d").selectedIndex
        ].value;
      window.location.href = link;
    } //function
  } //method
};
</script>
