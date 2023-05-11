<template>
<div class="background">
<div class="text-center mt-3 mb-3" style="margin-bottom:0">
  <p>Copyright {{ currentDate() }}</p>
</div>
</div>
</template>

<script>
export default {
  name: 'Comp4',
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    }
  }
}
</script>

<style scoped>
.background {
  background: #9cfdae;
}
</style>