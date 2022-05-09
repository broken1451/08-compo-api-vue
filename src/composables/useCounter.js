import { ref } from "vue";

const useCounter = (initValue = 5) => {
  const counter = ref(initValue);

  // const increment = () => {
  //   counter.value++;
  // };
  // const decrese = () => {
  //   counter.value--;
  // };

  return {
    counter,
    increment: () => counter.value++,
    decrese: () => counter.value--,
  }; // q sea visible en el template
};


export default useCounter;