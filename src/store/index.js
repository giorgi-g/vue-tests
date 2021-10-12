import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import movie from "@/store/movie";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movie
  },
  plugins: debug ? [createLogger()] : []
});
