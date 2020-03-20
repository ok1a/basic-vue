<template>
  <div class="Page">
    <h3>On a page!</h3>
    <h4>Which page? {{ pageName }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    pageName: String,
  },
};
</script>

<style scoped>
.h4 {
  color: yellow;
}
</style>
