import { MonsterGenerator, Player, CharacterGenerator } from './index.js';

class SceneEngine {
    constructor(currentScene) {
        this.currentScene = currentScene;
        this.currentSceneId = 0
    }

    sceneManager(currentScene) {

        switch (currentScene) {
            case 'start':
                console.log(`Start Menu`);
                this.startScreen();
                break;
            case 'characterCreation': 
                console.log(`Character creation`);
                new CharacterGenerator().createPlayer();
                break;
            case 'nextLevel':
                console.log(`Next level`);
                const level = this.createScene('level');
                this.currentScene = level
                console.log(level);
                break;
            case 'defeat':
                console.log(`Defeat`);
                break;
        };
    };

    createScene(type) {

        const attackbutton = document.querySelector('#attackButtonOne');
        const playerHealth = document.querySelector('#playerHp');
        const enemyHealth = document.querySelector('#monsterHp');
        attackbutton.disabled = true;

        if (type === 'level') {

            this.currentSceneId++

            // import player
            const getSavedPlayer = () => {
                const playerClass = new Player()
                const savedPlayer = localStorage.getItem('player');
                const parsed = JSON.parse(savedPlayer);
                // rebuild the object from data saved in Localstorage
                const rebuildObject = Object.assign(playerClass, parsed);

                return rebuildObject;
            }

            // create monster
            const monster = new MonsterGenerator().createMonster();

            // create descripton
            const description = () => {
                const generateDescription = `lorem ipsum`;
                return generateDescription
            }

            // create loot table??
            // todo

            // create next scene button 
            // todo

            // unload player
            // remove monster

            // return

            const level = {
                name: `level ${this.currentSceneId}`,
                player: getSavedPlayer(),
                monster: monster,
                description: description(),
                id: 33,
            };

            // UPDATE SCENE DETAILS

            // update level name 
            document.querySelector("#levelName").textContent = level.name;

            // update health
            playerHealth.textContent = level.player.stats.hp;
            enemyHealth.textContent = level.monster.stats.hp;

            // enable buttons
            attackbutton.disabled = false;
            
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

    inventory() {
        const inventoryPage = document.querySelector('#inventory');
        const inventoryButton = document.querySelector('#inventoryButton');
        const inventoryList = document.querySelector('#inventoryList')
        const inventoryCloseButton = document.querySelector('#inventoryCloseButton');
        
        const showInventory = () => {
            const createItemList = (item) => {
                // item row
                const listItem = document.createElement('li');
                listItem.setAttribute('class', 'inventory__item')
                listItem.textContent = item.name
                inventoryList.appendChild(listItem);

                // action button for row
                const useButton = document.createElement('button');
                useButton.setAttribute('class', 'item__button')
                switch (item.category) {
                    case 'armor': 
                        useButton.textContent = 'Wear';
                        break;
                    case 'weapon':
                        useButton.textContent = 'Equip';
                        break;
                    case 'potion':
                        useButton.textContent = 'Use';
                        break;
                    case 'utility':
                        useButton.textContent = 'Equip';
                        break;
                };
                //useButton.addEventListener('click', () => persons.player.equipItem(item));
                listItem.appendChild(useButton);
            };

            inventoryPage.style.display = 'flex';
            //persons.player.inventory.forEach( item => createItemList(item))
        };

        const closeInventory = () => {
            const inventoryItems = document.querySelectorAll('.inventory__item');
            inventoryItems.forEach( item => item.remove())
            inventoryPage.style.display = 'none';
        };

        inventoryButton.addEventListener('click', showInventory);
        inventoryCloseButton.addEventListener('click', closeInventory);
    };

    startScreen() {
        document.addEventListener('DOMContentLoaded', (e) => {
            e.preventDefault();
            const overlayscreen = document.createElement('div');
            overlayscreen.setAttribute('class', 'overlay start-screen');

            const header = document.createElement('h1');
            header.setAttribute('class', 'text--white text--center');
            header.textContent = `2 MINUTE DUNGEON`;
            overlayscreen.appendChild(header);

            const button = document.createElement('button');
            button.textContent = "START";
            button.setAttribute('id', 'startButton');
            button.setAttribute('class', 'action__button');
            overlayscreen.appendChild(button);

            const app = document.querySelector('#app');
            app.appendChild(overlayscreen);

            const startButton = document.querySelector('#startButton');
            startButton.addEventListener('click', e => {
                e.preventDefault();
                overlayscreen.remove();  
                 if (!localStorage.getItem('player')) {
                    sceneEngine.sceneManager('characterCreation');     
                } else {
                    sceneEngine.sceneManager('nextLevel')
                }
                
            });
        });
    };

};

const sceneEngine = new SceneEngine()

export { sceneEngine }