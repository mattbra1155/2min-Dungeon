export const itemGenerator = {
    namespaced: true,
    state: {
        itemId: 0
    },

    mutations: {
        INCREMENT_ID(state) {
            state.itemId++
        }
    },
    actions: {
        increment_id(context) {
            context.commit('INCREMENT_ID')
        }
    },
    getters: {
        itemId: state => {
            return state.itemId
        }
    }
}
