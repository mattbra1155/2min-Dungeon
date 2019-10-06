<<<<<<< HEAD
import {persons} from '/characters.js';
import {screen} from '/ui.js';
class Room { 
    constructor(id, name, monster) {
        this.id = id;
        this.name = name;
        this.monster = monster;
    }
    // change room by selecting an ID
    changeRoom(id) {

        const levelName = document.querySelector('#levelName');

        if (id === 1) {
            level = level1;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 2) {
            level = level2;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 3) {
            level = level3;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 4) {
            level = level4;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 5) {
            level = level5;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id > 5) {
            screen.winScreen();
        }

        
    };
    // choose what monster will be in a room
    monsterInRoom(monster) {
        this.monster = monster;
        const monsterName = document.querySelector('#monsterName');
        monsterName.textContent = this.monster.name;
    };
}

let level = new Room (0, 'Global level', '');
const level1 = new Room (1 ,'First level', persons.orc);
const level2 = new Room (2 ,'Second level', persons.goblin);
const level3 = new Room (3 ,'Third level', persons.ogr);
const level4 = new Room (4 ,'Fourth level', persons.skeleton);
const level5 = new Room (5 ,'Fifth level', persons.lich);

=======
import {persons} from '/characters.js';
import {screen} from '/ui.js';
class Room { 
    constructor(id, name, monster) {
        this.id = id;
        this.name = name;
        this.monster = monster;
    }
    // change room by selecting an ID
    changeRoom(id) {

        const levelName = document.querySelector('#levelName');

        if (id === 1) {
            level = level1;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 2) {
            level = level2;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 3) {
            level = level3;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 4) {
            level = level4;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id === 5) {
            level = level5;
            this.monsterInRoom(level.monster);
            levelName.textContent = level.name;
        } else if (id > 5) {
            screen.winScreen();
        }

        
    };
    // choose what monster will be in a room
    monsterInRoom(monster) {
        this.monster = monster;
        const monsterName = document.querySelector('#monsterName');
        monsterName.textContent = this.monster.name;
    };
}

let level = new Room (0, 'Global level', '');
const level1 = new Room (1 ,'First level', persons.orc);
const level2 = new Room (2 ,'Second level', persons.goblin);
const level3 = new Room (3 ,'Third level', persons.ogr);
const level4 = new Room (4 ,'Fourth level', persons.skeleton);
const level5 = new Room (5 ,'Fifth level', persons.lich);

>>>>>>> de36556f6f1f23d77f9d65f26e408742fbd7f3d8
export {level}