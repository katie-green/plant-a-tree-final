<template>
  <div class="links">
    <nav class="navbar navbar-expand-sm bg-success navbar-dark">
    <a class="navbar-brand" href="#">Save the Earth</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <RouterLink  class="nav-link" to="/" active-class="active">Home</RouterLink>
      <RouterLink  class="nav-link" to="/Donate" active-class="active">Donate</RouterLink>
      <RouterLink  class="nav-link" to="/Contact" active-class="active">Contact</RouterLink>
    </div>  
    </nav>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
}
</style>
