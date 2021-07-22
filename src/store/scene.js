export const scene = {
    namespaced: true,
    state: () => ({
        name: 'level',
        id: 0
    }),

    mutations: {
        CHANGE_ID(state, payload) {
            state.id = payload
        }
    },
    actions: {
        setScene(context, payload) {
            context.commit('CHANGE_ID', payload)
        }
    },
    getters: {
        getScene: state => state,
        id: state => state.id
    }
}
