import {persons} from '/characters.js';



class room { 
    constructor(id, name, monster) {
        this.id = id;
        this.name = name;
        this.monster = monster;
    }
    // change room by selecting an ID
    changeRoom(id = 1) {

        let LevelName = document.querySelector('#levelName');

        if (id == 1) {
            level = level;
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
    }
    // choose what monster will be in a room
    monsterInRoom(monster) {
        this.monster = monster;
        let monsterName = document.querySelector('#monsterName');
        monsterName.textContent = this.monster.name;
    }
}


let level = new room (1 ,'First level', persons.orc);
let level2 = new room (2 ,'Second level', persons.goblin);
let level3 = new room (3 ,'Third level', persons.player);

export {level, level2}