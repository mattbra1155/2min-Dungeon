export const enemy = {
    namespaced: true,
    state: () => ({
        enemy: {
            name: 'enemy',
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
        }
    }),
    mutations: {
        SET_ENEMY(state, payload) {
            state.enemy = payload
        }
    },
    actions: {
        setEnemy(context, payload) {
            console.log(payload)
            context.commit('SET_ENEMY', payload)
        }
    },
    getters: {
        getEnemy: state => state.enemy
    }
}
