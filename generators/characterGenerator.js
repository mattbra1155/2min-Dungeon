import {Person, Player, Monster, global, races} from '../index.js';
import { bestiary } from './bestiary.js';


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

class MonsterGenerator extends Monster {
    constructor(name, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, inteligence, willPower, charisma, weapon, inventory, description) {
        super(name, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, inteligence, willPower, charisma, weapon, inventory, description);
    };

    createMonster() {

        const monster = bestiary[Math.floor(Math.random() * bestiary.length)];
        Object.assign(this, monster);

        return this
    }

}




export {CharacterGenerator, MonsterGenerator};