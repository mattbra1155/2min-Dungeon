import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        player: 'player',
        enemy: 'enemy',
        scene: 'level',
        turn: 1,
        attack: false
    },

    mutations: {
        CHANGE_PLAYER(state, payload) {
            state.player = payload
        },
        CHANGE_ENEMY(state, payload) {
            state.enemy = payload
        },
        CHANGE_SCENE(state, payload) {
            state.level = payload
        },
        ATTACK(state, payload) {
            state.attack = payload
        }
    },
    actions: {
        setPlayer(context, payload) {
            context.commit('CHANGE_PLAYER', payload)
        },
        setEnemy(context, payload) {
            context.commit('CHANGE_ENEMY', payload)
        },
        setScene(context, payload) {
            context.commit('CHANGE_SCENE', payload)
        },
        attack(context, payload) {
            context.commit('ATTACK', payload)
        }
    },
    getters: {
        getPlayer: state => {
            return state.player
        },
        getEnemy: state => {
            return state.enemy
        },
        getScene: state => {
            return state.scene
        },
        getTurn: state => {
            return state.turn
        }
    }
})
