<template>
  <div>
    <h1>Users List</h1>
    <input type="text" name="name" id="name" v-model="user.name" />
    <input type="text" name="surname" id="surname" v-model="user.surname" />
    <input
      type="number"
      name="age"
      id="age"
      v-model="user.age"
      :min="minAge"
      :max="maxAge"
    />

    <button id="add-user" @click="addToUsersList">Add User</button>
    <ul class="users">
      <li v-for="(user, index) in users" :key="`user-${index}`">
        {{ user.name }} {{ user.surname }} ({{ user.age }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      users: [],
      minAge: 18,
      maxAge: 105,
      user: {
        name: null,
        surname: null,
        age: 0
      }
    };
  },

  methods: {
    addToUsersList() {
      if (this.user.name == null) return;

      if (this.user.surname == null) return;

      if (
        this.user.age === 0 ||
        this.user.age < this.minAge ||
        this.user.age > this.maxAge
      )
        return;

      this.users.push(this.user);
      this.user.name = null;
      this.user.surname = null;
      this.user.age = 0;
    }
  }
};
</script>
