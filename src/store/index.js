import Vuex from 'vuex'
import Vue from 'vue'
import { player } from './player'
import { enemy } from './enemy'
import { turn } from './turn'
import { sceneManager } from './sceneManager'
import { characterGenerator } from './characterGenerator'
import { itemGenerator } from './itemGenerator'
import { sceneGenerator } from './sceneGenerator'
import { gameEngine } from './gameEngine'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        player,
        enemy,
        sceneManager,
        turn,
        characterGenerator,
        itemGenerator,
        sceneGenerator,
        gameEngine
    }
})
