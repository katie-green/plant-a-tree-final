<template>
<div>
  <h1 class="display-4 mt-2 mb-4 text-light"><u>Contact Us</u></h1>
  <div>
    <ContactForm />
  </div>
  <Comp4 />
</div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import Comp4 from '../components/Comp4.vue'

  export default {
    name: 'Contact',
    components: {
    ContactForm,
    Comp4
  }
  }
</script>
