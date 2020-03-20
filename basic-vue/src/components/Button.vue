<template>
  <div class="ButtonHolder">
    <button v-on:click="outputPathToConsole">
      Click
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    outputPathToConsole: function() {
      console.log(this.$route.path);
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.3rem 0.7rem;
  border: none;
  background-color: azure;
  color: rgba(30, 148, 142, 0.993);
  font-weight: 700;
  text-align: center;
  font-size: 1.3rem;
}
</style>
