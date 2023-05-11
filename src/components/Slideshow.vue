<template>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2012/06/09/13/59/mountain-49878__480.jpg" alt="rocky mountain rainforest">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2014/07/05/08/55/waterfall-384663__480.jpg" alt="rainforest with waterfall">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2017/01/11/18/31/toucan-1972557__480.jpg" alt="toucan in tree">
    </div>
        <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/12/07/19/56/animals-1081294__480.jpg" alt="cute fruit bat hanging upsidedown">
    </div>
        <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/11/24/19/11/animals-1060608__480.jpg" alt="rainbow colored chameleon">
    </div>
        <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2017/09/17/20/35/sloth-2759724__480.jpg" alt="cute sloth in tree">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
  export default {
    name: 'Slideshow'
  }
</script>