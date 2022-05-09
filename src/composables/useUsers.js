import { ref } from "vue";
import axios from "axios";

const useUsers = () => {
  const users = ref([]);
  const isLoading = ref(true);
  const currentPage = ref(1);
  const errorMessage = ref();

  const getUser = async (page = 1) => {
    if (page <= 0) {
      page = 1;
      isLoading.value = true;
    }

    //   const resp = await axios.get(`https://reqres.in/api/users?page=${page}`);
    const { data } = await axios.get(`https://reqres.in/api/users`, {
      params: {
        page,
      },
    });
    if (data.data.length > 0) {
      users.value = data.data;
      isLoading.value = false;
      currentPage.value = page;
      errorMessage.value = null;
    } else if (currentPage.value > 0) {
      errorMessage.value = "no hay mas registros";
    }
    isLoading.value = false;
  };
    
  getUser(1);

  return {
    users,
    isLoading,
    currentPage,
    errorMessage,
    next: () => getUser(currentPage.value + 1),
    prv: () => getUser(currentPage.value - 1),
  };
};

export default useUsers;
