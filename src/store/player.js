import localforage from 'localforage'
export const player = {
    namespaced: true,
    state: () => ({
        player: {},
        inventory: []
    }),
    mutations: {
        SET_PLAYER(state, payload) {
            state.player = payload
        }
    },
    actions: {
        setPlayer({ commit }, payload) {
            commit('SET_PLAYER', payload)
        },
        createPlayer({ commit }, payload) {
            commit('SET_PLAYER', payload)
            localforage.setItem('player', payload)
        },
        async fetchPlayer({ dispatch }) {
            return localforage
                .getItem('player')
                .then(value => {
                    dispatch('setPlayer', value)
                    return value
                })
                .catch(err => {
                    return console.log(err)
                })
        }
    },
    getters: {
        getPlayer: state => {
            return state.player
        }
    }
}
