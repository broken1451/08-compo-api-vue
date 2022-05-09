import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const currentTab = ref("all");
  const store = useStore();
  const pending = computed(() => store.getters["pendingTodo"]);
  const all = computed(() => store.getters["allTodos"]);
  const completed = computed(() => store.getters["completeTodos"]);
  const getTodoByTab = computed(() =>
    store.getters["getTodoByTab"](currentTab.value)
  );
  const isOpen = ref(false);
  const text = ref("");

  // commit para mutaciones y dispatch para acciones
  const toggleTodo = (id) => {
    // console.log({id});
    store.commit("toggleTodo", id);
  };

  return {
    all,
    completed,
    currentTab,
    getTodoByTab,
    pending,
    toggleTodo,
    isOpen,
    openModal: () => (isOpen.value = true),
    closeModal: () => (isOpen.value = false),
    text,
    onSubmit: (texto) => {
      console.log("text ===>> ", texto);
      store.commit("createTodo", texto);
      isOpen.value = false;
      text.value = "";
    },
  };
};

export default useTodos;
