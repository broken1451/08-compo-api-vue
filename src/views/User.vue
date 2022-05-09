<template >
  <div>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>
    <div id="users" v-if="users.length > 0">
      <user-list :users="users" v-slot="{ user }">
        <h5>{{ user.first_name }} {{ user.last_name }}</h5>
        <span>{{ user.email }}</span>
      </user-list>
    </div>
    <button @click="prv">atras</button>
    <button @click="next">siguiente</button>
    <span>Pagina: {{ currentPage }}</span>
  </div>
</template>
<script>
import useUsers from "../composables/useUsers";
import UserList from "../components/Userlist.vue";
export default {
  components: {
    UserList,
  },
  setup() {
    const { users, isLoading, currentPage, errorMessage, next, prv } =
      useUsers();
    return { users, isLoading, currentPage, errorMessage, next, prv };
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div#users {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 250px;
}
</style>