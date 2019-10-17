import { level, global, persons } from './index.js';


class Ui {
    constructor() {
        this.overlayscreen = document.createElement('div');
        this.header = document.createElement('h1');
        this.button = document.createElement('button');
        this.app = document.querySelector('#app');
    }

    clearFeed() {
        // add text to feed
        const feed = document.querySelector('#feedContainer');
        feed.innerHTML = '';
    }

    startScreen() {
        document.addEventListener('DOMContentLoaded', (e) => {
            e.preventDefault();
            const overlayscreen = document.createElement('div');
            overlayscreen.setAttribute('class', 'overlay start-screen');

            const header = document.createElement('h1');
            header.setAttribute('class', 'text--white');
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
            });
        });
    }

    winScreen() {
        const overlayscreen = document.createElement('div');
        overlayscreen.setAttribute('class', 'overlay win-screen');

        const header = document.createElement('h1');
        header.setAttribute('class', 'text--white');
        header.textContent = `You have finished the dungeon CONGRATULATIONS!`;
        overlayscreen.appendChild(header);

        const gatheredItemsList = document.createElement('ul');
        const gatheredItemListHeader = document.createElement('h2');
        gatheredItemListHeader.textContent = 'Your inventory';
        gatheredItemListHeader.setAttribute('class', 'text--white');
        overlayscreen.appendChild(gatheredItemListHeader);
        overlayscreen.appendChild(gatheredItemsList);

        persons.player.inventory.forEach(element => {
            const gatheredItem = document.createElement('li');
            gatheredItem.setAttribute('class', 'text--white');
            gatheredItem.textContent = element.name;
            gatheredItemsList.appendChild(gatheredItem);
            
        });
        
        const button = document.createElement('button');
        button.textContent = "Go again";
        button.setAttribute('id', 'winButton');
        button.setAttribute('class', 'action__button');
        overlayscreen.appendChild(button);

        const app = document.querySelector('#app');
        app.appendChild(overlayscreen);

        const winButton = document.querySelector('#winButton')
        winButton.addEventListener('click', e => {
            e.preventDefault();
            window.location.reload(true);
            overlayscreen.remove();
        });

    };

    loseScreen() {
        const overlayscreen = document.createElement('div');
        overlayscreen.setAttribute('class', 'overlay lose-screen');

        const header = document.createElement('h1');
        header.setAttribute('class', 'text--white');
        header.textContent = `You DIED`;
        overlayscreen.appendChild(header);

        const button = document.createElement('button');
        button.textContent = "Try Again";
        button.setAttribute('id', 'closeButton');
        button.setAttribute('class', 'action__button');
        overlayscreen.appendChild(button);

        const app = document.querySelector('#app');
        app.appendChild(overlayscreen);

        const closeButton = document.querySelector('#closeButton')
        closeButton.addEventListener('click', e => {
            e.preventDefault();
            window.location.reload(true);
            overlayscreen.remove();
        });

    };

    nextRoomScreen() {

        if (level.id < 5) {
            const overlayscreen = document.createElement('div');
            overlayscreen.setAttribute('class', 'overlay next-room-screen');

            const header = document.createElement('h1');
            header.setAttribute('class', 'text--white');
            header.textContent = `You defeted the ${level.monster.name}`;
            overlayscreen.appendChild(header);

            const nextButton = document.createElement('button');
            nextButton.textContent = "Next dungeon room";
            nextButton.setAttribute('id', 'closeButton');
            nextButton.setAttribute('class', 'action__button');
            overlayscreen.appendChild(nextButton);

            const SearchBodyText = document.createElement('p');
            SearchBodyText.setAttribute('class', 'text--white');
            SearchBodyText.textContent = `You can take your time to search the ${level.monster.name} body.`;
            overlayscreen.appendChild(SearchBodyText);

            const searchBodyButton = document.createElement('button');
            searchBodyButton.textContent = `Search ${level.monster.name}'s body`;
            searchBodyButton.setAttribute('id', 'searchBodyButton');
            nextButton.setAttribute('class', 'action__button');
            overlayscreen.appendChild(searchBodyButton);

            const app = document.querySelector('#app');
            app.appendChild(overlayscreen);

            const closeButton = document.querySelector('#closeButton')
            closeButton.addEventListener('click', e => {
                e.preventDefault();
                // Add +1 to level id to change to next room
                const next = (x = 1) => x + 1;
                level.changeRoom(next(level.id));
                attackButton.disabled = false;
                let updatePersonHealth = () => {
                    global.playerHealth.textContent = persons.player.hp;
                    global.enemyHealth.textContent = level.monster.hp;
                }
                updatePersonHealth();
                // Clear feed each time new monster apperas 
                this.clearFeed();
                overlayscreen.remove();
            });
            
            

            const searchBody = document.querySelector('#searchBodyButton');
            searchBody.addEventListener('click', e => {
                e.preventDefault();
                // Choose random item key from Object
                const keys = Object.values(level.monster.inventory);
                const newItems = keys[Math.floor(Math.random() * keys.length)];
                // Hide button to make space for text
                searchBody.style.display = 'none';
                // Add item to Player inventory
                if (level.monster.inventory != '') {
                    persons.player.inventory.push(newItems);
                    console.log(`You found a ${newItems.name}`);
                    console.log(persons.player.inventory);
                    SearchBodyText.textContent = `You found a ${newItems.name}`;
                } else {
                    SearchBodyText.textContent = `${level.monster.name} had nothing`;
                };
            })
        } else {
            // If level.id > 5 it's the last level, so show winScreen instead of next screen
            this.winScreen();
        }
    };
}

const screen = new Ui();


export { screen };