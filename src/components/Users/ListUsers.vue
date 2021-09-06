<template>
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
                    <div class="d-flex">
                      <b-button
                        :to="{ name: 'EditFormUse', params: { id: user.id } }"
                        class="btn btn-success mx-1"
                        :class="{ disabled: !isDisabled }"
                      >
                        Editar
                      </b-button>
                      <button
                        @click.prevent="removeUser(user.id)"
                        class="btn btn-danger mx-1"
                        :class="{ disabled: !isDisabled }"
                      >
                        Remover
                      </button>
                      <b-spinner
                        class="mx-2"
                        :class="{ 'd-none': isDisabled }"
                      ></b-spinner>
                    </div>
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
</template>

<script>
import { api } from "../../services.js";
export default {
  props: ["users"],
  data() {
    return {
      isDisabled: true,
    };
  },
  methods: {
    removeUser(id) {
      this.isDisabled = false;
      api
        .post(`api/deleteUser`, { id: id })
        .then(({ data }) => {
          this.$toasted.success(data.msg, {
            theme: "toasted-primary",
            position: "bottom-center",
            duration: 1500,
          });
          this.$emit("refreshList");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isDisabled = true;
        });
    },
  },
};
</script>

<style scoped>
</style>