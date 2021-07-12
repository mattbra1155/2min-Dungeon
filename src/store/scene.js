export const scene = {
    state: {
        scene: 'level'
    },

    mutations: {
        CHANGE_SCENE(state, payload) {
            state.level = payload
        }
    },
    actions: {
        setScene(context, payload) {
            context.commit('CHANGE_SCENE', payload)
        }
    },
    getters: {
        getScene: state => {
            return state.scene
        }
    }
}
