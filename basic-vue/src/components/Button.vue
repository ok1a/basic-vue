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
      //   console.log('Testing');
      console.log(this.$route.path);
    },
  },
};
</script>
