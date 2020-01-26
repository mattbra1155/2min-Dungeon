import { global, persons, attack, level, attackButton, screen } from "./index.js";

class Turn {
    constructor(name) {
        this.name = name;
        this.turnNumber = 0
    }

    checkRoom(monster) {
        if (monster.alive = true) {
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
};

const turn = new Turn ('turn');



export { turn };