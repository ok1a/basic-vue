<template>
  <div class="Page">
    <h3>On a page!</h3>
    <h4>
      Which page?
      <span>
        {{ pageName }}
      </span>
    </h4>
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
h3,
h4 {
  color: rgb(223, 223, 213);
}
span {
  color: pink;
}
#HomePage .Page h4 span {
  color: yellow;
}
</style>
