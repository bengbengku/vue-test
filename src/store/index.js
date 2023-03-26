import { createStore } from "vuex";
import { getBlogPosts, getPostById } from "../api/posts.api";

export default createStore({
  state: {
    posts: [],
    post: null,
    loading: true,
    isUpdate: false,
  },
  getters: {
    getPosts: (state) => state.users,
    getLoading: (state) => state.loading,
  },
  actions: {
    async getPosts({ commit }) {
      commit("SET_LOADING", true);
      const allPosts = await getBlogPosts();
      commit("SET_POSTS", allPosts);
      commit("SET_LOADING", false);
    },
    async getPostId({ commit }, postId) {
      const post = await getPostById(postId);
      commit("SET_POST_ID", post);
    },
    isUpdatedCheckbox({ commit }, isUpdate) {
      commit("SET_ISUPDATE_CHECKBOX", isUpdate);
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_POST_ID(state, post) {
      state.post = post;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ISUPDATE_CHECKBOX(state, isUpdate) {
      state.isUpdate = isUpdate;
    },
  },
});
