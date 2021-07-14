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
import { ItemGenerator } from '@/assets/generators/itemGenerator'
export default {
    computed: {
        player() {
            return this.$store.getters.getPlayer
        },
        enemy() {
            return this.$store.getters.getEnemy
        },
        scene() {
            return this.$store.getters.getScene
        }
    },
    methods: {},
    mounted() {
        const itemGenerator = new ItemGenerator()

        itemGenerator.createItem('weapon')
        this.$store.dispatch('setScene')
    }
}
</script>
