import localforage from 'localforage'
export const player = {
    namespaced: true,
    state: () => ({
        player: {
            name: 'player',
            race: 'human',
            description: '',
            stats: {
                hp: '',
                melee: '',
                ranged: '',
                dexterity: '',
                strength: '',
                thoughtness: '',
                speed: '',
                initiative: '',
                attacks: '',
                inteligence: '',
                willPower: '',
                charisma: '',
                weapon: '',
                inventory: '',
                description: ''
            }
        },
        inventory: []
    }),
    mutations: {
        SET_PLAYER(state, payload) {
            state.player = payload
        }
    },
    actions: {
        setPlayer({ commit }, payload) {
            commit('SET_PLAYER', payload)
        },
        createPlayer({ commit }, payload) {
            commit('SET_PLAYER', payload)
            localforage.setItem('player', payload)
        },
        async fetchPlayer({ dispatch }) {
            try {
                const value = await localforage.getItem('player')
                dispatch('setPlayer', value)
                return console.log('ok')
            } catch (err) {
                return console.log(err)
            }
        }
    },
    getters: {
        getPlayer: state => {
            return state.player
        }
    }
}
