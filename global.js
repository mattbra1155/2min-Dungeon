import {  } from "./index.js";

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
        /* this.playerHealth.textContent = persons.player.stats.hp;
        this.enemyHealth.textContent = level.monster.stats.hp; */
    };

    checkIfAlive(enemy) {
       /*  if (enemy === persons.player && enemy.stats.hp <= 0) {
            enemy.isAlive = false;
            console.log(`${enemy.name} is dead`);

        } 
        if (enemy === level.monster && enemy.stats.hp <= 0) {
            enemy.isAlive = false;
            console.log(`${enemy.name} is dead`);

        }; */
    };
    populateInventory() {
       /*  persons.player.inventory.forEach(item => {
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