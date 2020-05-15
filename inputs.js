import { sceneEngine, turn } from './index.js';



/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

const attack = attackButton.addEventListener('click', e => {

    const level = sceneEngine.currentScene;

    e.preventDefault();
    e.stopPropagation();

    if (level.player.isAlive) {
        turn.playerTurn();
    }
    
    
    //change to enemy turn
    if (level.monster.isAlive) {
        const attackDelay = setTimeout(() => turn.enemyTurn(), 1500);
    } 
});

// show inventory page
//screen.inventory();



export {attack, attackButton}