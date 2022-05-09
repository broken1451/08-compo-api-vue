<template>
  <div>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
      <input
        type="number"
        name=""
        v-model="pokemonId"
        placeholder="Numero pokemon"
        id=""
        ref="txtSearchId"
      />
    </form>
    <br />
    <span>Presione enter para buscar</span>
    <!-- {{$router}} -->
  </div>
</template>
<script>
import { ref, onActivated} from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const pokemonId = ref(1);
    const txtSearchId = ref();

    // console.log(txtSearchId.value);
    onActivated(()=>{
        // txtSearchId.value.focus();
        txtSearchId.value.select();
    });

    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        console.log("pokemon id ", pokemonId.value);
        router.push({name:'pokemon-id',params:{id:pokemonId.value}});
      },
    };
  },
};
</script>
<style >
</style>