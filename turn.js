import { global, persons, attack, level, attackButton } from "/index.js";

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
    };

    initiativeRoll(player, monster) {
        const monsterResult = global.diceRoll(1,100);
        const playerResult = global.diceRoll(1,100);
        
        console.log(`monster result = ${monsterResult}`)
        console.log(`player result = ${playerResult}`)

        if (playerResult >= monsterResult) {
            console.log(`player turn`)
            return player.turnActive = true;
            
        } else {
            console.log(`monster turn`)
            return monster.turnActive = true;
        };
    };

    runTurn() {
        this.checkRoom(level.monster);

        if (global.combat === true) {
            this.turnNumberOne();
            console.log(`turn number: ${this.turnNumber}`)
            this.initiativeRoll(persons.player, level.monster);
            //player turn
            if (persons.player.alive === true && persons.player.turnActive === true) {
                console.log(`player input`)
                persons.player.attack(level.monster)
                persons.player.checkIfAlive(level.monster)
                persons.player.turnActive = false;
                attackButton.disabled = true;
                level.monster.turnActive = true;
            };
            //enemy turn
            if (level.monster.alive === true && level.monster.turnActive === true) {
                level.monster.attack(persons.player);
                level.monster.checkIfAlive(persons.player);
                level.monster.turnActive = false;
                persons.player.turnActive = true;
            }; 
        }
        if (persons.player.alive === true && level.monster.alive === true) {
            this.runTurn();
        }
        
    }

}

const turn = new Turn ('turn');



export { turn };