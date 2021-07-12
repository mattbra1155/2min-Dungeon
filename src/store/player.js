export const player = {
    namespaced: true,
    state: () => ({
        name: 'player',
        race: 'human',
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
        }
    },
    getters: {
        getPlayer: state => {
            return state
        }
    }
}
