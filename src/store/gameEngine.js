import { GameEngine } from '@/assets/models/gameEngine'

export const gameEngine = {
    state: () => ({
        gameEngine: new GameEngine()
    }),

    mutations: {},
    actions: {
        init() {}
    },
    getters: {
        // get: state => state.gameEngine
    }
}
