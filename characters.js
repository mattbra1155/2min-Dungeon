import { level, items, screen, global } from './index.js';

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
        this.inventory = inventory;
        this.armorPoints = armorPoints
        this.description = description;
        this.alive = true;
        this.turnActive = false;
        }



    attack(enemy) {
        // add text to feed
        const feed = document.querySelector('#feedContainer');
        const feedRow = document.createElement('li');
        feedRow.setAttribute('class', 'feed__item');

        // update presons health on the ui
        //global.updatePersonHealth();

        // dice roll
        const diceRollResult = global.diceRoll(1, 100);

        // check if attack hits
        if (this.melee > diceRollResult) {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage()} damage with ${this.weapon.name}`;
            feed.appendChild(feedRow);
            console.log(`${this.name} rolls: ${diceRollResult} and hit's for ${this.weapon.damage()} damage.`);
            // reduce health
            enemy.hp = enemy.hp - this.weapon.damage();
            // update health
            global.updatePersonHealth();
        } else {
            feedRow.textContent = `${this.name} rolls: ${diceRollResult} and misses.`;
            feed.appendChild(feedRow);
            console.log(`${this.name} rolls: ${diceRollResult} and misses.`)
        };

        if(feed.childElementCount > 5) {
            setTimeout(e => {
                if(feed.childElementCount > 0) {
                    feed.firstChild.remove();
                } 
            }, 2000)
        };
    };
};

class Player extends Person {
    constructor(
        name,
        hp,
        melee,
        ranged,
        dexterity,
        strength,
        speed,
        initiative,
        attacks,
        intelect,
        charisma,
        weapon,
        inventory,
        armorPoints,
        description
        ) {
        super(
        name,
        hp,
        melee,
        ranged,
        dexterity,
        strength,
        speed,
        initiative,
        attacks,
        intelect,
        charisma,
        weapon,
        inventory,
        armorPoints,
        description
        );
    }
    showInventory() {
        this.inventory.forEach(element => {
            console.log(element.name);
        });
    };
};

class Monster extends Person {
    constructor(name, hp, melee, ranged, dexterity, strength, speed, initiative, attacks, intelect, charisma, weapon, inventory, armorPoints, description) {
        super(name, hp, melee, ranged, dexterity, strength, speed, initiative, attacks, intelect, charisma, weapon, inventory, armorPoints, description);
    }
}

const persons = {
    player: new Player('Player', 10, 100, 25, 10, 2, 3, 25, 1, 20, 20, items.weapons.sword,[items.weapons.sword, items.utility.torch, items.healingItems.smallHealthPotion], 'It\'s you the Player'),
    orc: new Monster('Orc', 10, 25, 10, 10, 3, 2, 15, 1, 10, 10, items.weapons.mace,  [items.weapons.mace, items.utility.torch, items.healingItems.smallHealthPotion], 'It\'s an Orc, he carries a weapon'),
    goblin: new Monster('Goblin', 5, 20, 10, 10, 1, 2, 10, 1, 10, 10, items.weapons.sword, [items.weapons.sword, items.healingItems.smallHealthPotion], 'He looks skiny and crazy'),
    ogr: new Monster('Ogr', 5, 24, 10, 13, 3, 2, 14, 1, 10, 10, items.weapons.mace, [items.weapons.mace], `a big and bulky Ogr. Looks intimidating`),
    skeleton: new Monster('Skeleton', 5, 20, 10, 15, 2, 2, 10, 1, 10, 0, items.weapons.mace, [], `It's a reanimated skeleton`),
    lich: new Monster('Lich', 5, 35, 25, 15, 3, 3, 25, 2, 40, 10, items.weapons.staff, [items.weapons.staff], `A powerfull Lich wearing thick and decorative robes with different symbols`)
}

export { persons };