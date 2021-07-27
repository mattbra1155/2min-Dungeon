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
        ARCHIVE_SCENE(state) {
            state.scenes.push(state.activeScene) 
        }
    },
    actions: {
        setScene(context, payload) {
            context.commit('CHANGE_ID', payload)
        },
        setActiveScene(context, payload) {
            context.commit('SET_ACTIVE_SCENE', payload)
        },
        archiveScene(context, payload) {
            context.commit('ARCHIVE_SCENE', payload)
        }
    },
    getters: {
        activeScene: state => state.activeScene,
        id: state => state.id,
        archiveScenesList: state => state.archiveScenes
    }
}
