import { level } from '/levels.js';
import { items } from "/items.js";
import { playerHealth, enemyHealth, screen } from '/ui.js'



class Person {
    constructor(name, hp, melee, ranged, dexterity, strength, speed, initiative, attacks, intelect, charisma, weapon, inventory, armorPoints, description) {
        this.name = name;
        this.hp = hp;
        this.melee = melee;
        this.ranged = ranged;
        this.dexterity = dexterity;
        this.strength = strength;
        this.speed = speed;
        this.initiative = initiative;
        this.attacks = attacks;
        this.intelect = intelect;
        this.charisma = charisma;
        this.weapon = weapon;
        this.alive = true;
        this.inventory = inventory;
        this.armorPoints = armorPoints
        this.description = description;
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
        const diceRoll = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        // save dice roll result
        const diceRollResult = diceRoll(1, 100)

        // check if attack hits
        if (this.melee > diceRollResult) {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage()} damage with ${this.weapon.name}`;
            feed.appendChild(feedRow);
            console.log(`${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage()} damage.`);
            // reduce health
            enemy.hp = enemy.hp - this.weapon.damage();
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
    player: new Person('Player', 10, 33, 25, 10, 2, 3, 25, 1, 20, 20, items.weapons.sword,[items.weapons.sword, items.utility.torch, items.healingItems.smallHealthPotion], 'It\'s you the Player'),
    orc: new Person('Orc', 8, 25, 10, 10, 3, 2, 15, 1, 10, 10, items.weapons.mace,  [items.weapons.mace, items.utility.torch, items.healingItems.smallHealthPotion], 'It\'s an Orc, he carries a weapon'),
    goblin: new Person('Goblin', 3, 20, 10, 10, 1, 2, 10, 1, 10, 10, items.weapons.sword, [items.weapons.sword, items.healingItems.smallHealthPotion], 'He looks skiny and crazy'),
    ogr: new Person('Ogr', 9, 24, 10, 13, 3, 2, 14, 1, 10, 10, items.weapons.mace, [items.weapons.mace], `a big and bulky Ogr. Looks intimidating`),
    skeleton: new Person('Skeleton', 5, 20, 10, 15, 2, 2, 10, 1, 10, 0, items.weapons.mace, [], `It's a reanimated skeleton`),
    lich: new Person('Lich', 12, 35, 25, 15, 3, 3, 25, 2, 40, 10, items.weapons.staff, [items.weapons.staff], `A powerfull Lich wearing thick and decorative robes with different symbols`)
}

export { persons };