// import { sceneEngine, global, turn } from '../scripts/index.js'

class Person {
    constructor(
        name,
        race,
        hp,
        melee,
        ranged,
        dexterity,
        strength,
        thoughtness,
        speed,
        initiative,
        attacks,
        inteligence,
        willPower,
        charisma,
        weapon,
        inventory,
        description
    ) {
        this.name = name
        this.race = race
        this.stats = {
            hp: hp,
            melee: melee,
            ranged: ranged,
            dexterity: dexterity,
            strength: strength,
            thoughtness: thoughtness,
            speed: speed,
            initiative: initiative,
            attacks: attacks,
            inteligence: inteligence,
            'will power': willPower,
            charisma: charisma
        }
        this.weapon = weapon
        this.inventory = inventory
        this.bodyPart = {
            head: {
                name: 'Head',
                armor: {
                    armorPoints: 0,
                    item: ''
                }
            },
            'right arm': {
                name: 'Right arm',
                armor: {
                    armorPoints: 0,
                    item: ''
                }
            },
            'left arm': {
                name: 'Left arm',
                armor: {
                    armorPoints: 0,
                    item: ''
                }
            },
            torso: {
                name: 'Torso',
                armor: {
                    armorPoints: 0,
                    item: ''
                }
            },
            'right leg': {
                name: 'Right leg',
                armor: {
                    armorPoints: 0,
                    item: ''
                }
            },
            'left leg': {
                name: 'Left leg',
                armor: {
                    armorPoints: 0,
                    item: ''
                }
            }
        }
        this.description = description
        this.isAlive = true
        this.isActive = false // does nothing for now
    }

    attack(enemy) {
        // dice roll
        const diceRollHitResult = global.diceRoll(1, 100)

        // check if attack hits
        if (this.stats.melee > diceRollHitResult) {
            const diceRollBodyPartResult = global.diceRoll(1, 100)

            console.log(`Body part hit result: ${diceRollBodyPartResult}`)

            // TODO Where the strike hit //
            const getBodyPart = () => {
                if (
                    diceRollBodyPartResult >= 1 &&
                    diceRollBodyPartResult <= 15
                ) {
                    console.log(`${this.name} hit ${enemy.name} in the Head`)
                    return enemy.bodyPart['head']
                } else if (
                    diceRollBodyPartResult >= 16 &&
                    diceRollBodyPartResult <= 35
                ) {
                    console.log(
                        `${this.name} hit ${enemy.name} in the Right arm`
                    )
                    return enemy.bodyPart['right arm']
                } else if (
                    diceRollBodyPartResult >= 36 &&
                    diceRollBodyPartResult <= 55
                ) {
                    console.log(
                        `${this.name} hit ${enemy.name} in the Left arm`
                    )
                    return enemy.bodyPart['left arm']
                } else if (
                    diceRollBodyPartResult >= 56 &&
                    diceRollBodyPartResult <= 80
                ) {
                    console.log(`${this.name} hit ${enemy.name} in the Torso`)
                    return enemy.bodyPart['torso']
                } else if (
                    diceRollBodyPartResult >= 81 &&
                    diceRollBodyPartResult <= 90
                ) {
                    console.log(
                        `${this.name} hit ${enemy.name} in the Right leg`
                    )
                    return enemy.bodyPart['right leg']
                } else if (
                    diceRollBodyPartResult >= 91 &&
                    diceRollBodyPartResult <= 100
                ) {
                    console.log(
                        `${this.name} hit ${enemy.name} in the Left leg`
                    )
                    return enemy.bodyPart['left leg']
                }
            }

            const savedBodyPart = getBodyPart()

            const enemyArmorPoints = savedBodyPart.armor.armorPoints
            // const enemyArmorName = savedBodyPart.name
            const damageDiceRoll = global.diceRoll(1, 6)
            console.log(damageDiceRoll)

            // Calculate damage
            const damage = () => {
                let damagePoints =
                    this.stats.strength -
                    enemy.stats.thoughtness -
                    enemyArmorPoints +
                    (this.weapon.damage + damageDiceRoll)
                if (damagePoints < 0) {
                    damagePoints = 0
                }
                return damagePoints
            }
            // add action to the turn array
            /*  turn.turns.unshift({
                person: this,
                action: `${this.name} rolls: ${diceRollHitResult} and hit's ${
                    enemy.name
                } in ${enemyArmorName} for ${damage()} damage with ${
                    this.weapon.name
                }`
            }) */

            // reduce health
            enemy.stats.hp = enemy.stats.hp - damage()
            // update health
        } else {
            // add action to the turn array
            /* turn.turns.unshift({
                person: this,
                action: `${this.name} rolls: ${diceRollHitResult} and misses.`
            }) */
        }

    }
}

export { Person }
