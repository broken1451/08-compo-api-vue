<template>
  <div>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir modal</button>
    <!-- <Modal /> -->
    <modal v-if="isOpen" title='hola mundo' otherTitle='hola mundo' @on:close="closeModal">
      <!-- <button>Salir</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. is laboriosam tempora minus! Voluptatum, quas.</p>
            <h2>Titulo modal</h2> -->
      <template v-slot:header>
        <h2>Titulo modal</h2>
      </template>
      <template v-slot:body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. is laboriosam
          tempora minus! Voluptatum, quas.
        </p>
      </template>
      <template v-slot:footer>
        <button @click="closeModal">Salir</button>
      </template>

      <!-- <template v-slot:exposed="slotProps"> -->
      <template v-slot:exposed="{newTitle}">
        <h2>{{newTitle}}</h2>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
    };
  },
};
</script>
<style scoped >
</style>