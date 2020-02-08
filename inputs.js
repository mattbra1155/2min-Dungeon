import {level, persons, turn} from './index.js';


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

const inventoryList = document.querySelector('#inventoryList');
persons.player.inventory.forEach(item => {
    const inventoryItem = document.createElement('li');
    inventoryItem.setAttribute('class', 'inventory__item');
    inventoryItem.textContent = item.name; 
    inventoryList.appendChild(inventoryItem);

    const equipButton = document.createElement('button');
    equipButton.setAttribute('class', 'button');
    equipButton.setAttribute('value', item.name)
    equipButton.textContent = "equip"

    equipButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        item.equipItem(item);
        console.log(persons.player.bodyPart)
    });
    inventoryItem.appendChild(equipButton);

}); 


export {attack, attackButton}