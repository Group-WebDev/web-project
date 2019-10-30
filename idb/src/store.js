import Vue from "vue";
import Vuex from "vuex";

import idb from "@/api/idb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {},
  actions: {
    async deleteUser(context, user) {
      console.log("store is being asked to delete " + user.id);
      await idb.deleteUser(user);
    },
    async getUsers(context) {
      context.state.users = null;
      let users = await idb.getUsers();
      console.log(users);
        context.state.users = users;
    },
    async saveUser(context, user) {
      await idb.saveUser(user);
    }
  }
});
