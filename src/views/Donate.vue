<template>
  <h1 class="display-4 text-light mt-2 mb-4"><u>Donate</u></h1>
  <div>
    <DonateForm />
  </div>
  <div>
    <Slideshow />
  </div>
  <Comp4 />
</template>

<script>
import DonateForm from '../components/DonateForm.vue'
import Slideshow from '../components/Slideshow.vue'
import Comp4 from '../components/Comp4.vue'

  export default {
    name: 'Donate',
  components: {
    DonateForm,
    Slideshow,
    Comp4
  }
  }
</script>