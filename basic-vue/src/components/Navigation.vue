<template>
  <div class="Navigation">
    <router-link to="/" class="navLink">Index</router-link>
    <router-link to="/home" class="navLink">Home</router-link>
    <router-link to="/news" class="navLink">News</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
.Navigation {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

.navLink {
  text-decoration: none;
  color: aqua;
}
</style>
