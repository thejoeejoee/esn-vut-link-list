import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 1000
})

Vue.use(Vuex)

const axios = Axios.create({
  adapter: cache.adapter
})

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
      const resp = await axios.get(state.dataUrl)

      // TODO: more robust parsing
      commit('setLinks', resp.data.split('\n').map((l: string) => l.split('\t')))
    }
  },
  modules: {
  }
})
