import Vue from 'vue';
import Vuex from 'vuex';
import {api} from './services.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario:{
      id:'',
      name:'',
      email:'',
      type:''
    }
  },
  mutations:{
    UPDATE_USUARIO(state, payload){
      state.usuario = payload
    }
  },
  actions:{
    logarUsuario(context, payload){
      return api.post('/api/auth/login',payload)
      .then(({ data }) => {
        window.localStorage.token = `Bearer ${data.token}`
        context.commit('UPDATE_USUARIO', {id:data.user.id, name:data.user.name, email:data.user.email,type:data.user.type})
      })
    },
    getUserAutenticated(context,payload){
      context.commit('UPDATE_USUARIO', payload)
    },
    registerUser(context, payload){
      return api.post('/api/auth/register',payload)
    }
  }
})