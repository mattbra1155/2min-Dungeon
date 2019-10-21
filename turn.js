import { global } from "/index.js";

class Turn {
    constructor(name) {
        this.name = name;
        this.turnNumber = 0
    }

    checkRoom(monster) {
        if (monster.alive = true) {
            global.combat = true;
            attackButton.disabled = "false";
        };
    };

    turnNumber() {
        this.turnNumber++
    };

    initiativeRoll(player, monster) {
        const monsterResult = global.diceRoll(1,100);
        const playerResult = global.diceRoll(1,100);

        if (playerResult >= monsterResult) {
            return player.turnActive = true;
        } else {
            return monster.turnActive = true;
        };
    };

}

const turn = new Turn ('turn');

export { turn };