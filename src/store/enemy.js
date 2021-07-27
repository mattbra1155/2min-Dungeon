export const enemy = {
    namespaced: true,
    state: () => ({
        enemy: {},
        inventory: []
    }),
    mutations: {
        SET_ENEMY(state, payload) {
            state.enemy = payload
        }
    },
    actions: {
        setEnemy({ commit }, payload) {
            commit('SET_ENEMY', payload)
        }
    },
    getters: {
        getEnemy: state => state.enemy
    }
}
