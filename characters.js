import { level, items, screen, global, turn } from './index.js';

class Person {

    constructor(name, race, hp, melee, ranged, dexterity, strength, thoughtness , speed, initiative, attacks, inteligence, willPower, charisma, weapon, inventory, description) {
        this.name = name;
        this.race = race;
        this.stats = {
            'hp': hp,
            'melee': melee,
            'ranged': ranged,
            'dexterity': dexterity,
            'strength': strength,
            'thoughtness': thoughtness,
            'speed': speed,
            'initiative': initiative,
            'attacks': attacks,
            'inteligence': inteligence,
            'will power': willPower,
            'charisma': charisma
        }
        this.weapon = weapon;
        this.inventory = inventory;
        this.bodyPart = {
            "head": {
                name: 'Head',
                armor: {
                    item: '',
                    get armorPoints() {
                        if (this.item === '') {
                            return 0
                        }
                        return this.item.armorPoints;
                    }
                }
            },
            "right arm": {
                name: 'Right arm',
                armor: {
                    item: '',
                    get armorPoints() {
                        if (this.item === '') {
                            return 0
                        }
                        return this.item.armorPoints;
                    }
                }
            },
            "left arm": {
                name: 'Left arm',
                armor: {
                    item: '',
                    get armorPoints() {
                        if (this.item === '') {
                            return 0
                        }
                        return this.item.armorPoints;
                    }
                }
            },
            "torso": {
                name: 'Torso',
                armor: {
                    item: '',
                    get armorPoints() {
                        if (this.item === '') {
                            return 0
                        }
                        return this.item.armorPoints;
                    }
                }
            },
            "right leg": {
                name: 'Right leg',
                armor: {
                    item: '',
                    get armorPoints() {
                        if (this.item === '') {
                            return 0
                        }
                        return this.item.armorPoints;
                    }
                }
            },
            "left leg": {
                name: 'Left leg',
                armor: {
                    item: '',
                    get armorPoints() {
                        if (this.item === '') {
                            return 0
                        }
                        return this.item.armorPoints;
                    }
                }
            }
        }
        this.description = description;
        this.isAlive = true;
        this.isActive = false; // is always false need to change
    };

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
            const getBodyPart = () => {
                if (diceRollBodyPartResult >= 1 && diceRollBodyPartResult <= 15) {
                    console.log(`${this.name} hit ${enemy.name} in the Head` )
                    return enemy.bodyPart['head']
                } else if (diceRollBodyPartResult >= 16 && diceRollBodyPartResult <= 35) {
                    console.log(`${this.name} hit ${enemy.name} in the Right arm` )
                    return enemy.bodyPart['right arm']
                } else if (diceRollBodyPartResult >= 36 && diceRollBodyPartResult <= 55) {
                    console.log(`${this.name} hit ${enemy.name} in the Left arm`)
                    return enemy.bodyPart['left arm']
                } else if (diceRollBodyPartResult >= 56 && diceRollBodyPartResult <= 80) {
                    console.log(`${this.name} hit ${enemy.name} in the Torso`)
                    return enemy.bodyPart['torso']
                } else if (diceRollBodyPartResult >= 81 && diceRollBodyPartResult <= 90) {
                    console.log(`${this.name} hit ${enemy.name} in the Right leg`)
                    return enemy.bodyPart['right leg']
                } else if (diceRollBodyPartResult >= 91 && diceRollBodyPartResult <= 100) {
                    console.log(`${this.name} hit ${enemy.name} in the Left leg`)
                    return enemy.bodyPart['left leg']
                };
            };

            const enemyArmorPoints = getBodyPart().armor.armorPoints;
            const enemyArmorName = getBodyPart().name;

            console.log(enemyArmorName)
            // Calculate damage
            const damage = () => {
                 let damagePoints = (this.stats.strength - enemy.stats.thoughtness) - enemyArmorPoints + (this.weapon.modifier + this.weapon.modifier);
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
    constructor(name, race, hp, melee, ranged, dexterity, strength, thoughtness , speed, initiative, attacks, inteligence, charisma, weapon, inventory, description) {
        super(name, race, hp, melee, ranged, dexterity, strength, thoughtness , speed, initiative, attacks, inteligence, charisma, weapon, inventory, description);
    };

    showInventory() {
        this.inventory.forEach(item => {
            console.log(item.name);
        });
    };

    equipItem(item) {

        switch (item.type) {
            case 'armor':
                let playerBodyPartKeys = Object.keys(this.bodyPart);
    
                const getBodyPart = playerBodyPartKeys.find( (playerBodyPart) => { 
                    if (playerBodyPart === item.bodyPart) {
                        return playerBodyPart
                    }
                });
                this.bodyPart[getBodyPart].armor.item = item
                break;

            case 'weapon': 
                this.weapon = item;
                break;

            case 'potion':
                //todo 
                this.stats.hp += item.modifier;
                break;
            
            case 'utility': 
                //todo
                this.weapon = item
        }

        console.log(this)
        
    };

    pickUpItem(item) {
        this.inventory.push(item)
    }

};

class Monster extends Person {
    constructor(name, race, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, inteligence, charisma, weapon, inventory, description) {
        super(name, race, hp, melee, ranged, dexterity, strength, thoughtness, speed, initiative, attacks, inteligence, charisma, weapon, inventory, description);
    }


}



const persons = {
    player: new Player('Player','human', 10, 100, 25, 10, 5, 3, 3, 25, 1,20, 20, 20, items.weapons[0],[items.weapons[0]],'It\'s you the Player'),
    orc: new Monster('Orc','human', 10, 33, 10, 10, 4, 2, 2, 15, 1, 10, 20, 10, items.weapons[0],[items.weapons[0]], 'It\'s an Orc, he carries a weapon'),
    goblin: new Monster('Goblin','human', 5, 20, 10, 10, 2, 1, 2, 10, 1, 20, 10, 10, items.weapons[1],[items.weapons[0]], 'He looks skiny and crazy'),
    ogr: new Monster('Ogr','human', 5, 24, 10, 13, 3, 2, 2, 14, 1, 10, 20, 10, items.weapons[4], [items.weapons[0]], `a big and bulky Ogr. Looks intimidating`),
    skeleton: new Monster('Skeleton', 5, 20, 10, 2, 3, 2, 2, 10, 1, 10, 20, 0, items.weapons[4], [items.weapons[0]], `It's a reanimated skeleton`),
    lich: new Monster('Lich','human', 5, 35, 25, 15, 3, 3, 3, 25, 2, 40, 20, 10, items.weapons[2], [items.weapons[0]], `A powerfull Lich wearing thick and decorative robes with different symbols`)
}

export { persons, Person, Player, Monster};