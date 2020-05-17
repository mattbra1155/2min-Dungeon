import { sceneEngine, turn } from './index.js';



/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');
const inventoryButton = document.querySelector("#inventoryButton");
const inventoryScreen = document.querySelector('#inventory')

const attack = attackButton.addEventListener('click', e => {

    const level = sceneEngine.currentScene;

    e.preventDefault();
    e.stopPropagation();

    if (level.player.isAlive && level.monster.isAlive) {
        turn.playerTurn();
    }
    
    
    //change to enemy turn
    if (level.monster.isAlive && level.player.isAlive) {
        const attackDelay = setTimeout(() => turn.enemyTurn(), 1200);
    } 
});

// OPEN INVENTORY

/* inventoryButton.addEventListener('click', event => {
   console.log( sceneEngine.inventory())
}); */
export {attack, attackButton}