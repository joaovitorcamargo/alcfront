<template>
  <div>
    <h1>Login</h1>
    <b-form>
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
          class="mt-3 button-form btn-block"
          @click.prevent="login()"
          variant="primary"
          :class="{ disabled: !isDisabled }"
        >
          Login
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
      email: "",
      password: "",
      isDisabled: true,
    };
  },
  methods: {
    login() {
      this.isDisabled = false;
      this.$store
        .dispatch("logarUsuario", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("sistema");
        })
        .catch((error) => {
          console.trace(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>