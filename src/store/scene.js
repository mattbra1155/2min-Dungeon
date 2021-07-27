export const scene = {
    namespaced: true,
    state: () => ({
        currentScene: {
            name: 'level',
            id: 0,
            enemy: '',
            player: ''
        },
        archiveScenes: []
    }),

    mutations: {
        CHANGE_ID(state, payload) {
            state.id = payload
        },
        SET_CURRENT_SCENE(state, payload) {
            state.currentScene = payload
        },
        ARCHIVE_SCENE(state) {
            state.archiveScenes.push(currentScene)
        }
    },
    actions: {
        setScene(context, payload) {
            context.commit('CHANGE_ID', payload)
        },
        setCurrentScene(context, payload) {
            context.commit('SET_CURRENT_SCENE', payload)
        },
        archiveScene(context, payload) {
            context.commit('ARCHIVE_SCENE', payload)
        }
    },
    getters: {
        currentScene: state => state.currentScene,
        id: state => state.id,
        archiveScenesList: state => state.archiveScenes
    }
}
