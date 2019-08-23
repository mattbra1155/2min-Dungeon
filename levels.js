import {persons} from '/characters.js';

class room { 
    constructor(id, name, monster) {
        this.id = id;
        this.name = name;
        this.monster = monster;
    }
    // change room by selecting an ID
    changeRoom(id = 1) {

        const LevelName = document.querySelector('#levelName');

        if (id == 1) {
            level = level1;
            this.monsterInRoom(level.monster);
            LevelName.textContent = level.name;
        } else if (id == 2) {
            level = level2;
            this.monsterInRoom(level.monster);
            LevelName.textContent = level.name;
        } else if (id == 3) {
            level = level3;
            this.monsterInRoom(level.monster);
            LevelName.textContent = level.name;
        }
    };
    // choose what monster will be in a room
    monsterInRoom(monster) {
        this.monster = monster;
        const monsterName = document.querySelector('#monsterName');
        monsterName.textContent = this.monster.name;
    };
}

let level = new room (0, 'Global level', '');
const level1 = new room (1 ,'First level', persons.orc);
const level2 = new room (2 ,'Second level', persons.goblin);
const level3 = new room (3 ,'Third level', persons.ogr);

export {level}