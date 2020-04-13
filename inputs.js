import {level, persons, turn, screen} from './index.js';


/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

const attack = attackButton.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (persons.player.isAlive) {
        turn.playerTurn();

    }
    
    //change to enemy turn
    if (level.monster.isAlive) {
        const attackDelay = setTimeout(() => turn.enemyTurn(), 1500);
    }
});

// show inventory page
screen.inventory();



export {attack, attackButton}