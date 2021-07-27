export const enemy = {
    namespaced: true,
    state: () => ({
        enemy: {},
        inventory: []
    }),
    mutations: {
        SET_ENEMY(state, payload) {
            console.log(payload)
            state.enemy = payload
        },
        TAKE_DAMAGE(state, payload) {
            state.enemy.stats.hp -= payload
            if (state.enemy.stats.hp < 0) {
                state.enemy.stats.hp = 0
            }
        }
    },
    actions: {
        setEnemy({ commit }, payload) {
            commit('SET_ENEMY', payload)
        },
        attack({ state }, player) {
            console.log(player)
            state.enemy.attack(player)
        },
        takeDamage({ commit }, payload) {
            commit('TAKE_DAMAGE', payload)
        }
    },
    getters: {
        getEnemy: state => state.enemy
    }
}
