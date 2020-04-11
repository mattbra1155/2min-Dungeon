
import {screen} from './index.js';
import {items} from './index.js';
import {level} from './index.js';
import {persons} from './index.js';
import {attack} from './index.js'
import {global} from './index.js';
import {turn} from './index.js';
import {ItemGenerator} from './index.js'
import {CharacterGenerator, MonsterGenerator,races} from './index.js'



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
    
const player = new CharacterGenerator().createPlayer();

const monster = new MonsterGenerator().createMonster();

const item = new ItemGenerator().createItem('armor')

console.log(item)

persons.player.inventory.push(item);

console.log(item)
console.log(player);
console.log(monster);