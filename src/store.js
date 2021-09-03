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
      api.post('/api/auth/login',payload)
      .then(({ data }) => {
        window.localStorage.token = `Bearer ${data.token}`
        context.commit('UPDATE_USUARIO', {id:data.user.id, name:data.user.name, email:data.user.email,type:data.user.type})
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
    },
    getUserAutenticated(context,payload){
      context.commit('UPDATE_USUARIO', payload)
    },
    registerUser(context, payload){
      api.post('/api/auth/register',payload)
        .then(({data})=>{
          console.log(data)
        }).catch((error)=>{
          console.log(error.response.data.msg);
        })
    }
  }
})