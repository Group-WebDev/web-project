import Vue from "vue";
import Vuex from "vuex";

import idb from "@/api/idb2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datas: []
  },
  mutations: {},
  actions: {
    async deleteData(context, data) {
      console.log("store is being asked to delete " + data.id);
      await idb.deleteData(data);
    },
    async getDatas(context) {
      context.state.datas = null;
      let datas = await idb.getDatas();
      console.log(datas);
        context.state.datas = datas;
    },
    async saveData(context, data) {
      await idb.saveData(data);
    }
  }
});
