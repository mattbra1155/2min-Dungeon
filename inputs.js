import {level, persons, turn, screen} from '/index.js';


/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

const attack = attackButton.addEventListener('click', e => {
    e.preventDefault();
    persons.player.attack(level.monster)
    attackButton.disabled = true;
    persons.player.checkIfAlive(level.monster)
    persons.player.turnActive = false;
    persons.player.turnEnd = true;
    console.log(`end of player turn`);

    //change to enemy turn
    if (level.monster.turnEnd === false && level.monster.alive === true) {
        console.log(`changed to monster turn`);
        turn.monsterTurn();
    }  else if (level.monster.turnEnd === true) {
        turn.runTurn();
    }
});

export {attack, attackButton}