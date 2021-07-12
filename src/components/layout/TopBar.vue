<template>
    <div id="top-bar">
        <h2 id="levelName" class="level__name">{{ scene }}</h2>
        <h3 id="turnNumber" class="text--center">{{ turn }}</h3>
        <div class="health__display">
            <div class="player-hp">
                <h2>{{ player }}</h2>
                <p id="playerHp" class="health--player">0</p>
            </div>
            <div class="monster-hp">
                <h2 id="monsterName">{{ enemy }}</h2>
                <p id="monsterHp" class="health--monster">0</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    computed: {
        player() {
            return this.$store.getters['player/getPlayer'].name
        },
        enemy() {
            return this.$store.getters['enemy/getEnemy'].name
        },
        scene() {
            return this.$store.getters.getScene
        },
        turn() {
            return this.$store.getters.getTurn
        }
    }
}
</script>

<style lang="sass">
.level__name
    text-align: center
.health__display
    display: flex
    justify-content: space-evenly
    text-align: center
.player-hp
    color: blue
.monster-hp
    color: red
</style>
