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
import { SceneGenerator } from '@/assets/generators/sceneGenerator'
export default {
    computed: {},
    methods: {},
    mounted() {
        const sceneGenerator = new SceneGenerator()
        const scene = sceneGenerator.create()
        console.log(scene)
    }
}
</script>
