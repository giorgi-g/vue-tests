export default {
  namespaced: true,
  state: {
    users: []
  },

  mutations: {
    addUser(state, user) {
      state.users.push(user);
    }
  },

  actions: {
    addUser({ commit }, user) {
      commit("addUser", user);
    }
  }
};
