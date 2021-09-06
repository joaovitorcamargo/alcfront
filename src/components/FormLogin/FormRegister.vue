<template>
  <div>
    <h1>Registrar</h1>
    <b-form>
      <b-form-group class="mt-3" label="Insira seu nome">
        <b-form-input class="mt-2" type="text" v-model="name"></b-form-input>
      </b-form-group>

      <b-form-group class="mt-3" label="Insira seu email">
        <b-form-input class="mt-2" type="email" v-model="email"></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-3"
        id="input-group-2"
        label="Insira sua senha"
        label-for="input-2"
      >
        <b-form-input
          class="mt-2"
          type="password"
          v-model="password"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex align-items-center">
        <b-button
          :class="{ disabled: !isDisabled }"
          class="mt-3"
          @click.prevent="register()"
          variant="primary"
        >
          Registrar
        </b-button>
        <b-spinner class="mx-2" :class="{ 'd-none': isDisabled }"></b-spinner>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isDisabled: true,
    };
  },
  methods: {
    register() {
      this.isDisabled = false;
      this.$store
        .dispatch("registerUser", {
          name: this.name,
          email: this.email,
          password: this.password,
          type: 2,
        })
        .then((response) => {
          this.$toasted.success(response.data.msg, {
            theme: "toasted-primary",
            position: "bottom-center",
            duration: 1500,
          });
          this.name = "";
          this.email = "";
          this.password = "";
          this.$emit("refreshList");
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
};
</script>

<style lang="css" scoped>
</style>