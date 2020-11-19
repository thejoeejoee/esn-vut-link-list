import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [],
    dataUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSSXCWVC9oGxqMzYloMuIsVA9t1D-ebQ3IszO0MghNnUdHqc_gpDtosptau1r1oXV4SnpB3NQx6U5Ro/pub?gid=323207252&single=true&output=tsv'
  },
  mutations: {
    setLinks(state, links) {
      state.links = links;
    }
  },
  actions: {
    async loadLinks({state, commit}) {
      const resp = await Axios.get(
          state.dataUrl,
          {

          }
      )

      commit('setLinks', resp.data.split('\n').map((l: string) => l.split('\t')))
    }
  },
  modules: {
  }
})
