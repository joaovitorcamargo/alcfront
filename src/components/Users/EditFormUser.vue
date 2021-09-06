<template>
  <div class="container">
    <b-form>
      <b-form-group class="mt-3" label="Insira seu Nome">
        <b-form-input
          class="mt-2"
          type="text"
          v-model="user.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mt-3" label="Insira seu Email">
        <b-form-input
          class="mt-2"
          type="email"
          v-model="user.email"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex align-items-center">
        <b-button
          class="mt-3"
          :class="{ disabled: !isDisabled }"
          @click.prevent="edit(id)"
          variant="primary"
        >
          Editar
        </b-button>
        <b-spinner class="mx-2" :class="{ 'd-none': isDisabled }"></b-spinner>
      </div>
    </b-form>
  </div>
</template>

<script>
import { api } from "../../services.js";

export default {
  name: "EditFormUser",
  props: ["id"],
  data() {
    return {
      isDisabled: true,
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    getUserById() {
      api
        .get(`/api/getUserById/${this.id}`)
        .then(({ data }) => {
          this.user.name = data.user.name;
          this.user.email = data.user.email;
        })
        .catch();
    },
    edit(id) {
      this.isDisabled = false;
      api
        .put(`/api/editUser`, {
          id: id,
          name: this.user.name,
          email: this.user.email,
        })
        .then(({ data }) => {
          this.$toasted.success(data.msg, {
            theme: "toasted-primary",
            position: "bottom-center",
            duration: 1500,
          });
          this.getUserById();
        })
        .catch((error) => {
          this.$toasted.error(error.response.data.msg, {
            theme: "toasted-primary",
            position: "bottom-center",
            duration: 1500,
          });
        })
        .finally(() => {
          this.isDisabled = true;
        });
    },
  },
  mounted() {
    this.getUserById();
  },
};
</script>

<style>
</style>