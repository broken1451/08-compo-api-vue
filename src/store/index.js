import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todo: [
      {
        id: "1",
        text: "Recolectar las piedras del infinito",
        completed: false,
      },
      { id: "2", text: "Piedra del alma", completed: true },
      { id: "3", text: "Piedra de poder", completed: true },
      { id: "4", text: "Piedra de realidad", completed: false },
      { id: "5", text: "Conseguir nuevos secuases", completed: false },
    ],
  },
  mutations: {
    toggleTodo: (state, id) => {
      const todoIdx = state.todo.findIndex(i => i.id == id);
      console.log({ todoIdx });
      state.todo[todoIdx].completed = !state.todo[todoIdx].completed;
    },
    createTodo: (state, text='') => {
      if (text.length <= 1 ) {
        return
      }
      state.todo.push({
        id: uuidv4(),
        completed: false,
        text
      });
    },

  },
  actions: {},
  getters: {
    // rootState es el state cuando se crea createStore
    pendingTodo: (state, getters, rootState) => {
      console.log({ state, getters, rootState });
      return state.todo.filter((t) => !t.completed);
    },
    allTodos: (state, getters, rootState) => {
      return state.todo;
    },
    completeTodos: (state, getters, rootState) => {
      return state.todo.filter((t) => t.completed);
    },

    getTodoByTab: (state, getters) => (tab) => {  // funcion q devuelve una funcion
    console.log({tab});
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodo;
        case "completed":
          return getters.completeTodos;
      }
    },
  },
  modules: {},
});
