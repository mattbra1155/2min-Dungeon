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
            
        } 
        if (enemy === level.monster && enemy.stats.hp <= 0) {
            enemy.isAlive = false;
            console.log(`${enemy.name} is dead`);
            attackButton.disabled = true;

        }; 
    };
    populateInventory() {
       /*  level.player.inventory.forEach(item => {
            const inventoryItem = document.createElement('li');
            inventoryItem.setAttribute('class', 'inventory__item');
            inventoryItem.textContent = item.name; 
            inventoryList.appendChild(inventoryItem);
        
            const equipButton = document.createElement('button');
            equipButton.setAttribute('class', 'button');
            equipButton.setAttribute('value', item.name)
            equipButton.textContent = "equip"
        
            equipButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                item.equipItem(item);
                console.log(persons.player.bodyPart)
            });
            inventoryItem.appendChild(equipButton);
        
        }); */
    };



};

const global = new Global("global");

export {global};