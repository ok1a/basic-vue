import api from '../../../api/index';

export const actions = {
  getPostsFromAPI: async ({ commit }) => {
    let { data } = await api.getPostsFromAPI();

    commit('RECEIVE_STORIES_FROM_API', data.articles);
  },
  addStory: ({ commit }, new_story) => {
    commit('ADD_STORY', new_story);
  },
};

export default actions;
