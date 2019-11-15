import { global, persons, attack, level, attackButton, screen } from "/index.js";

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
        
        console.log(`monster result = ${monsterResult}`);
        console.log(`player result = ${playerResult}`);
        player.turnEnd = false;
        monster.turnEnd = false;

        if (playerResult >= monsterResult) {
            console.log(`player turn`);
            player.turnActive = true;
            
            this.playerTurn();

        } else if ( monsterResult >= playerResult) {
            console.log(`monster turn`);
            monster.turnActive = true;
            
            this.monsterTurn();
        }
    };

    playerTurn() {
        console.log(persons.player)
        if (persons.player.alive === true) {
            attackButton.disabled = false;
            console.log(`waiting for player input`);
        } 
    };

    monsterTurn() {
        console.log(level.monster)
        if (level.monster.alive === true) {
            level.monster.attack(persons.player);
            level.monster.checkIfAlive(persons.player);
            level.monster.turnActive = false;
            level.monster.turnEnd = true;
            console.log(`end of monster turn`);
            persons.player.turnActive = true;
            console.log(`changed to player turn`);
            //change to player turn
            if (persons.player.turnEnd === false && persons.player.alive === true) {
                this.playerTurn();
            } else if (persons.player.turnEnd === true) {
                this.runTurn();
            }
        }
    };


    runTurn() {
        this.checkRoom(level.monster);

        if (global.combat === true) {
            this.turnNumberOne();
            console.log(`turn number: ${this.turnNumber}`)
            this.initiativeRoll(persons.player, level.monster);
        };
    };
};

const turn = new Turn ('turn');



export { turn };