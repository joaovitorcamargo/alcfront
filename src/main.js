import Vue from 'vue'
import App from './App.vue'
import Toasted from "vue-toasted";
import router from './router.js'
import store from './store.js'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(Toasted);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
