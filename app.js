
import {screen} from './index.js';
import {items} from './index.js';
import {level} from './index.js';
import {persons} from './index.js';
import {attack} from './index.js'
import {global} from './index.js';
import {turn} from './index.js';



console.log(persons)
console.log(items)
console.log(level)
console.log(attack)
console.log(screen)
console.log(turn.turns)
// INIT
level.changeRoom(1);
global.updatePersonHealth();

// Shows start screen
screen.startScreen();

//persons.player.equipItem(items.armors.torso.studedLeather)

//console.log(persons.player.inventory)

//localStorage.setItem("player", JSON.stringify(persons.player))