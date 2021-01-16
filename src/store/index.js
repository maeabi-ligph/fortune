import Vue from 'vue'
import Vuex from 'vuex'

import FORTUNE from '@/store/Fortune'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	modules: {
        FORTUNE
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {}
})
