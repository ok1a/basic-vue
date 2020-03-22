import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsArr: [
      { heading: 'coronaaaaaaa', article: 'article text 1' },
      { heading: 'corona!', article: 'article text 2' },
      { heading: 'corona!', article: 'article text 3' },
      { heading: 'corona!', article: 'article text 4' },
      { heading: 'corona!', article: 'article text 5' },
      { heading: 'corona!', article: 'article text 6' },
    ],
  },
  getters: {
    getNewsStories: state => {
      return state.newsArr;
    },
  },
  mutations: {
    addStory(state, payload) {
      //   console.log(payload);
      //   return {
      //     ...state,
      //     newsArr: [...state.newsArr, payload],
      //   };
      state.newsArr = [...state.newsArr, payload];
    },
  },
});
