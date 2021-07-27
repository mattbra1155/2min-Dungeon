import store from '@/store/index'
import { Scene } from '@/assets/models/sceneModel'
class SceneGenerator {
    constructor(player, enemy) {
        this.player = player
        this.enemy = enemy
    }
    createId() {
        store.dispatch('sceneGenerator/incrementId')
        const id = store.getters['sceneGenerator/id']
        return id 
    }
    createName(id) {
        return `level ${id}`
    }
    create() {
        const id = this.createId()
        const name = this.createName(id)
        const scene = new Scene(id, name)
        
        return scene
    }
}

export { SceneGenerator }
