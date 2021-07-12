export const turn = {
    state: () => ({
        turn: 1
    }),

    mutations: {},
    actions: {},
    getters: {
        getTurn: state => {
            return state.turn
        }
    }
}
