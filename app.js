
import {screen} from './index.js';
import {items} from './index.js';
import {level} from './index.js';
import {persons} from './index.js';
import {attack} from './index.js'
import {global} from './index.js';
import {turn} from './index.js';
import {ItemGenerator} from './index.js'
import {CharacterGenerator, MonsterGenerator, races} from './index.js'
import { Player } from './characters.js';


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


    
const createPlayer = new CharacterGenerator().createPlayer();

const createMonster = new MonsterGenerator().createMonster();

const createItem = new ItemGenerator().createItem('weapon')

persons.player.inventory.push(createItem);

console.log(createPlayer);
console.log(createMonster);
console.log(createItem);

const getSavedPlayer = () => {
    const playerClass = new Player()
    const savedPlayer = localStorage.getItem('player');
    const parsed = JSON.parse(savedPlayer);
    // rebuild the object from data saved in Localstorage
    const rebuildObject = Object.assign(playerClass, parsed);

    return rebuildObject
}

const player = getSavedPlayer();

player.pickUpItem(createItem)

console.log(player)