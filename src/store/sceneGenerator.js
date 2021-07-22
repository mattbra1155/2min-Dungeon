export const sceneGenerator = {
    namespaced: true,
    state: {
        id: 0
    },

    mutations: {
        INCREMENT_ID(state) {
            state.id++
        }
    },
    actions: {
        incrementId(context) {
            context.commit('INCREMENT_ID')
        }
    },
    getters: {
        id: state => state.id
    }
}
