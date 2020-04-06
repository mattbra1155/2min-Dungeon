
import {screen} from './index.js';
import {items} from './index.js';
import {level} from './index.js';
import {persons} from './index.js';
import {attack} from './index.js'
import {global} from './index.js';
import {turn} from './index.js';
import {itemGenerator} from './index.js'
import {CharacterGenerator ,races} from './index.js'




console.log(persons)
console.log(items)
console.log(level)
console.log(attack)
console.log(screen)
console.log(races[0].stats)
console.log(races[1].stats)
console.log(itemGenerator)
// INIT
level.changeRoom(1);
global.updatePersonHealth();

// Shows start screen
screen.startScreen();
/* global.populateInventory(); */

const fillItems = () => {
    const item = itemGenerator.createItem()

    switch (item.type) {
        case 'weapon':
            items.weapons.push(item)
            break;
        case 'potion': 
            items.potions.push(item)
            break;
        case 'utility': 
            items.utility.push(item)
            break;
        case 'armor':
            switch (item.bodyPart) {
                case 'head':
                    items.armors.head.push(item);
                    break;
                case 'hands':
                    items.armors.hands.push(item);
                    break;
                case 'torso':
                    items.armors.torso.push(item);
                    break;
                case 'legs':
                    items.armors.legs.push(item);
                    break;
            }
    }
}

const createItems = setInterval( fillItems, 100)
fillItems();

const stopCreating = () => {
    clearInterval(createItems)
    console.log(items)
}

setTimeout(stopCreating, 5000)
    
const player = new CharacterGenerator().createPlayer();

console.log(player)