import { bestiary } from './bestiary'
import { Monster } from '@/assets/models/monsterModel'

class MonsterGenerator {
    constructor(type, level) {
        type, level
    }

    create() {
        const bestiaryCopy = [...bestiary]
        const monsterRandom =
            bestiaryCopy[Math.floor(Math.random() * bestiaryCopy.length)]

        // monster.weapon = new ItemGenerator().createItem('weapon')

        const monsterClass = new Monster()
        const monster = Object.assign(monsterClass, monsterRandom)
        return monster
    }
}

export { MonsterGenerator }
