import { persons } from "./characters.js";
import { level } from "./levels.js";

class Global {
    constructor(name) {
        this.name = name;
        this.playerHealth = document.querySelector('#playerHp');
        this.enemyHealth = document.querySelector('#monsterHp');
    }

    diceRoll(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    updatePersonHealth() {
        this.playerHealth.textContent = persons.player.hp;
        this.enemyHealth.textContent = level.monster.hp;
    };
};


let global = new Global("global");

export {global};