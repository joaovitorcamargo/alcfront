<template >
  <div class="container mt-4">
    <div class="d-flex align-items-center justify-content-center">
      <h1>{{ $store.state.usuario.name }}</h1>
      <div v-if="$store.state.usuario.type == 1">
        <button
          v-if="currentComponent != 'FormRegister'"
          class="btn btn-success btn-2"
          @click.prevent="currentComponent = 'FormRegister'"
        >
          Registrar Usuário
        </button>
        <button
          v-else-if="(currentComponent = 'FormRegister')"
          class="btn btn-danger btn-2"
          @click.prevent="currentComponent = ''"
        >
          Cancelar Registro
        </button>
      </div>
      <button
        v-if="currentComponent != 'FormTask'"
        class="btn btn-warning btn-2"
        @click.prevent="currentComponent = 'FormTask'"
      >
        Criar Tarefa
      </button>
      <button
        v-else-if="(currentComponent = 'FormTask')"
        class="btn btn-danger btn-2"
        @click.prevent="currentComponent = ''"
      >
        Cancelar Registro Tarefa
      </button>
    </div>
    <component
      :is="currentComponent"
      @refreshList="getUsers()"
      @refreshListTask="getTasks()"
    ></component>
    <hr />
    <div>
      <list-users
        :users="users"
        :tasks="tasks"
        @refreshList="getUsers()"
        @refreshListTask="getTasks()"
      >
      </list-users>
    </div>
  </div>
</template>

<script>
import FormRegister from "../components/FormLogin/FormRegister.vue";
import FormTask from "../components/FormTask/FormTask.vue";
import ListUsers from "../components/Users/ListUsers.vue";
import { api } from "../services.js";

export default {
  components: {
    FormRegister,
    FormTask,
    ListUsers,
  },
  data() {
    return {
      currentComponent: "",
      users: [],
      tasks: [],
    };
  },
  methods: {
    getUsers() {
      api
        .get("/api/getUsers")
        .then(({ data }) => {
          this.users = data.users;
        })
        .catch((error) => {
          console.trace(error);
        });
    },
    getTasks() {
      api
        .get("/api/getTasks")
        .then(({ data }) => {
          this.tasks = data.tasks;
        })
        .catch((error) => {
          console.trace(error);
        });
    },
  },
  mounted() {
    this.getUsers();
    this.getTasks();
  },
};
</script>

<style lang="css" scoped>
.btn-2 {
  margin-left: 20px;
}
</style>