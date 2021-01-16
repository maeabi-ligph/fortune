import values from 'lodash/values'
import delay from 'lodash/delay'

const DEFAULT_STATE = () => ({
    fortune: null,
    name: null,
    loading: false,
})

const ACTIONS = {
    requestFortune(ctx, fortuneId) {
        ctx.commit('setLoading', true)

        delay(async () => {
            let data = await
                fetch(`http://localhost:3010/fortunes/${fortuneId}`)
                .then(response => response.json())

            if (!values(data).length)
                data = 'Very Unfortunate, You have no fortune. Please try again'

            ctx.commit('setFortune', (data?.name || data))
            ctx.commit('setLoading', false)
        }, 1000, 'later')
    }
}

const MUTATIONS = {
    setName(state, payload) {
        state.name = payload
    },

    setFortune(state, payload) {
        state.fortune = payload
    },

    setLoading(state, payload) {
        state.loading = payload
    },

    clearName(state) {
        state.name = null
    },

    clearFortune(state) {
        state.fortune = null
    },
}

const GETTERS = {
    userName: state => state.name,
    fortune: state => state.fortune,
    loading: state => state.loading,
    hasUsername: state => Boolean(state.name)
}

const FORTUNE = {
    namespaced: true,
    state: DEFAULT_STATE() ,
    actions:ACTIONS,
    mutations: MUTATIONS,
    getters: GETTERS
}

export default FORTUNE