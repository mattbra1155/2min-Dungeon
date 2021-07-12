<template>
    <div id="characterGenerator" class="character-generator">
        <div class="character-sheet">
            <h2 class="header">Character creation sheet</h2>
            <div class="character-sheet__item character__name">
                <label for="playerName" class="header ">Name</label>
                <input type="text" name="playerName" id="characterName" />
                <button id="confirmNameButton" class="confirm">Confirm</button>
            </div>
            <div class="character-sheet__item character__race">
                <h2 class="header">Race</h2>
                <div class="race__item">
                    <label for="human">Human</label>
                    <input
                        type="radio"
                        name="playerRace"
                        value="human"
                        class="item__input"
                    />
                </div>
                <div class="race__item">
                    <label for="dwarf">Dwarf</label>
                    <input
                        type="radio"
                        name="playerRace"
                        value="dwarf"
                        class="item__input"
                    />
                </div>
            </div>
            <div class="character-sheet__item character__class">
                <h2 class="header">Class</h2>
                <p id="characterClass" class="text">Warrior</p>
            </div>
            <div class="character-sheet__item character__bio">
                <label for="bio" class="header">Bio</label>
                <textarea
                    type="text"
                    name="bio"
                    id="characterBio"
                    rows="5"
                ></textarea>
            </div>
            <div class="character-sheet__item character__stats">
                <h2 class="header">Stats</h2>
                <button id="generateStatsButton" class="button action__button">
                    Roll dice
                </button>
                <div id="statList" class="stat__list"></div>
            </div>
            <div class="character-sheet__item character__inventory">
                <h2 class="header">Inventory</h2>
                <div id="charInventory" class="inventory"></div>
            </div>
            <div class="character-sheet__item character__weapon">
                <h2 class="header">Weapon</h2>
                <div id="charWeapon" class="weapon"></div>
            </div>
        </div>
        <button id="createPlayerButton" class="button action__button">
            Create
        </button>
    </div>
</template>

<script>
import { CharacterGenerator } from '@/assets/scripts/index.js'
export default {
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        CharacterGenerator.createPlayer()
        console.log(CharacterGenerator)
    }
}
</script>
<style lang="sass" scoped>
/* CHARACTER CREATOR */

.character-generator
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    background-color: #ededed


.character-sheet
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    width: 700px
    height: 100%

    .header
        font-size: 1.2rem
        font-weight: bold
        width: 100%
        margin-bottom: 5%



.character-sheet__item
    display: flex
    flex-direction: column
    width: 100%

    .item__input
        -webkit-appearance: none
        -moz-appearance: none
        appearance: none

        border-radius: 50%
        width: 16px
        height: 16px

        border: 2px solid #999
        transition: 0.2s all linear
        margin-right: 5px

    .item__input:checked
        border: 6px solid black

.character__race
    display: flex
    flex-direction: row
    flex-wrap: wrap
    align-items: center
    justify-content: space-between

.stat__list
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center

.stat__item
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 80px 20px
</style>
