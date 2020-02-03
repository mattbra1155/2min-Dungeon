<<<<<<< HEAD
import {level, persons, turn, global} from './index.js';
=======
import {level, persons, turn, screen} from './index.js';
>>>>>>> 053c0c05aa23ceb83850dbb12b5397ffcd716010


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
