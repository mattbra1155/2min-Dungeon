import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/character-creation',
        name: 'Character Creation',
        component: () => import('../views/CharacterCreation.vue')
    },
    {
        path: '/Inventory',
        name: 'Inventory',
        component: () => import('../views/CharacterCreation.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
