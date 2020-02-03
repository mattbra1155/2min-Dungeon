
import {screen} from '/2min-Dungeon/index.js';
import {items} from '/2min-Dungeon/index.js';
import {level} from '/2min-Dungeon/index.js';
import {persons} from '/2min-Dungeon/index.js';
import {attack} from '/2min-Dungeon/index.js'
import {global} from '/2min-Dungeon/index.js';
import {turn} from '/2min-Dungeon/index.js' 



console.log(persons)
console.log(items)
console.log(level)
console.log(attack)
console.log(screen)
console.log(items.armors)
/* console.log(turn) */
// INIT
level.changeRoom(1);
global.updatePersonHealth();

// Shows start screen
screen.startScreen();

persons.player.bodyPart['torso'].armor.item = items.armors.chainmail

console.log(turn.turns)