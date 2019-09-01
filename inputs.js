import {level} from '/levels.js';
import {persons} from '/characters.js';
import {SCREEN} from '/ui.js';


/// INPUTS
const attackButton = document.querySelector('#attackButton');
const turnButton = document.querySelector('#turnButton');
const inventoryButton = document.querySelector('#inventoryButton');
const inventoryItem = document.querySelectorAll('.inventoryItem');

const attack = attackButton.addEventListener('click', function(e) {
    e.preventDefault;
    //player turn
    if (persons.player.alive) {
        persons.player.attack(level.monster)
        attackButton.disabled = true;
        setTimeout(e => {
            attackButton.disabled = false;
        }, 500)
    } else {
        SCREEN.loseScreen();
    }
    //enemy turn
    if (level.monster.alive) {
        setTimeout(e => {
            level.monster.attack(persons.player)
        }, 500)
    } else {
        SCREEN.winScreen();
    }

    
});

export {attack}