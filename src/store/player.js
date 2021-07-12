export const player = {
    namespaced: true,
    state: () => ({
        name: 'player',
        race: 'human',
       /*  stats: {
            hp,
            melee,
            ranged,
            dexterity,
            strength,
            thoughtness,
            speed,
            initiative,
            attacks,
            inteligence,
            willPower,
            charisma,
            weapon,
            inventory,
            description
        } */
    }),
    mutations: {
        CHANGE_PLAYER(state, payload) {
            state.player = payload
        },
        ATTACK(state, payload) {
            state.attack = payload
        }
    },
    actions: {
        setPlayer(context, payload) {
            context.commit('CHANGE_PLAYER', payload)
        },
        attack(context, payload) {
            context.commit('ATTACK', payload)
        },
        /* createPlayer() {
            character.name = getName()

            if (character.stats === '' || character.name === '') {
                alert('first finish creating your character!')
            } else {
                character.weapon = getWeapon
                character.inventory = getInventory()
                character.description = getDescription()

                const player = new Player()
                player.name = character.name
                player.race = character.race.name
                player.stats = character.stats
                player.weapon = character.weapon
                player.inventory = character.inventory
                player.description = character.description

                console.log(player.inventory)
                //store created player stats in localstorage (need to assign to Player class later)
                localStorage.setItem('player', JSON.stringify(player))
                sceneEngine.sceneManager('nextLevel')
                characterCreationScreen.remove()
                global.updatePersonHealth()
            }
        } */
    },
    getters: {
        getPlayer: state => {
            return state.name
        }
    }
}
