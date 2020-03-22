<template>
  <div class="card">
    <div class="card-content">
      <h3>article heading: {{ article.heading }}</h3>
      <div class="card-content-summary">
        <p>{{ article.article }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    article: Object,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid black;
}
</style>
