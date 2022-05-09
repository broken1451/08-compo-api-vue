<template >
  <div>
    <h1>Lista de tareas de Thanos</h1>
    <!-- <h4>Tareas: {{$store.state.todo.length}}</h4> -->
    <h4>Tareas: {{ pending.length }}</h4>
    <hr />
    <!-- <h4>Todos: {{ all.length }}</h4>
    <h4>Completados: {{ completed.length }}</h4> -->
    <button :class="{ 'active': currentTab == 'all' }" @click="currentTab ='all' ">Todos</button>
    <button :class="{ 'active': currentTab == 'pending' }" @click="currentTab ='pending'">Pendientes</button>
    <button :class="{ 'active': currentTab == 'completed' }" @click="currentTab ='completed'">Completados</button>
    <div class="div">
      <ul>
        <li
          v-for="todo in getTodoByTab"
          :key="todo.id"
          @dblclick="toggleTodo(todo.id)"
          :class="{ completed: todo.completed }">
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const currentTab = ref("all");
    const store = useStore();
    const pending = computed(() => store.getters["pendingTodo"]);
    const all = computed(() => store.getters["allTodos"]);
    const completed = computed(() => store.getters["completeTodos"]);
    const getTodoByTab = computed(() => store.getters["getTodoByTab"](currentTab.value));

    // commit para mutaciones y dispatch para acciones
    const toggleTodo = (id) =>{
        // console.log({id});
        store.commit('toggleTodo', id)
    }

    return {
      all,
      completed,
      currentTab,
      getTodoByTab,
      pending,
      toggleTodo
    };
  },
};
</script>
<style scoped>
.div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>