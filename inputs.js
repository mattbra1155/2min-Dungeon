import {level, persons} from '/index.js';


/// INPUTS
const attackButton = document.querySelector('#attackButtonOne');

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

export {attack, attackButton}