import {playerHealth, enemyHealth} from '/ui.js';
import {items} from '/items.js';
import {level} from '/levels.js';
import {persons} from '/characters.js';
import {attack} from '/inputs.js'

console.log(persons)
console.log(items)
console.log(level)
console.log(attack)


// INIT
level.changeRoom(1);
let updatePersonHealth = () => {
    playerHealth.textContent = persons.player.hp;
    enemyHealth.textContent = level.monster.hp;
}
updatePersonHealth();