export const enemy = {
    namespaced: true,
    state: {
        enemy: 'enemy'
    },

    mutations: {
        CHANGE_ENEMY(state, payload) {
            state.enemy = payload
        }
    },
    actions: {
        setEnemy(context, payload) {
            context.commit('CHANGE_ENEMY', payload)
        }
    },
    getters: {
        getEnemy: state => {
            return state.enemy
        }
    }
}
