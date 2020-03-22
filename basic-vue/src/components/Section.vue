<template>
  <section>
    <h1>News</h1>
    <div>
      <!-- <div v-for="(news, index) in newsArr" :key="index"> -->
      <!-- <h2>
          {{ news.heading }}
        </h2>
        <p>{{ news.article }}</p> -->
      <Card
        v-for="(news, index) in newsArr"
        :key="index"
        v-bind:article="news"
      />
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
import Card from './Card';

export default {
  name: 'Section',
  data: function() {
    return {
      newsArr: [
        { heading: 'corona!', article: 'article text 1' },
        { heading: 'corona!', article: 'article text 2' },
        { heading: 'corona!', article: 'article text 3' },
        { heading: 'corona!', article: 'article text 4' },
        { heading: 'corona!', article: 'article text 5' },
      ],
    };
  },
  components: {
    Card,
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
