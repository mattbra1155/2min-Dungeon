<template>
    <div id="top-bar">
        <h2 id="levelName" class="level__name">Level TEST</h2>
        <h3 id="turnNumber" class="text--center"></h3>
        <div class="health__display">
            <div class="player-hp">
                <h2>Player</h2>
                <p id="playerHp" class="health--player">0</p>
            </div>
            <div class="monster-hp">
                <h2 id="monsterName">Monster</h2>
                <p id="monsterHp" class="health--monster">0</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
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
