<template>
  <div class="Page">
    <h3>On a page!</h3>
    <h4>Which page? {{ pageName }}</h4>
    <Button />
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Page',
  props: {
    pageName: String,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.h4 {
  color: yellow;
}
</style>
