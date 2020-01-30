import {level, persons, turn, global} from './index.js';


/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

const attack = attackButton.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    persons.player.attack(level.monster)
    attackButton.disabled = true;
    global.updatePersonHealth();
    global.checkIfAlive(level.monster)
    persons.player.isActive = false;
    console.log(`end of Player turn`);

    //change to enemy turn
    console.log(`changed to monster turn`);
    level.monster.attack(persons.player)
    global.updatePersonHealth();
    global.checkIfAlive(level.monster);
    level.monster.isActive = false;
    attackButton.disabled = false;
    console.log(`end of Monster turn`);
    console.log(`changed to Player turn`);
});

export {attack, attackButton}