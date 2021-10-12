export default {
  namespaced: true,
  state: {
    movies: [],
    movie: null
  },

  getters: {
    getMovies(state) {
      return state.movies;
    },
    getMovie(state) {
      return state.movie;
    }
  },

  mutations: {
    addMovie(state, movie) {
      state.movies.push(movie);
      state.movie = movie;
    }
  },

  actions: {
    addMovie({ commit }, movie) {
      commit("addMovie", movie);
    }
  }
};
