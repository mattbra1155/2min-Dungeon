import {Person, Player, Monster} from './index.js';
import { global } from './index.js';

const diceRollK2 = () => global.diceRoll(1,2);
const diceRollK3 = () =>  global.diceRoll(1,3);
const diceRollK10 = () => global.diceRoll(1,10);



class CharacterGenerator extends Player {
    constructor(name, race, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, inteligence, willPower, charisma, weapon, inventory, description) {
        super(name, race, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, inteligence, willPower, charisma, weapon, inventory, description);
    };

    createPlayer() {
        // NAME
        this.name = 'test player'
        this.race = 'human'

        // ROLL STATS
        const getRaceObject = (race = this.race) => races.find(elem => elem.name === race);

        const getStats = () => {
            const getStats = getRaceObject().stats;
            const getModifiers = getRaceObject().statModifiers;
            
            const result = Object.keys(getStats).concat(Object.keys(getModifiers))
                .reduce((sum, key) => {
                    sum[key] = getStats[key] + getModifiers[key];
                    return sum
                }, {})

            return result
        };
        this.stats = getStats(this.race);

        // ROLL SKILLS
        // todo

        // CHOOSE WEAPONS
        
        // OTHER
        this.inventory = [];
        this.description = getRaceObject().description;



        // FINAL OBJECT RETURN
        return this
    };
} 












const races = [
    {
        name: 'human',
        stats: {
            hp: diceRollK3(),
            melee: diceRollK10() * 2,
            ranged: diceRollK10() * 2,
            dexterity: diceRollK10(),
            strength: diceRollK3(),
            thoughtness: diceRollK3(),
            speed: diceRollK3(),
            initiative: diceRollK10() * 2,
            attacks: 1,
            inteligence: diceRollK10() * 2,
            willPower: diceRollK10() * 2,
            charisma: diceRollK10() * 2,
        },
        statModifiers: {
            hp: 4,
            melee: 20,
            ranged: 20,
            dexterity: 20,
            strength: 1,
            thoughtness: 1,
            speed: 2,
            initiative: 20,
            attacks: 0,
            inteligence: 20,
            willPower: 20,
            charisma: 20,
        },
        description: 'human description'
    },
    {
        name: 'dwarf',
        stats: {
            hp: diceRollK3(),
            melee: diceRollK10() * 2,
            ranged: diceRollK10() * 2,
            dexterity: diceRollK10(),
            strength: diceRollK3(),
            thoughtness: diceRollK3(),
            speed: diceRollK2(),
            initiative: diceRollK10() * 2,
            attacks: 1,
            inteligence: diceRollK10() * 2,
            willPower: diceRollK10() * 2,
            charisma: diceRollK10() * 2,
        },
        statModifiers: {
            hp: 5,
            melee: 30,
            ranged: 10,
            dexterity: 10,
            strength: 1,
            thoughtness: 2,
            speed: 2,
            initiative: 10,
            attacks: 0,
            inteligence: 20,
            willPower: 40,
            charisma: 20,
        },
        description: 'dwarf description'
    }
]

export {CharacterGenerator, races};