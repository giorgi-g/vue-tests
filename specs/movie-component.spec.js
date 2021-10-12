import Vuex from "vuex";
import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";

import MoviesList from "@/components/Movie/MoviesList";
import movie from "@/store/movie";

// const VueWithVuex = createLocalVue();
Vue.use(Vuex);
// VueWithVuex.use(Vuex);

const store = new Vuex.Store(movie);

test("Store is loaded", async () => {
  const wrapper = mount(MoviesList, {
    // localVue: VueWithVuex,
    store
  });

  store.state.movies.push("Avengers");

  expect(wrapper.vm.$data.movies).toEqual(["Avengers"]);
});

test("Store works", async () => {
  const store = new Vuex.Store(movie);

  const wrapper = mount(MoviesList, {
    // localVue: VueWithVuex,
    store
  });

  wrapper.vm.addMovie("Infinity War");
  // await store.dispatch("addMovie", "Infinity War");
  // console.log("wrapper.vm.$data.movies", wrapper.vm.$data.movies);
  expect(wrapper.vm.$data.movies).toEqual(["Avengers", "Infinity War"]);
});
