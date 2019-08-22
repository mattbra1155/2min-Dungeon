import {level} from '/levels.js';
import {persons} from '/characters.js';

/// INPUTS
let attackButton = document.querySelector('#attackButton');
let turnButton = document.querySelector('#turnButton');
let inventoryButton = document.querySelector('#inventoryButton');
let inventoryItem = document.querySelectorAll('.inventoryItem');

let attack = attackButton.addEventListener('click', function(e) {
    e.preventDefault;
    //player turn
    if (persons.player.hp > 0) {
        persons.player.attack(level.monster)
    }
    //enemy turn
    if (level.monster.hp > 0) {
        level.monster.attack(persons.player)
    }
});

export {attack}