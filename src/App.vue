<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/">Main</router-link>
            <router-link to="/character-creation/">Create</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
import { SceneManager } from '@/assets/scripts/sceneManager'
export default {
    computed: {},
    methods: {},
    created() {
        console.log('create')

        console.log(this.$store.getters['player/getPlayer'])
    },
    mounted() {
        const sceneManager = new SceneManager()
        this.$store.dispatch('player/fetchPlayer').then(() => {
            sceneManager.createScene()
        })
    }
}
</script>
