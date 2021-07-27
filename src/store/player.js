import localforage from 'localforage'
import { Player } from '@/assets/models/playerModel'
export const player = {
    namespaced: true,
    state: () => ({
        player: new Player(),
        inventory: []
    }),
    mutations: {
        SET_PLAYER(state, payload) {
            Object.assign(state.player, payload)
        },
        TAKE_DAMAGE(state, payload) {
            state.player.stats.hp -= payload
            console.log(payload)
            if (state.player.stats.hp < 0) {
                state.player.stats.hp = 0
            }
        }
    },
    actions: {
        attack({ state }, enemy) {
            state.player.attack(enemy)
        },
        takeDamage({ commit }, payload) {
            commit('TAKE_DAMAGE', payload)
        },
        setPlayer({ commit }, payload) {
            commit('SET_PLAYER', payload)
        },
        createPlayer({ commit }, payload) {
            commit('SET_PLAYER', payload)
            localforage.setItem('player', payload)
        },
        async fetchPlayer({ dispatch }) {
            return localforage
                .getItem('player')
                .then(value => {
                    dispatch('setPlayer', value)
                    return value
                })
                .catch(err => {
                    return console.log(err)
                })
        }
    },
    getters: {
        getPlayer: state => {
            return state.player
        }
    }
}
