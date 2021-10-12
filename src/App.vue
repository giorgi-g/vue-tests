<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <!--    <MoviesList />-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MoviesList from "@/components/Movie/MoviesList";

export default {
  name: "App",
  components: {
    MoviesList,
    HelloWorld
  }
};
</script>
