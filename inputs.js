import {level, persons} from '/index.js';


/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

const attack = attackButton.addEventListener('click', e => {
    e.preventDefault;
    //player turn
    if (persons.player.alive) {
        persons.player.attack(level.monster)
        persons.player.checkIfAlive(level.monster)
        persons.player.turnActive = false;
        attackButton.disabled = true;
        level.monster.turnActive = true;
    } 
});

export {attack, attackButton}