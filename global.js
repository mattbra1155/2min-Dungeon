import { persons, level } from "./index.js";

class Global {
    constructor(name) {
        this.name = name;
        this.playerHealth = document.querySelector('#playerHp');
        this.enemyHealth = document.querySelector('#monsterHp');
        this.combat = true;
    }

    diceRoll(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    updatePersonHealth() {
        this.playerHealth.textContent = persons.player.hp;
        this.enemyHealth.textContent = level.monster.hp;
    };
    
    checkIfAlive(enemy) {
        if (enemy === persons.player && enemy.hp <= 0) {
            enemy.alive = false;
            console.log(`${enemy.name} is dead`);
            screen.loseScreen();
        } else if (enemy === level.monster && enemy.hp <= 0) {
            enemy.alive = false;
            console.log(`${enemy.name} is dead`);
            screen.nextRoomScreen();
        }
    }
};

const global = new Global("global");

export {global};