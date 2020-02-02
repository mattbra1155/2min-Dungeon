import { level, items, screen, global } from './index.js';
import { turn } from './turn.js';

class Person {

    constructor(name, hp, melee, ranged, dexterity, strength, thoughtness , speed, initiative, attacks, intelect, charisma, weapon, inventory, description) {
        this.name = name;
        this.stats = {
            hp: hp,
            melee: melee,
            ranged: ranged,
            dexterity: dexterity,
            strength: strength,
            thoughtness: thoughtness,
            speed: speed,
            initiative: initiative,
            attacks: attacks,
            intelect: intelect,
            charisma: charisma
        }
        this.weapon = weapon;
        this.inventory = inventory;
        this.armor = {
            "head": {
                name: 'Head',
                item: items.armors.helmet,
                
                setArmorPoints() {    
                    return this.item.armorPoints;
                },
                getArmorPoints() {
                    return this.armorPoints = setArmorPoints();
                },
                armorPoints: getArmorPoints()
            },
            "right arm": {
                name: 'Right arm',
                armorPoints: 0,
                item: ''
            },
            "left arm": {
                name: 'Left arm',
                armorPoints: 0,
                item: ''
                
            },
            "torso": {
                name: 'Torso',
                armorPoints: 0,
                item: ''
            },
            "right leg": {
                name: 'Right leg',
                armorPoints: 0,
                item: ''
            },
            "left leg": {
                name: 'Left leg',
                armorPoints: 0,
                item: ''
            }
        }
        this.description = description;
        this.alive = true;
        this.isActive = false; // is always false need to change
        } 
    
     

    attack(enemy) {
        // create a feed row for messages
        const feed = document.querySelector('#feedContainer');
        const feedRow = document.createElement('li');
        feedRow.setAttribute('class', 'feed__item');
    

        // dice roll
        const diceRollHitResult = global.diceRoll(1, 100);

        // check if attack hits
        if (this.stats.melee > diceRollHitResult) {

            const diceRollBodyPartResult = global.diceRoll(1, 100);

            console.log(`Body part hit result: ${diceRollBodyPartResult}`)

            // TODO Where the strike hit //
            const getBodyPartArmor = () => {
                if (diceRollBodyPartResult >= 1 && diceRollBodyPartResult <= 15) {
                    console.log(`${this.name} hit ${enemy.name} in the Head` )
                    return enemy.armor['head']
                } else if (diceRollBodyPartResult >= 16 && diceRollBodyPartResult <= 35) {
                    console.log(`${this.name} hit ${enemy.name} in the Right arm` )
                    return enemy.armor['right arm']
                } else if (diceRollBodyPartResult >= 36 && diceRollBodyPartResult <= 55) {
                    console.log(`${this.name} hit ${enemy.name} in the Left arm`)
                    return enemy.armor['left arm']
                } else if (diceRollBodyPartResult >= 56 && diceRollBodyPartResult <= 80) {
                    console.log(`${this.name} hit ${enemy.name} in the Torso`)
                    return enemy.armor['torso']
                } else if (diceRollBodyPartResult >= 81 && diceRollBodyPartResult <= 90) {
                    console.log(`${this.name} hit ${enemy.name} in the Right leg`)
                    return enemy.armor['right leg']
                } else if (diceRollBodyPartResult >= 91 && diceRollBodyPartResult <= 100) {
                    console.log(`${this.name} hit ${enemy.name} in the Left leg`)
                    return enemy.armor['left leg']
                };
            };

            const enemyArmorPoints = getBodyPartArmor().armorPoints;
            const enemyArmorName = getBodyPartArmor().name;

            console.log(enemyArmorName)
            // Calculate damage
            const damage = () => {
                 let damagePoints = (this.stats.strength - enemy.stats.thoughtness) - enemyArmorPoints + (this.weapon.damage + this.weapon.modifier);
                 if (damagePoints < 0) {
                     damagePoints = 0;
                 };
                 return damagePoints;
            };
            // add action to the turn array
            turn.turns.unshift(
                {
                    person: this,
                    action: `${this.name} rolls: ${diceRollHitResult} and hit's ${enemy.name} in ${enemyArmorName} for ${damage()} damage with ${this.weapon.name}`
                }
            )

            // reduce health
            enemy.stats.hp = enemy.stats.hp - damage();
            // update health

        } else {
            // add action to the turn array
            turn.turns.unshift(
                {
                    person: this,
                    action: `${this.name} rolls: ${diceRollHitResult} and misses.`
                }
            );
        };

        console.log(`atribute ${this.name}`)

        if (this.name === persons.player.name) {
            feedRow.style.background = "blue";
        } else {
            feedRow.style.background = "red"
        }
        feedRow.textContent = turn.turns[0].action;
        feed.appendChild(feedRow)

        if(feed.childElementCount > 5) {
            setTimeout(e => {
                if(feed.childElementCount > 0) {
                    feed.firstChild.remove();
                } 
            }, 2000);
        };
    };
};

class Player extends Person {
    constructor(name, hp, melee, ranged, dexterity, strength, thoughtness , speed, initiative, attacks, intelect, charisma, weapon, inventory, description) {
        super(name, hp, melee, ranged, dexterity, strength, thoughtness , speed, initiative, attacks, intelect, charisma, weapon, inventory, description);
    };

    showInventory() {
        this.inventory.forEach(element => {
            console.log(element.name);
        });
    };
};

class Monster extends Person {
    constructor(name, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, intelect, charisma, weapon, inventory, description) {
        super(name, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, intelect, charisma, weapon, inventory, description);
    }
}

class Test {
    constructor(name, test, hp, ) {
        this.name = name;
        this.stats = {
            test: test,
            hp: hp
        }
    }
}

const test = new Test ('Test player', 4, 12)

const persons = {
    player: new Player('Player', 10, 100, 25, 10, 5, 3, 3, 25, 1, 20, 20, items.weapons.sword,[items.weapons.sword, items.utility.torch, items.healingItems.smallHealthPotion],'It\'s you the Player'),
    orc: new Monster('Orc', 10, 100, 10, 10, 4, 2, 2, 15, 1, 10, 10, items.weapons.mace,  [items.weapons.mace, items.utility.torch, items.healingItems.smallHealthPotion], 'It\'s an Orc, he carries a weapon'),
    goblin: new Monster('Goblin', 5, 20, 10, 10, 2, 1, 2, 10, 1, 10, 10, items.weapons.sword, [items.weapons.sword, items.healingItems.smallHealthPotion], 'He looks skiny and crazy'),
    ogr: new Monster('Ogr', 5, 24, 10, 13, 3, 2, 2, 14, 1, 10, 10, items.weapons.mace, [items.weapons.mace], `a big and bulky Ogr. Looks intimidating`),
    skeleton: new Monster('Skeleton', 5, 20, 10, 2, 3, 2, 2, 10, 1, 10, 0, items.weapons.mace, [], `It's a reanimated skeleton`),
    lich: new Monster('Lich', 5, 35, 25, 15, 3, 3, 3, 25, 2, 40, 10, items.weapons.staff, [items.weapons.staff], `A powerfull Lich wearing thick and decorative robes with different symbols`)
}

export { persons, test };