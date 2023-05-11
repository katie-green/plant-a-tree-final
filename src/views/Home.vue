<template>
  <div>
    <img class="img-fluid" alt="beautiful tree" src="https://tse3.mm.bing.net/th?id=OIP.37pAteYwW-ju4CxyAlCIcgHaEn&pid=Api&P=0https://tse3.mm.bing.net/th?id=OIP.37pAteYwW-ju4CxyAlCIcgHaEn&pid=Api&P=0"/>
    <Comp2 />
    <Comp3 />
    <Comp4 />
  </div>
</template>

<script>
import Comp2 from '../components/Comp2.vue'
import Comp3 from '../components/Comp3.vue'
import Comp4 from '../components/Comp4.vue'


export default {
  name: 'Home',
  components: {
    Comp2,
    Comp3,
    Comp4
  }
}
</script>