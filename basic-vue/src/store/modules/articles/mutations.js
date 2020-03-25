export const mutations = {
  ADD_STORY(state, new_story) {
    state.newsArr = [...state.newsArr, new_story];
  },

  RECEIVE_STORIES_FROM_API(state, payload) {
    state.newsArr = [...state.newsArr, ...payload];
  },
};

export default mutations;
