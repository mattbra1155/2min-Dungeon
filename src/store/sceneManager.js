export const sceneManager = {
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
        SET_ACTIVE_SCENE(state, payload) {
            state.activeScene = payload
        },
        SAVE_SCENE(state, payload) {
            state.scenes.push(payload)
        }
    },
    actions: {
        setActiveScene({ commit }, payload) {
            commit('SET_ACTIVE_SCENE', payload)
        },
        saveScene({ commit }, payload) {
            commit('SAVE_SCENE', payload)
        }
    },
    getters: {
        activeScene: state => state.activeScene,
        sceneList: state => state.scenes
    }
}
