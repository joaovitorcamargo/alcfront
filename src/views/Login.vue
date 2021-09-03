<template>
  <div class="body-form d-flex align-items-center justify-content-center">
    <b-card>
      <transition name="slide-fade-form-login" mode="out-in">
        <component :is="currentComponent"></component>
      </transition>
      <hr />
      <b-button
        :class="{ 'd-none': currentComponent == 'FormRegister' }"
        class="button-form"
        variant="warning"
        @click="currentComponent = 'FormRegister'"
      >
        Registrar
      </b-button>
      <b-button
        :class="{ 'd-none': currentComponent == 'FormLogin' }"
        class="button-form"
        variant="warning"
        @click="currentComponent = 'FormLogin'"
      >
        Já possuí uma conta? fazer login
      </b-button>
    </b-card>
  </div>
</template>
<script>
import FormLogin from "../components/FormLogin/FormLogin.vue";
import FormRegister from "../components/FormLogin/FormRegister.vue";
export default {
  name: "Login",
  components: {
    FormLogin,
    FormRegister,
  },
  data() {
    return {
      currentComponent: "FormLogin",
    };
  },
};
</script>
<style lang="css" scoped>
.body-form {
  height: 100vh;
}
.slide-fade-form-login-enter {
  opacity: 0;
}
.slide-fade-form-login-leave-to {
  opacity: 0;
}
.slide-fade-form-login-enter-active,
.slide-fade-form-login-leave-active {
  transition: all 0.25s;
}
</style>