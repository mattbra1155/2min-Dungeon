import {level,level2} from '/levels.js';
import {items} from "/items.js";
import {playerHealth, enemyHealth} from '/ui.js'


class person {
    constructor(name, melee, ranged, hp, dexterity, weapon, description, inventory) {
        this.name = name;
        this.melee = melee;
        this.ranged = ranged; 
        this.hp = hp;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.description = description;
        this.inventory = inventory;
    }

    attack(enemy) {
        // update presons health on the ui
        let updatePersonHealth = () => {
            playerHealth.textContent = persons.player.hp;
            enemyHealth.textContent = level.monster.hp;
        }

        let checkIfDead = () => {
            if (enemy.hp <= 0) {
                //attackButton.disabled = "true";
                console.log(enemy.name + ' is dead');
                level.changeRoom(2);
                updatePersonHealth();
                attackButton.disabled = "false";
            }
        }
        // k100 dice roll
        let diceRoll = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // save dice roll result
        let diceRollResult = diceRoll(1,100)

        // check if attack hits
        if (this.melee > diceRollResult) {
            console.log( diceRollResult + ' hit ' + this.name)
            // reduce health
            enemy.hp = enemy.hp - this.weapon.damage;
            // update health
            updatePersonHealth();
            // check if dead
            checkIfDead();
        } else {
            console.log(diceRollResult + ' not hit ' + this.name)
        }
    };
    //check item equiped
    inspectHoldItem() {
        console.log(this.weapon.description)
    };
    //check enemy itme equiped
    inspectEnemyWeapin(enemy) {
        console.log(enemy.weapon.description)
    };
    //check person description
    inspectPerson(person) {
        console.log(person.description)
    };
    //show items in inventory
    /*
    inventoryList() {
        this.inventory.forEach(element => {
            let inventoryItem = document.createElement('li');
            inventoryItem.setAttribute('class', 'inventory__item');
            inventoryItem.textContent = element.name;
            let inventoryContainer = document.querySelector('#inventoryList');
            inventoryContainer.appendChild(inventoryItem); // FOR LATER TO FIX
        })
    }*/
}

let persons = {
    player: new person('Player', 45, 10, 10, 10, items.weapons.sword, 'It\'s you the Player', [items.utility.torch, items.healingItems.smallHealthPotion]),
    orc: new person('Orc', 45, 5, 10, 5, items.weapons.mace, 'It\'s an Orc, he carries a weapon', [items.utility.torch, items.healingItems.healingItems]),
    goblin: new person('Goblin', 25, 4, 5, 5, items.weapons.sword,'He looks skiny and crazy', [items.healingItems.smallHealthPotion])
}

/*
inventoryButton.addEventListener('click', function(e) {
    e.preventDefault;
    let inventory = document.querySelector('#inventory');

    //toggle inventory
    if (inventory.style.display = inventory.style.display == '') {
        inventory.style.display = 'flex';
        inventoryButton.style.zIndex = 101;
        inventoryButton.textContent = "Close";
        persons.player.inventoryList();

    } else {


        inventory.style.display = '';
        inventoryButton.style.zIndex = 1;
        inventoryButton.textContent = "Inventory";
        for (i = 0; i < inventoryItem.length; i++) {
            console.log(inventoryItem[i])
        }
        
    };

});
*/



export {persons} ;