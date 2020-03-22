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
  beforeCreate: function() {
    console.log('instance not created yet');
    this.testLifecycle('beforeCreate');
  },
  created: function() {
    console.log('instance created');
    this.testLifecycle('created');
  },
  beforeUpdate: function() {
    console.log("our data has changed, we're about to re-render!");
    this.testLifecycle('beforeUpdate');
  },
  updated: function() {
    this.testLifecycle('updated');
  },
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
      this.testLifecycle('addArticle');
    },
    testLifecycle: function(fromFunc) {
      console.log(
        `how long after/before a lifecycle method will this run... let's see. ${fromFunc}`,
      );
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
