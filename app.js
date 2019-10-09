
import {playerHealth, enemyHealth, screen} from '/ui.js';
import {items} from '/items.js';
import {level} from '/levels.js';
import {persons} from '/characters.js';
import {attack} from '/inputs.js'


console.log(persons)
console.log(items)
console.log(level)
console.log(attack)
console.log(screen)
console.log()

// INIT
level.changeRoom(1);
let updatePersonHealth = () => {
    playerHealth.textContent = persons.player.hp;
    enemyHealth.textContent = level.monster.hp;
}

// Shows health score
updatePersonHealth();

// Shows start screen
screen.startScreen();

