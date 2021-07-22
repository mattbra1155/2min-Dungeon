export const enemy = {
    namespaced: true,
    state: () => ({
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
    }),
    mutations: {
        CHANGE_ENEMY(state, payload) {
            state = payload
        }
    },
    actions: {
        setEnemy(context, payload) {
            context.commit('CHANGE_ENEMY', payload)
        }
    },
    getters: {
        getEnemy: state => state
    }
}
