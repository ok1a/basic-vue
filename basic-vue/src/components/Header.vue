<template>
  <div class="Header">
    <h1>Basic Vue</h1>
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
.Header {
  background-color: rgba(113, 66, 119, 0.25);
  margin: 1rem auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
h1 {
  color: rgb(235, 142, 142);
}
</style>
