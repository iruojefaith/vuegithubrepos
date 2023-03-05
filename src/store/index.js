import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    repos: null,
    loading: false,
    error: "",
  },
  mutations: {
    setRepos(state, repos) {
      state.repos = repos;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    getRepos: async ({ commit }, { username }) => {
      commit("setLoading", true);
      commit("setError", "");

      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        commit("setRepos", data);
      } catch (error) {
        switch (error.response.status) {
          case 404:
            commit("setError", "Couldn't find this GitHub user");
            break;
          case 403:
            commit(
              "setError",
              "You don't have permission to view this user's repos"
            );
            break;
          case 401:
            commit(
              "setError",
              "You need to be authorized to view this user's repos"
            );
            break;
          default:
            commit("setError", "Something went wrong");
            break;
        }
      } finally {
        commit("setLoading", false);
      }
    },
  },
});
