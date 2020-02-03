import {level, persons, turn, screen} from './index.js';


/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

const attack = attackButton.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (persons.player.alive) {
        turn.playerTurn();
    }
    

    //change to enemy turn
    if (level.monster.alive) {
        const attackDelay = setTimeout(() => turn.enemyTurn(), 1500);
    }

});

export {attack, attackButton}
