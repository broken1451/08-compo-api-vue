<template >
  <div>
    <ul>
      <!-- <li v-for="users in users" :key="users.id"> -->
        <!-- <h5>Hola mundo</h5> -->
        <!-- <h4>{{ first_name }}</h4>
        <h6>{{ email }}</h6> -->
      <!-- </li> -->
      <!-- :user='users' se expone el user por cada iteracion -->
       <slot v-for="users in users" :key="users.id" :user='users'></slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>