<template>
  <li>
    <strong
      >{{ user.name }} {{ user.surname }} - {{ user.age }} year(s) old</strong
    >
  </li>
</template>

<script>
export default {
  name: "UserListItem",
  props: {
    user: {
      type: Object,
      required: false,
      default: {
        name: "Giorgi",
        surname: "Gumburashvili",
        age: 25
      }
    }
  }
};
</script>
