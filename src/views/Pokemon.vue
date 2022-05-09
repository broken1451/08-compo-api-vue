<template >
  <div>
    <h1 v-if="!pokemon && !errMsg">Buscando...</h1>
    <h1 v-else-if="errMsg">{{ errMsg }}</h1>
    <div v-else>
      <h3>{{ pokemon.name }}</h3>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" srcset="" />
      <br />
      <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
    </div>
  </div>
</template>
<script>
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { watch } from "vue";
import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const route = useRoute();
    const { pokemon, isLoading, errMsg, searchPokemon } = usePokemon(
      route.params.id
    );
    // console.log(route);

    // estar pendiente de los cambio con el watch con el composition API
    watch(
      () => route.params.id,
      (newValue, oldValue) => {
        console.log({ newValue, oldValue });
        searchPokemon(route.params.id);
      }
    );

    onBeforeRouteLeave(() => {
      console.log("onBeforeRouteLeave");
      const answer = window.confirm("Esta seguro que desea salir?");
      if (!answer) return false; // false, bloquea la salida
    });

    return { pokemon, isLoading, errMsg };
  },
};
</script>
