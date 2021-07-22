import store from '@/store/index'
import { Scene } from '@/assets/models/sceneModel'

class SceneGenerator {
    constructor(name, id) {
        this.id = id
        this.name = name
        this.player = store.getters['player/getPlayer']
        this.enemy = store.getters['enemy/getEnemy']
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
        const scene = new Scene(id, name, this.player, this.enemy)

        return scene
    }
}

export { SceneGenerator }
