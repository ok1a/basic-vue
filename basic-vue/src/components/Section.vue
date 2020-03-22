<template>
  <section>
    <h1>News</h1>
    <div class="cards-holder">
      <Card
        v-for="(news, index) in newsArr"
        :key="index"
        v-bind:article="news"
      />
    </div>
    <button v-on:click="addArticle">add story</button>
  </section>
</template>

<script>
import Card from './Card';

export default {
  name: 'Section',
  data: function() {
    return {
      newsArr: [
        { heading: 'coronaaaaaaa', article: 'article text 1' },
        { heading: 'corona!', article: 'article text 2' },
        { heading: 'corona!', article: 'article text 3' },
        { heading: 'corona!', article: 'article text 4' },
        { heading: 'corona!', article: 'article text 5' },
        { heading: 'corona!', article: 'article text 6' },
      ],
    };
  },
  components: {
    Card,
  },
  methods: {
    addArticle: function() {
      this.newsArr.push({ heading: 'new story', article: 'new article text' });
    },
  },
};
</script>

<style scoped>
section {
  border: 1px solid black;
  height: 100%;
  padding-bottom: 20rem;
}

.cards-holder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
