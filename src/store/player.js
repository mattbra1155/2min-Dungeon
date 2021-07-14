import localforage from 'localforage'


export const player = {
    namespaced: true,
    state: () => ({
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
        },
        inventory: [],
    }),
    mutations: {
        CREATE(state, payload) {
            state = payload
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
        create({ commit }, payload) {
            commit('CREATE', payload)
            console.log(payload)
            localforage.setItem('player', payload)
            /* return localforage
                .getItem('player')
                .then(value => console.log(value))
                .catch(err => console.log(err))  */
            
        }
    },
    getters: {
        getPlayer: state => {
            return state
        }
    }
}
