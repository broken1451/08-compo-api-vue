<template >
  <div>
    <h1>Lista de tareas de Thanos</h1>
    <!-- <h4>Tareas: {{$store.state.todo.length}}</h4> -->
    <h4>Tareas: {{ pending.length }}</h4>
    <hr />
    <!-- <h4>Todos: {{ all.length }}</h4>
    <h4>Completados: {{ completed.length }}</h4> -->
    <button
      :class="{ active: currentTab == 'all' }"
      @click="currentTab = 'all'"
    >
      Todos
    </button>
    <button
      :class="{ active: currentTab == 'pending' }"
      @click="currentTab = 'pending'"
    >
      Pendientes
    </button>
    <button
      :class="{ active: currentTab == 'completed' }"
      @click="currentTab = 'completed'"
    >
      Completados
    </button>
    <div class="div">
      <ul>
        <li
          v-for="todo in getTodoByTab"
          :key="todo.id"
          @dblclick="toggleTodo(todo.id)"
          :class="{ completed: todo.completed }"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <button @click="openModal">Crear TODO</button>
    <modal v-if="isOpen" @on:close="closeModal">
      <template v-slot:header>
        <h1>Nueva tarea</h1>
      </template>

      <template v-slot:body>
        <form >
          <input
            type="text"
            name="text"
            v-model="text"
            placeholder="Nueva tarea"
            id=""
          />
           <br>
        <br>
        <button @click.prevent="onSubmit(text)" type="submit">Crear tarea</button>
        </form>
      </template>
    </modal>

  </div>
</template>
<script>
import useTodo from "../composables/useTodo";
import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
  setup() {
    const {
      all,
      completed,
      currentTab,
      getTodoByTab,
      pending,
      toggleTodo,
      openModal,
      closeModal,
      isOpen,
      text,
      onSubmit
    } = useTodo();

    return {
      all,
      completed,
      currentTab,
      getTodoByTab,
      pending,
      toggleTodo,
      isOpen,
      openModal,
      closeModal,
      onSubmit,
      text
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