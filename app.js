
import {screen} from './index.js';
import {items, ArmorGenerator} from './index.js';
import {level} from './index.js';
import {persons} from './index.js';
import {attack} from './index.js'
import {global} from './index.js';
import {turn} from './index.js';
/* import {popInventory} from './index.js'; */



console.log(persons)
console.log(items)
console.log(level)
console.log(attack)
console.log(screen)
// INIT
level.changeRoom(1);
global.updatePersonHealth();

// Shows start screen
screen.startScreen();
global.populateInventory();

const createdItem = new ArmorGenerator('chainmail', 'old', 2, 'torso') 
console.log(createdItem)

persons.player.pickUpItem(createdItem)

persons.player.equipItem(createdItem)

console.log(persons.player.inventory)

//console.log(persons.player.inventory)

//localStorage.setItem("player", JSON.stringify(persons.player))