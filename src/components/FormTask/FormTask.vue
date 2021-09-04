<template>
  <div>
    <h1>Registrar Tarefa</h1>
    <b-form>
      <b-form-group class="mt-3" label="Insira seu nome">
        <b-form-input class="mt-2" type="text"></b-form-input>
      </b-form-group>

      <b-form-group class="mt-3" label="Insira seu email">
        <b-form-input class="mt-2" type="email"></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-3"
        id="input-group-2"
        label="Insira sua senha"
        label-for="input-2"
      >
        <b-form-input class="mt-2" type="password"></b-form-input>
      </b-form-group>

      <b-button class="mt-3" @click.prevent="" variant="primary">
        Registrar Tarefa
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
</style>