<template>
<form class="container vh-100">
  <div class="form-group bg-light">
    <label for="firstNameInput">First Name</label>
    <input type="text" class="form-control" id="firstNameInput" placeholder="FirstName">
    <label for="lastNameInput">Last Name</label>
    <input type="text" class="form-control" id="lastNameInput" placeholder="LastName">
  </div>
  <div class="form-group bg-light">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group bg-light">
    <label for="commentSection">Comment Area</label>
    <textarea class="form-control" id="commentSection" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-light">Submit</button>
</form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>