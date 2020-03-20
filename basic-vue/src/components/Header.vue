<template>
  <div class="Header">
    <h1>Header Title</h1>
    <Navigation />
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Header',
  components: { Navigation },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
