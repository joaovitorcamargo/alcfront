<template >
  <div>
    <h1>{{ $store.state.usuario.name }}</h1>
    <div v-if="$store.state.usuario.type == 1">
      <button class="btn btn-success">Criar Usuário</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
</style>