import { level } from '/levels.js';
import { items } from "/items.js";
import { playerHealth, enemyHealth, screen } from '/ui.js'



class Person {
    constructor(name, melee, hp, dexterity, weapon, description, inventory) {
        this.name = name;
        this.melee = melee;
        this.hp = hp;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.description = description;
        this.inventory = inventory;
        this.alive = true;
    }

    checkIfAlive = (enemy) => {
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

    attack(enemy) {
        // add text to feed
        const feed = document.querySelector('#feedContainer');
        const feedRow = document.createElement('li');
        feedRow.setAttribute('class', 'feed__item');

        // update presons health on the ui
        const updatePersonHealth = () => {
            playerHealth.textContent = persons.player.hp;
            enemyHealth.textContent = level.monster.hp;
        }

        // k100 dice roll
        const diceRoll = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // save dice roll result
        const diceRollResult = diceRoll(1, 100)

        // check if attack hits
        if (this.melee > diceRollResult) {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage} damage.`;
            feed.appendChild(feedRow);
            console.log(`${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage} damage.`);
            // reduce health
            enemy.hp = enemy.hp - this.weapon.damage;
            // update health
            updatePersonHealth();
        } else {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and misses.`
            feed.appendChild(feedRow);
            console.log(`${this.name} rolls: ${diceRollResult} and misses.`)
        }

        if (feed.childElementCount > 5) {
            setTimeout(e => {
                feed.firstChild.remove();
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

    showInventory() {
        this.inventory.forEach(element => {
            console.log(element.name)
        });
    }
}

const persons = {
    player: new Person('Player', 100, 5, 10, items.weapons.sword, 'It\'s you the Player', [items.weapons.sword, items.utility.torch, items.healingItems.smallHealthPotion]),
    orc: new Person('Orc', 100, 5, 5, items.weapons.mace, 'It\'s an Orc, he carries a weapon', [items.weapons.mace, items.utility.torch, items.healingItems.smallHealthPotion]),
    goblin: new Person('Goblin', 25, 3, 5, items.weapons.sword, 'He looks skiny and crazy', [items.weapons.sword, items.healingItems.smallHealthPotion]),
    ogr: new Person('Ogr', 45, 6, 3, items.weapons.mace, `a big and bulky Ogr. Looks intimidating`, [items.weapons.mace]),
    skeleton: new Person('Skeleton', 35, 5, 10, items.weapons.mace, `It's a reanimated skeleton`, []),
    lich: new Person('lich', 50, 7, 25, items.weapons.staff, `A powerfull Lich wearing thick and decorative robes with different symbols`, [items.weapons.staff])
}

export { persons };