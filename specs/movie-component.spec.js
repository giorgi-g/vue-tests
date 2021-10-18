import Vuex from "vuex";
import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";

import MoviesList from "@/components/Movie/MoviesList";
import movie from "@/store/movie";

const localVue = createLocalVue();
Vue.use(Vuex);
localVue.use(Vuex);

const store = new Vuex.Store(movie);

test("Store is loaded", async () => {
  const wrapper = mount(MoviesList, {
    // localVue: localVue,
    store
  });

  const movieNameInput = wrapper.find("#movie-name");
  movieNameInput.element.value = "Infinity War";
  movieNameInput.trigger("input");

  const addMovieButton = wrapper.find("#add-movie");
  addMovieButton.trigger("click");

  // store.state.movies.push("Avengers 0");
  // await store.commit("addMovie", "Avengers 1");
  await store.dispatch("addMovie", "Avengers");

  expect(wrapper.vm.$data.movies).toEqual(["Infinity War", "Avengers"]);
});

test("Store works", async () => {
  const store = new Vuex.Store(movie);

  const wrapper = mount(MoviesList, {
    localVue,
    store
  });

  wrapper.vm.addMovie("Black Widow");
  await store.dispatch("addMovie", "Spiderman - Homecoming");
  // console.log("wrapper.vm.$data.movies", wrapper.vm.$data.movies);
  expect(wrapper.vm.$data.movies).toEqual([
    "Infinity War",
    "Avengers",
    "Black Widow",
    "Spiderman - Homecoming"
  ]);
});
