import { sceneEngine, attackButton } from "./index.js";

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

    diceRollK2 = () => global.diceRoll(1,2);
    diceRollK3 = () =>  global.diceRoll(1,3);
    diceRollK10 = () => global.diceRoll(1,10);

    updatePersonHealth() {
        const level = sceneEngine.currentScene;
        this.playerHealth.textContent = level.player.stats.hp;
        this.enemyHealth.textContent = level.monster.stats.hp; 
    };

    checkIfAlive(enemy) {
        const level = sceneEngine.currentScene;
         if (enemy === level.player && enemy.stats.hp <= 0) {
            enemy.isAlive = false;
            console.log(`${enemy.name} is dead`);
            attackButton.disabled = true;
            sceneEngine.sceneManager("defeat");
            localStorage.removeItem('player');
            
        } 
        if (enemy === level.monster && enemy.stats.hp <= 0) {
            enemy.isAlive = false;
            console.log(`${enemy.name} is dead`);
            attackButton.disabled = true;
            
            const parsedPlayer = JSON.stringify(level.player);
            localStorage.setItem('player', parsedPlayer)

            sceneEngine.sceneManager("win")

        }; 
    };
};

const global = new Global("global");

export {global};