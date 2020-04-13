
import {screen} from './index.js';
import {items} from './index.js';
import {level} from './index.js';
import {persons} from './index.js';
import {attack} from './index.js'
import {global} from './index.js';
import {turn} from './index.js';
import {ItemGenerator} from './index.js'
import {MonsterGenerator} from './index.js'
import {sceneEngine} from './index.js'



console.log(persons)
console.log(items)
console.log(level)
console.log(attack)
console.log(screen)

// INIT
// Shows start screen

const sceneManger = sceneEngine.sceneManager()

console.log(sceneManger)
//screen.startScreen();

const newItem = new ItemGenerator().createItem('weapon')

console.log(newItem)

// SET LEVEL 
