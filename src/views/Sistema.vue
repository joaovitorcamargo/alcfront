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
    <component :is="currentComponent"></component>
    <hr />
    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab
            active
            title="Lista de usuários"
            v-if="$store.state.usuario.type == 1"
          >
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <button class="btn btn-success">Editar</button>
                      <button class="btn btn-danger">Remover</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-tab>
          <b-tab title="Lista de Tarefas">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import FormRegister from "../components/FormLogin/FormRegister.vue";
import FormTask from "../components/FormTask/FormTask.vue";
import { api } from "../services.js";

export default {
  components: {
    FormRegister,
    FormTask,
  },
  data() {
    return {
      currentComponent: "",
      users: [],
    };
  },
  methods: {
    getUsers() {
      api
        .get("/api/getUsers")
        .then(({ data }) => {
          this.users = data.users;
          console.log(this.users);
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="css" scoped>
.btn-2 {
  margin-left: 20px;
}
</style>