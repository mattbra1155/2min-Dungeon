class SceneEngine {
    constructor(currentScene) {
        this.currentScene = currentScene
        this.currentSceneId = 0
    }

    createScene(type) {
       
        attackbutton.disabled = true

        if (type === 'level') {
            this.currentSceneId++

            // import player
            const getSavedPlayer = () => {
                const playerClass = new Player()
                const savedPlayer = localStorage.getItem('player')
                const parsed = JSON.parse(savedPlayer)
                // rebuild the object from data saved in Localstorage
                const rebuildObject = Object.assign(playerClass, parsed)
                // rebuild object from inventory to add CLASS
                const updatedInv = rebuildObject.inventory.map(item => {
                    switch (item.category) {
                        case 'weapon': {
                            const weapon = new Weapon()
                            Object.assign(weapon, item)
                            return weapon
                        }

                        case 'armor': {
                            const armor = new Armor()
                            Object.assign(armor, item)
                            return armor
                        }

                        case 'potion': {
                            const potion = new Potion()
                            Object.assign(potion, item)
                            return potion
                        }

                        case 'utility': {
                            const utility = new Utility()
                            Object.assign(utility, item)
                            return utility
                        }
                    }
                })

                rebuildObject.inventory = updatedInv
                return rebuildObject
            }

            // create monster
            /// MONSTER IS NOT GENERATING IT JUST UPDATES THE BESTAIRY VALUES!!!!
            const generateMonster = () => new MonsterGenerator().createMonster()

            // create descripton
            const description = () => {
                const generateDescription = `lorem ipsum`
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
                monster: generateMonster(),
                description: description(),
                id: this.currentSceneId
            }

            console.log(level.player)

            // SAVE LEVEL
            const savedLevel = JSON.stringify(level)
            localStorage.setItem(`${level.name}`, savedLevel)

            // UPDATE SCENE DETAILS

            // update level name
            document.querySelector('#levelName').textContent = level.name

            // update health
            playerHealth.textContent = level.player.stats.hp
            enemyHealth.textContent = level.monster.stats.hp

            // enable buttons
            attackbutton.disabled = false

            // return
            return level
        }
        if (type === 'win') {
            //this.currentSceneId++

            // unload all assets
            console.log(this)
            // create screen
            const body = document.querySelector('body')
            const background = document.createElement('div')
            const header = document.createElement('h2')
            const paragraf = document.createElement('p')
            const button = document.createElement('button')

            const getSavedLevel = () => {
                const getLevel = localStorage.getItem(
                    `level ${this.currentSceneId}`
                )
                const parse = JSON.parse(getLevel)
                return parse
            }

            console.log(getSavedLevel())

            const getSavedPlayer = () => {
                const playerClass = new Player()
                const savedPlayer = localStorage.getItem('player')
                const parsed = JSON.parse(savedPlayer)
                // rebuild the object from data saved in Localstorage
                const rebuildObject = Object.assign(playerClass, parsed)

                return rebuildObject
            }

            const win = {
                player: getSavedPlayer(),
                monster: getSavedLevel().monster,
                levelName: getSavedLevel().name
                //loot: loot
            }

            // show message/description
            background.setAttribute('id', 'winScreen')
            background.setAttribute('class', 'overlay')

            body.appendChild(background)

            header.setAttribute('class', 'header text--white')
            header.textContent = `You defeated the ${win.monster.name}`

            background.appendChild(header)

            paragraf.setAttribute('class', 'text text--white')
            paragraf.textContent = `loot the corpse`

            background.appendChild(paragraf)
            // create next scene button
            button.setAttribute('class', 'button action__button')
            button.textContent = `Loot`

            background.appendChild(button)

            const roolRandomItem = () => {
                const rollLoot = () => {
                    const item = new ItemGenerator().createItem('weapon')

                    return item
                }

                const dropedItem = rollLoot()

                win.player.inventory.push(dropedItem)

                paragraf.textContent = `You found a ${dropedItem.name}!`
                // save player
                const parsedPlayer = JSON.stringify(win.player)
                localStorage.setItem('player', parsedPlayer)

                console.log(win.player)

                button.removeEventListener('click', roolRandomItem)

                button.textContent = `Venture deeper into the dungeon`

                button.addEventListener('click', () => {
                    console.log('CLICK')
                    background.remove()
                    sceneEngine.sceneManager('nextLevel')
                })
            }

            button.addEventListener('click', roolRandomItem)

            console.log(win)

            return win
        }

        if (type === 'defeat') {
            const getSavedLevel = () => {
                const getLevel = localStorage.getItem(
                    `level ${this.currentSceneId}`
                )
                const parse = JSON.parse(getLevel)
                return parse
            }

            console.log(getSavedLevel())

            const level = getSavedLevel()

            console.log('in defeat')
            const body = document.querySelector('body')
            const background = document.createElement('div')
            const header = document.createElement('h2')
            const paragraf = document.createElement('p')
            const button = document.createElement('button')

            // show message/description
            background.setAttribute('id', 'defeatScreen')
            background.setAttribute('class', 'overlay')

            body.appendChild(background)

            header.setAttribute('class', 'header text--white')
            header.textContent = `You were slain by ${level.monster.name}`

            background.appendChild(header)

            paragraf.setAttribute('class', 'text text--white')
            paragraf.textContent = `Try your luck again?`

            background.appendChild(paragraf)
            // create next scene button
            button.setAttribute('class', 'button action__button')
            button.textContent = `Create character!`

            background.appendChild(button)

            background.style.display = 'flex'

            button.addEventListener('click', () => {
                window.location.href =
                    'https://mattbra1155.github.io/2min-Dungeon/'
            })
        }
    }

    showInventory() {
        const inventoryPage = document.querySelector('#inventory')
        const inventoryButton = document.querySelector('#inventoryButton')
        const inventoryList = document.querySelector('#inventoryList')
        /*const inventoryCloseButton = document.querySelector(
            '#inventoryCloseButton'
        )*/

        const level = sceneEngine.currentScene

        const createItemList = item => {
            // item row
            console.log(level.player.inventory)
            const listItem = document.createElement('li')
            listItem.setAttribute('class', 'inventory__item')
            listItem.textContent = item.name
            inventoryList.appendChild(listItem)

            // action button for row
            const useButton = document.createElement('button')
            useButton.setAttribute('class', 'item__button')
            switch (item.category) {
                case 'armor':
                    useButton.textContent = 'Wear'
                    break
                case 'weapon':
                    useButton.textContent = 'Equip'
                    break
                case 'potion':
                    useButton.textContent = 'Use'
                    break
                case 'utility':
                    useButton.textContent = 'Equip'
                    break
            }
            useButton.addEventListener('click', () => {
                const removeInventoryList = () => {
                    const inventoryItems = document.querySelectorAll(
                        '.inventory__item'
                    )
                    inventoryItems.forEach(item => item.remove())
                }
                // check the item category
                if (item.category === 'weapon') {
                    if (level.player.weapon !== '') {
                        // get the item that is already in use from character
                        level.player.inventory.push(level.player.weapon)
                    }
                    // remove all item form DOM inventory to update it
                    removeInventoryList()
                }
                if (item.category === 'armor') {
                    if (
                        level.player.bodyPart[item.bodyPart].armor.item !== ''
                    ) {
                        level.player.inventory.push(
                            level.player.bodyPart[item.bodyPart].armor.item
                        )
                    }
                    removeInventoryList()
                }
                // remove equiped item from inventory, return a new array without the equiped item
                const updatedInventory = level.player.inventory.filter(
                    elem => elem !== item
                )
                // equip item on character
                level.player.equipItem(item)

                // assign the updated inventory to the player inventory
                level.player.inventory = updatedInventory

                // rerender the inventory with the item from character in the inventory and the equiped item removed from inventory
                level.player.inventory.forEach(item => createItemList(item))
            })

            listItem.appendChild(useButton)
        }

        inventoryButton.disabled = true
        inventoryPage.style.display = 'flex'
        level.player.inventory.forEach(item => createItemList(item))
        console.log(level.player.inventory)
    }

    closeInventory() {
        const inventoryPage = document.querySelector('#inventory')
        const inventoryItems = document.querySelectorAll('.inventory__item')
        inventoryItems.forEach(item => item.remove())
        inventoryPage.style.display = 'none'
        //inventoryButton.disabled = false
    }

    startScreen() {
        document.addEventListener('DOMContentLoaded', e => {
            e.preventDefault()
            const overlayscreen = document.createElement('div')
            overlayscreen.setAttribute('class', 'overlay start-screen')

            const header = document.createElement('h1')
            header.setAttribute('class', 'text--white text--center')
            header.textContent = `2 MINUTE DUNGEON`
            overlayscreen.appendChild(header)

            const button = document.createElement('button')
            button.textContent = 'START'
            button.setAttribute('id', 'startButton')
            button.setAttribute('class', 'action__button')
            overlayscreen.appendChild(button)

            const app = document.querySelector('#app')
            app.appendChild(overlayscreen)

            const startButton = document.querySelector('#startButton')
            startButton.addEventListener('click', e => {
                e.preventDefault()
                overlayscreen.remove()
                if (!localStorage.getItem('player')) {
                    sceneEngine.sceneManager('characterCreation')
                } else {
                    sceneEngine.sceneManager('nextLevel')
                }
            })
        })
    }
}

const sceneEngine = new SceneEngine()

export { sceneEngine }
