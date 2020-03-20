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
  color: red;
  font-weight: 700;
}
</style>
