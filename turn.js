import { global, persons, attack, level, attackButton, screen } from "./index.js";

class Turn {
    constructor(name) {
        this.name = name;
        this.turns = [];
    }

    checkRoom(monster) {
        if (monster.isAlive = true) {
            global.combat = true;
        };
    };

    turnNumberOne() {
        this.turnNumber++
        const turn = document.querySelector('#turnNumber');
        turn.textContent = this.turnNumber;
    };

    initiativeRoll(player, monster) {
        const monsterResult = global.diceRoll(1,100);
        const playerResult = global.diceRoll(1,100);
    };

    playerTurn() {
        persons.player.attack(level.monster)
        attackButton.disabled = true;
        global.updatePersonHealth();
        global.checkIfAlive(level.monster)
        persons.player.isActive = false;
        console.log(`end of Player turn`);
    };

    enemyTurn() {
        console.log(`changed to monster turn`);
        level.monster.attack(persons.player)
        global.updatePersonHealth();
        global.checkIfAlive(level.monster);
        level.monster.isActive = false;
        attackButton.disabled = false;
        console.log(`end of Monster turn`);
        console.log(`changed to Player turn`);
    };

    
};

const turn = new Turn ('turn');



export { turn };