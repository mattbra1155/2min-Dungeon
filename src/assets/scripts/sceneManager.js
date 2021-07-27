import store from '@/store/index'
import { SceneGenerator } from '@/assets/generators/sceneGenerator'
class SceneManager {
    constructor() {
        this.currentScene = store.getters['scene/currentScene']
    }
    createScene() {
        const sceneGenerator = new SceneGenerator()
        const scene = sceneGenerator.create()
        return scene
    }
    archiveScene(sceneId) {
        store.dispatch('scene/archiveScene', sceneId)
    }
}

// sceneManager(this.currentScene) {
//     switch (this.currentScene) {
//         case 'start':
//             console.log(`Start Menu`)
//             this.startScreen()
//             break
//         case 'characterCreation':
//             console.log(`Character creation`)
//             new CharacterGenerator().createPlayer()
//             break
//         case 'nextLevel': {
//             console.log(`Next level`)
//             const level = this.createScene('level')
//             document
//                 .querySelectorAll('.feed__item')
//                 .forEach(item => item.remove())
//             this.currentScene = level
//             console.log(level)
//             break
//         }
//         case 'defeat': {
//             console.log(`Defeat`)
//             const defeat = this.createScene('defeat')
//             this.currentScene = defeat
//             break
//         }
//         case 'win': {
//             console.log(`Cleard level`)
//             const win = this.createScene('win')
//             this.currentScene = win
//             break
//         }
//     }
// }

export {SceneManager}