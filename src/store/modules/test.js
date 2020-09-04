export default {
  state: {
    count: 0
  },
  mutations: {
    SET_COUNT(state, payload) {
      state.count = payload;
    }
  },
  actions: {
    setCount({ commit }, payload) {
      commit("SET_COUNT", payload);
    }
  }
};
