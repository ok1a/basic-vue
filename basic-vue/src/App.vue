<template>
  <div id="app">
    <Header />
    <router-view class="view" />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
body {
  background-color: #2c3e50;
  opacity: 0.8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  width: 70%;
  margin: 0 auto;
}
</style>
