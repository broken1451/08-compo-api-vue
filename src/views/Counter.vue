<template >
  <div>
    <h1>Counter view</h1>
    <h3>{{ counter }}</h3>
    <button @click="increment">+1</button>
    <button @click="decrese">-1</button>
  </div>
</template>
<script>
// import { ref } from "vue";
import useCounter from "../composables/useCounter";
export default {
  name: "Counter",
  props: {},
  emits: [], // lo q emite el componente
  setup() {
    const { counter, increment, decrese } = useCounter();
    return { counter, increment, decrese }
    // const counter = ref(6);

    // // const increment = () => {
    // //   counter.value++;
    // // };
    // // const decrese = () => {
    // //   counter.value--;
    // // };

    // return {
    //   counter,

    //   increment: () => counter.value++,
    //   decrese: () => counter.value--,
    // }; // q sea visible en el template
  },
};
</script>
<style >
</style>