import {level} from '/levels.js';
import {persons} from '/characters.js';
import {screen} from '/ui.js';


/// INPUTS
const attackButton = document.querySelector('#attackButton');
const turnButton = document.querySelector('#turnButton');
const inventoryButton = document.querySelector('#inventoryButton');
const inventoryItem = document.querySelectorAll('.inventoryItem');

const attack = attackButton.addEventListener('click', e => {
    e.preventDefault;
    //player turn
    if (persons.player.alive) {
        persons.player.attack(level.monster)
        persons.player.checkIfAlive(level.monster)
        
        attackButton.disabled = true;
        setTimeout(e => {
            attackButton.disabled = false;
        }, 500)
    } 
    //enemy turn
    if (level.monster.alive) {
        setTimeout(e => {
            level.monster.attack(persons.player)
            level.monster.checkIfAlive(persons.player)
        }, 500)
    }

    
});

export {attack}