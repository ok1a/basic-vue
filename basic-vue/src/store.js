import Vue from 'vue';
import Vuex from 'vuex';
import api from './api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsArr: [
      {
        title: 'not from API title 1',
        description: 'not from API description 1',
      },
      {
        title: 'not from API title 2',
        description: 'not from API description 2',
      },
      {
        title: 'not from API title 3',
        description: 'not from API description 3',
      },
      {
        title: 'not from API title 4',
        description: 'not from API description 4',
      },
      {
        title: 'not from API title 5',
        description: 'not from API description 5',
      },
    ],
  },
  getters: {
    getNewsStories: state => {
      return state.newsArr;
    },
  },
  mutations: {
    addStory(state, payload) {
      state.newsArr = [...state.newsArr, payload];
    },
    receiveArticlesFromAPI(state, payload) {
      state.newsArr = [...state.newsArr, ...payload];
    },
  },
  actions: {
    GET_POSTS: async function(context) {
      let { data } = await api.getPostsFromAPI();
      context.commit('receiveArticlesFromAPI', data.articles);
    },
  },
});
