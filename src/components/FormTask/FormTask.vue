<template>
  <div>
    <h1>Registrar Tarefa</h1>
    <b-form>
      <b-form-group class="mt-3" label="Insira o nome da task">
        <b-form-input class="mt-2" type="text" v-model="name"></b-form-input>
      </b-form-group>

      <b-form-group class="mt-3" label="Data da conclusão da tarefa">
        <b-form-input
          class="mt-2"
          type="date"
          v-model="done_date"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-3"
        id="input-group-2"
        label="Insira o status da tarefa"
        label-for="input-2"
      >
        <select class="form-select" v-model="status">
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baixa">Baixa</option>
        </select>
      </b-form-group>
      <div class="d-flex">
        <b-button
          class="mt-3"
          @click.prevent="registerTask"
          variant="primary"
          :class="{ disabled: !isDisabled }"
        >
          Registrar Tarefa
        </b-button>
        <b-spinner class="mx-2" :class="{ 'd-none': isDisabled }"></b-spinner>
      </div>
    </b-form>
  </div>
</template>

<script>
import { api } from "../../services.js";

export default {
  data() {
    return {
      name: "",
      done_date: "",
      status: "",
      isDisabled: true,
    };
  },
  methods: {
    registerTask() {
      this.isDisabled = false;
      api
        .post("api/registerTask", {
          name: this.name,
          done_date: this.done_date,
          status: this.status,
        })
        .then(({ data }) => {
          this.$toasted.success(data.msg, {
            theme: "toasted-primary",
            position: "bottom-center",
            duration: 1500,
          });
          this.name = "";
          this.done_date = "";
          this.status = "";
          this.$emit("refreshListTask");
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

<style lang="">
</style>