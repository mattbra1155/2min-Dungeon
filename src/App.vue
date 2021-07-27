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
    mounted() {
        const sceneManager = new SceneManager
        const scene = sceneManager.createScene()
        console.log(scene)
        this.$store.dispatch('player/fetchPlayer')
    }
}
</script>
