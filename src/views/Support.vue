<template>
<form action="mailto:maschneider31@gmail.com" method="post" enctype="text/plain">
<select name="issueList" form="issueform">
  <option value="password">Request Password Reset</option>
  <option value="room">Error with Room</option>
  <option value="other">Other</option>
</select>

<br>E-mail:<br>
<input type="text" name="mail"><br>
Comment:<br>
<input type="text" name="comment" size="50"><br><br>
<input type="submit" value="Send">
<input type="reset" value="Reset">
</form>
</template>

<style>
body {
  background-color: #ed9a9a;
}
</style>
