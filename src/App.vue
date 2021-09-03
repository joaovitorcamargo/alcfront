<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { api } from "./services.js";
export default {
  name: "App",
  created() {
    if (window.localStorage.token) {
      api
        .get("/api/getAuthUser")
        .then(({ data }) => {
          this.$store.dispatch("getUserAutenticated", {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            type: data.user.type,
          });
        })
        .catch(() => {
          window.localStorage.removeItem("token");
          this.$router.push("login");
        });
    }
  },
};
</script>

<style>
</style>
