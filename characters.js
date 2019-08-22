import {level,level2} from '/levels.js';
import {items} from "/items.js";
import {playerHealth, enemyHealth} from '/ui.js'


class person {
    constructor(name, melee, ranged, hp, dexterity, weapon, description, inventory, alive) {
        this.name = name;
        this.melee = melee;
        this.ranged = ranged; 
        this.hp = hp;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.description = description;
        this.inventory = inventory;
        this.alive = true;
    }

    attack(enemy) {
        // add text to feed
        const FEED = document.querySelector('#feedContainer');
        const feedRow = document.createElement('li');
        feedRow.setAttribute('class', 'feed__item');

        // update presons health on the ui
        const updatePersonHealth = () => {
            playerHealth.textContent = persons.player.hp;
            enemyHealth.textContent = level.monster.hp;
        }

        const checkIfAlive = () => {
            if (enemy.hp <= 0) {
                enemy.alive = false;
                attackButton.disabled = true;

                console.log(`${enemy.name} is dead`);
                
                const next = (x = 1) => x + 1;

                level.changeRoom(next(level.id));
                updatePersonHealth();
                attackButton.disabled = false;
            }
        }
        // k100 dice roll
        const diceRoll = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // save dice roll result
        const diceRollResult = diceRoll(1,100)

        // check if attack hits
        if (this.melee > diceRollResult) {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage} damage.`;
            FEED.appendChild(feedRow);
            console.log( `${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage} damage.`);
            // reduce health
            enemy.hp = enemy.hp - this.weapon.damage;
            // update health
            updatePersonHealth();
            // check if dead
            checkIfAlive();
        } else {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and misses.`
            FEED.appendChild(feedRow);
            console.log(`${this.name} rolls: ${diceRollResult} and misses.`)
        }

        if (FEED.childElementCount > 5) {
            setTimeout(e => {
                FEED.firstChild.remove();
            }, 2000)
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
}

const persons = {
    player: new person('Player', 45, 10, 5, 10, items.weapons.sword, 'It\'s you the Player', [items.utility.torch, items.healingItems.smallHealthPotion]),
    orc: new person('Orc', 45, 5, 5, 5, items.weapons.mace, 'It\'s an Orc, he carries a weapon', [items.utility.torch, items.healingItems.healingItems]),
    goblin: new person('Goblin', 25, 4, 3, 5, items.weapons.sword,'He looks skiny and crazy', [items.healingItems.smallHealthPotion]),
    ogr: new person('Ogr', 45, 5, 6, 3, items.weapons.mace, `a big and bulky Ogr. Looks intimidating`)
}

export {persons} ;