<template>
  <div>
    <!--    <input type="text" v-model="movieName" />-->

    <!--    <button type="button" @click="addMovie(movieName)">Add a Movie</button>-->

    <ul>
      <li v-for="(item, index) of movies" :key="`movie-${index}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MoviesList",
  data() {
    return {
      ...this.$store.state,
      movieName: ""
    };
  },
  methods: {
    ...mapActions(["addMovie"])
  }
};
</script>

<style scoped></style>
