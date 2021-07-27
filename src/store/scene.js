export const scene = {
    namespaced: true,
    state: () => ({
        activeScene: {
            name: 'level',
            id: 0,
            enemy: '',
            player: ''
        },
        scenes: []
    }),

    mutations: {
        CHANGE_ID(state, payload) {
            state.id = payload
        },
        SET_ACTIVE_SCENE(state, payload) {
            state.activeScene = payload
        },
        SAVE_SCENE(state, payload) {
            state.scenes.push(payload)
        }
    },
    actions: {
        setScene({ commit }, payload) {
            commit('CHANGE_ID', payload)
        },
        setActiveScene({ commit }, payload) {
            commit('SET_ACTIVE_SCENE', payload)
        },
        saveScene({ commit }, payload) {
            commit('SAVE_SCENE', payload)
        }
    },
    getters: {
        activeScene: state => state.activeScene,
        id: state => state.id,
        sceneList: state => state.scenes
    }
}
