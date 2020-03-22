<template>
  <section>
    <h1>News</h1>
    <div>
      <div v-for="news in newsArr" :key="news.heading">
        <h2>
          {{ news.heading }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  data: function() {
    return {
      newsArr: [
        { heading: 'corona!', article: 'article text 1' },
        { heading: 'corona!', article: 'article text 1' },
        { heading: 'corona!', article: 'article text 1' },
        { heading: 'corona!', article: 'article text 1' },
        { heading: 'corona!', article: 'article text 1' },
      ],
    };
  },
};
</script>

<style scoped>
section {
  border: 1px solid black;
  height: 100%;
  padding-bottom: 20rem;
}
</style>
