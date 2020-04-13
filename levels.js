import {persons, screen, MonsterGenerator, Player} from './index.js';
import { global } from './global.js';
import { CharacterGenerator } from './generators/characterGenerator.js';

class SceneEngine {
    constructor() {}

    sceneManager() {
        // start screen

        screen.startScreen()

        // craete player
        if (localStorage.getItem('player')) {
            const createPlayer = new CharacterGenerator().createPlayer();

            return createPlayer;
        } else {
            // load level
            return this.createScene('level')
        }
    }

    createScene(type) {
        const attackbutton = document.querySelector('#attackButtonOne');
        const playerHealth = document.querySelector('#playerHp');
        const enemyHealth = document.querySelector('#monsterHp');
        attackbutton.disabled = true;
        if (type === 'level') {

            // import player
            const getSavedPlayer = () => {
                const playerClass = new Player()
                const savedPlayer = localStorage.getItem('player');
                const parsed = JSON.parse(savedPlayer);
                // rebuild the object from data saved in Localstorage
                const rebuildObject = Object.assign(playerClass, parsed);

                return rebuildObject;
            }

            persons.player = getSavedPlayer();

            // create monster
            const monster = new MonsterGenerator().createMonster();

            console.log(monster)

            // create descripton
            const description = () => {
                const generateDescription = `lorem ipsum`;
            }

            // create loot table??
            // todo

            // update health
            playerHealth.textContent = persons.player.stats.hp;
            enemyHealth.textContent = monster.stats.hp;

            // enable buttons
            attackbutton.disabled = false;

            // create next scene button 
            // todo

            // return

            const level = {
                player: player,
                monster: monster,
                description: description,
                id: 33,
            };

            return level;
        }
        if (type === 'screen') {

            // unload all assets

            // create screen

            // show message/description

            // create next scene button

            return screen;
        };
    };
};

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

const sceneEngine = new SceneEngine()

export {level, sceneEngine}