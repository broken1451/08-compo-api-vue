<template >
  <div>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>
    <div id="users" v-if="users.length > 0">
      <ul>
        <li v-for="(users) in users" :key="users.id">
          <h4>{{users.first_name}}</h4>
          <h6>{{users.email}}</h6>
        </li>
      </ul>
    </div>
    <button @click="prv">atras</button>
    <button @click="next">siguiente</button>
    <span>Pagina: {{currentPage}}</span>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const users = ref([]);
    const isLoading = ref(true);
    const currentPage = ref(1);
    const errorMessage = ref();

    const getUser = async (page = 1) => {
      if (page <= 0) {
        page = 1;
        isLoading.value = true;
      }

      //   const resp = await axios.get(`https://reqres.in/api/users?page=${page}`);
      const { data } = await axios.get(`https://reqres.in/api/users`, {
        params: {
          page,
        },
      });
      if (data.data.length > 0) {
        users.value = data.data;
        isLoading.value = false;
        currentPage.value = page;
        errorMessage.value = null;
      } else if (currentPage.value > 0) {
        errorMessage.value = "no hay mas registros";
      }
      isLoading.value = false;
    };

    getUser(1);
    

    return {
      users,
      isLoading,
      currentPage,
      errorMessage,
      next: () => getUser(currentPage.value + 1),
      prv: () => getUser(currentPage.value - 1),
    };
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