import {level} from '/levels.js'

class Ui {
    constructor() {
        this.OVERLAYSCREEN = document.createElement('div');
        this.HEADER = document.createElement('h1');
        this.BUTTON = document.createElement('button');
        this.APP = document.querySelector('#app');
    }

    startScreen() {
        document.addEventListener('DOMContentLoaded', (e) => {
            e.preventDefault;
            const OVERLAYSCREEN = document.createElement('div');
            OVERLAYSCREEN.setAttribute('class', 'overlay start-screen');
            
            const HEADER = document.createElement('h1');
            HEADER.style.color = 'white';
            HEADER.textContent = `2 MINUTE DUNGEON`;
            OVERLAYSCREEN.appendChild(HEADER);
           
            const BUTTON = document.createElement('button');
            BUTTON.textContent = "START"
            BUTTON.setAttribute('id', 'startButton');
            BUTTON.setAttribute('class', 'action__button');
            OVERLAYSCREEN.appendChild(BUTTON)

            const APP = document.querySelector('#app');
            APP.appendChild(OVERLAYSCREEN);
        
            const startButton = document.querySelector('#startButton')
                startButton.addEventListener('click', e => {
                    e.preventDefault;
                    OVERLAYSCREEN.remove();
                });
        });
    }

    winScreen() {
        const OVERLAYSCREEN = document.createElement('div');
        OVERLAYSCREEN.setAttribute('class', 'overlay win-screen');

        const HEADER = document.createElement('h1');
        HEADER.style.color = 'white';
        HEADER.textContent = `You have finished the dungeon CONGRATULATIONS!`;
        OVERLAYSCREEN.appendChild(HEADER);
        
        const BUTTON = document.createElement('button');
        BUTTON.textContent = "CLOSE"
        BUTTON.setAttribute('id', 'closeButton');
        BUTTON.setAttribute('class', 'action__button');
        OVERLAYSCREEN.appendChild(BUTTON);

        const APP = document.querySelector('#app');
        APP.appendChild(OVERLAYSCREEN);

        const closeButton = document.querySelector('#closeButton')
        closeButton.addEventListener('click', e => {
            e.preventDefault;
            window.location.reload(true);
            OVERLAYSCREEN.remove();
        });
        
    };

    loseScreen() {
        const OVERLAYSCREEN = document.createElement('div');
        OVERLAYSCREEN.setAttribute('class', 'overlay lose-screen');

        const HEADER = document.createElement('h1');
        HEADER.style.color = 'white';
        HEADER.textContent = `You DIED`;
        OVERLAYSCREEN.appendChild(HEADER);
        
        const BUTTON = document.createElement('button');
        BUTTON.textContent = "Try Again"
        BUTTON.setAttribute('id', 'closeButton');
        BUTTON.setAttribute('class', 'action__button');
        OVERLAYSCREEN.appendChild(BUTTON);

        const APP = document.querySelector('#app');
        APP.appendChild(OVERLAYSCREEN);

        const closeButton = document.querySelector('#closeButton')
        closeButton.addEventListener('click', e => {
            e.preventDefault;
            window.location.reload(true);
            OVERLAYSCREEN.remove();
        });
        
    };

    nextRoomScreen() {
        const OVERLAYSCREEN = document.createElement('div');
        OVERLAYSCREEN.setAttribute('class', 'overlay next-room-screen');

        const HEADER = document.createElement('h1');
        HEADER.style.color = 'white';
        HEADER.textContent = `You defeted the ${level.monster.name}`;
        OVERLAYSCREEN.appendChild(HEADER);
        
        const BUTTON = document.createElement('button');
        BUTTON.textContent = "Next dungeon room"
        BUTTON.setAttribute('id', 'closeButton');
        BUTTON.setAttribute('class', 'action__button');
        OVERLAYSCREEN.appendChild(BUTTON);

        const APP = document.querySelector('#app');
        APP.appendChild(OVERLAYSCREEN);

        const closeButton = document.querySelector('#closeButton')
        closeButton.addEventListener('click', e => {
            e.preventDefault;
            window.location.reload(true);
            OVERLAYSCREEN.remove();
        });
        
    };
}

const SCREEN = new Ui();

/// UI
const playerHealth = document.querySelector('#playerHp')
const enemyHealth = document.querySelector('#monsterHp')



export {playerHealth, enemyHealth, SCREEN};