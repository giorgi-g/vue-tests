<template>
  <div>
    <ul class="">
      <UserListItem :key="index" v-for="(user, index) in users" :user="user" />
    </ul>
  </div>
</template>

<script>
import UserListItem from "./UserListItem";

export default {
  name: "UserList",
  components: {
    UserListItem
  },

  data() {
    return {
      users: [
        {
          name: "Tony",
          surname: "Stark",
          age: 48
        },
        {
          name: "Steve",
          surname: "Rogers",
          age: 103
        },
        {
          name: "Bucky",
          surname: "Barnes",
          age: 106
        }
      ]
    };
  }
};
</script>

<style scoped></style>
