import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  mutations: {

  },
  actions: {
    async deleteUser(context, user) {
      console.log('store is being asked to delete '+user.id);
      await idb.deleteCat(user); 
    },
    async getUser(context) {
      context.state.users = [];
      let users = await idb.getCats();
      users.forEach(c => {
        context.state.users.push(c);
      });
    },
    async saveUser(context, user) {
      await idb.saveCat(user);
    }
  }
})