<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ iroman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman">Cambiar ironan</button>
    <button @click="changeHulk">Cambiar hulk</button>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
// @ is an alias to /src
// reactive solo funciona con objetos y no con primitivos(booleanos,string,numero)
export default {
  name: "Home",

  setup() {
    const iroman = ref({ name: "tony", age: 50 });
    const hulk = reactive({ name: "bruce", age: 50 });

    const ironmanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
      // ironmanIsAlive = reactive(!ironmanIsAlive);
    };

    return {
      iroman,
      hulk,
      changeIronman: () => {
        // iroman.value = {}
        iroman.value.name = "Tony Stark";
        iroman.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 55;
      },
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,
    };
  },
};
</script>
