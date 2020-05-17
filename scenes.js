import { MonsterGenerator, Player, CharacterGenerator } from './index.js';
import { ItemGenerator } from './generators/itemGenerator.js';
import { Weapon, Armor, Utility, Potion } from './models/items.js';

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
                document.querySelectorAll(".feed__item").forEach(item => item.remove())
                this.currentScene = level;
                this.inventory();
                console.log(level);
                break;
            case 'defeat':
                console.log(`Defeat`);
                const defeat = this.createScene('screen');
                this.currentScene = defeat;
                break;
            case 'win':
                console.log(`Cleard level`);
                const win = this.createScene('win');
                this.currentScene = win;
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

            const level = {
                name: `level ${this.currentSceneId}`,
                player: getSavedPlayer(),
                monster: monster,
                description: description(),
                id: 33,
            };

            // SAVE LEVEL
            const savedLevel = JSON.stringify(level);
            localStorage.setItem(`${level.name}`, savedLevel);

            // UPDATE SCENE DETAILS

            // update level name 
            document.querySelector("#levelName").textContent = level.name;

            // update health
            playerHealth.textContent = level.player.stats.hp;
            enemyHealth.textContent = level.monster.stats.hp;

            // enable buttons
            attackbutton.disabled = false;

            // return
            return level
        }
        if (type === 'win') {

            //this.currentSceneId++

            // unload all assets
            console.log(this)
            // create screen
            const body = document.querySelector("body")
            const background = document.createElement("div");
            const header = document.createElement("h2");
            const paragraf = document.createElement("p");
            const button = document.createElement("button");

            const getSavedLevel = () => {
                const getLevel = localStorage.getItem(`level ${this.currentSceneId}`)
                const parse = JSON.parse(getLevel);
                return parse
            }

            console.log(getSavedLevel())


            const getSavedPlayer = () => {
                const playerClass = new Player()
                const savedPlayer = localStorage.getItem('player');
                const parsed = JSON.parse(savedPlayer);
                // rebuild the object from data saved in Localstorage
                const rebuildObject = Object.assign(playerClass, parsed);

                return rebuildObject;
            } 


            const win = {
                player: getSavedPlayer(),
                monster: getSavedLevel().monster,
                levelName: getSavedLevel().name,
                //loot: loot
            }

            // show message/description
            background.setAttribute("id", 'winScreen');
            background.setAttribute("class", 'overlay');

            body.appendChild(background);

            header.setAttribute('class', 'header text--white');
            header.textContent = `You defeated the ${win.monster.name}`

            background.appendChild(header)

            paragraf.setAttribute('class', 'text text--white');
            paragraf.textContent = `loot the corpse`

            background.appendChild(paragraf)
            // create next scene button
            button.setAttribute('class', 'button action__button');
            button.textContent = `Loot`;

            background.appendChild(button)

            const roolRandomItem = () => {
                const rollLoot = () => {
                    const item = new ItemGenerator().createItem('weapon');

                    return item
                }

                const dropedItem = rollLoot();

                win.player.inventory.push(dropedItem);

                paragraf.textContent = `You found a ${dropedItem.name}!`
                // save player 
                const parsedPlayer = JSON.stringify(win.player);
                localStorage.setItem('player', parsedPlayer)

                console.log(win.player)


                button.removeEventListener('click', roolRandomItem);

                button.textContent = `Venture deeper into the dungeon`

                button.addEventListener("click", event => {
                    console.log("CLICK")
                    background.remove();
                    sceneEngine.sceneManager("nextLevel");
                })

            }

            button.addEventListener('click', roolRandomItem)
            

            console.log(win)

            return win;
        };
    };

    inventory() {
        const inventoryPage = document.querySelector('#inventory');
        const inventoryButton = document.querySelector('#inventoryButton');
        const inventoryList = document.querySelector('#inventoryList')
        const inventoryCloseButton = document.querySelector('#inventoryCloseButton');
        

        const level = this.currentScene;
        
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
                useButton.addEventListener('click', (event) => {

                    const removeInventoryList = () => {
                        const inventoryItems = document.querySelectorAll('.inventory__item');
                        inventoryItems.forEach( item => item.remove())
                    }
                    // check the item category
                    if (item.category === 'weapon') {
                        if (level.player.weapon !== '') {
                            // get the item that is already in use from character
                            level.player.inventory.push(level.player.weapon);
                        }
                        // remove all item form DOM inventory to update it
                        removeInventoryList();
                    }
                    if (item.category === 'armor') {
                        if (level.player.bodyPart[item.bodyPart].armor.item !== '') {
                            level.player.inventory.push(level.player.bodyPart[item.bodyPart].armor.item)
                        }
                        removeInventoryList();
                    }
                    // remove equiped item from inventory, return a new array without the equiped item
                    const updatedInventory = level.player.inventory.filter( elem => elem !== item )
                    // equip item on character
                    level.player.equipItem(item);
                    // rerender the inventory with the item from character in the inventory and the equiped item removed from inventory
                    updatedInventory.forEach( item => createItemList(item))
                    // assign the updated inventory to the player inventory
                    level.player.inventory = updatedInventory;
                });

                listItem.appendChild(useButton);
            };
            inventoryButton.disabled = true;
            inventoryPage.style.display = 'flex';

            /// NOT WORKING PROPERLY - ITEM in INVENTORY IS NOT A CLASS
            level.player.inventory.forEach( item => {
                switch (item.category) {
                    case "weapon":
                        const weapon = new Weapon();
                        Object.assign(weapon, item )
                        console.log(weapon)
                        createItemList(weapon)
                        break;
                    case 'armor':
                        const armor = new Armor();
                        Object.assign(armor, item )
                        createItemList(armor)
                        break;
                    case 'potion':
                        const potion = new Potion();
                        Object.assign(potion, item )
                        createItemList(potion)
                        break;
                    case 'utility':
                        const utility = new Utility();
                        Object.assign(utility, item )
                        createItemList(utility)
                        break;

                }
                
            })
            console.log(level.player.inventory)
        };

        const closeInventory = () => {
            const inventoryItems = document.querySelectorAll('.inventory__item');
            inventoryItems.forEach( item => item.remove())
            inventoryPage.style.display = 'none';
            inventoryButton.disabled = false;
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