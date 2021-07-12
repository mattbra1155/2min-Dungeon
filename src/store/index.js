import Vuex from 'vuex'
import Vue from 'vue'
import { player } from './player'
import { enemy } from './enemy'
import { turn } from './turn'
import { scene } from './scene'
import { characterGenerator } from './characterGenerator'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        player,
        enemy,
        scene,
        turn,
        characterGenerator
    }
})
