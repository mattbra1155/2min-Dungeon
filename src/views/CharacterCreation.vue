<template>
    <div id="characterGenerator" class="o-characterGenerator">
        <form @submit.prevent class="m-form o-characterGenerator__sheet">
            <h2 class="o-characterGenerator__header">
                Character creation sheet
            </h2>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <label for="playerName" class="header ">Name</label>
                    <input
                        type="text"
                        name="playerName"
                        v-model="character.name"
                    />
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <h2 class="o-characterGenerator__header">Race</h2>
                    <div class="o-characterGenerator__item">
                        <label for="human">Human</label>
                        <input
                            type="radio"
                            name="playerRace"
                            value="human"
                            class="item__input"
                            :checked="true"
                            v-model="character.race"
                        />
                    </div>
                    <div class="o-characterGenerator__item">
                        <label for="dwarf">Dwarf</label>
                        <input
                            type="radio"
                            name="playerRace"
                            value="dwarf"
                            class="item__input"
                            v-model="character.race"
                        />
                    </div>
                    {{ character }}
                </div>
                <div class="m-form__column">
                    <p class="a-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam labore debitis nam. Cupiditate alias ad
                        voluptatum quos aut, magnam ea totam culpa vero fuga.
                        Adipisci asperiores quae sint dicta. Repellendus?
                    </p>
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <h2 class="o-characterGenerator__header">Class</h2>
                    <input
                        type="radio"
                        name="class"
                        value="warrior"
                        class="item__input"
                        v-model="character.class"
                    />
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <label for="bio" class="o-characterGenerator__header"
                        >Bio</label
                    >
                    <textarea
                        type="text"
                        name="bio"
                        id="characterBio"
                        rows="5"
                        v-model="character.bio"
                    ></textarea>
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <h2 class="o-characterGenerator__header">Stats</h2>
                    <button
                        @click="rollStats(character.race)"
                        id="generateStatsButton"
                        class="button action__button"
                    >
                        Roll dice
                    </button>
                    <div id="statList" class="stat__list"></div>
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row ">
                <div class="m-form__column">
                    <h2 class="o-characterGenerator__header">Inventory</h2>
                    <div id="charInventory" class="inventory"></div>
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <h2 class="o-characterGenerator__header">Weapon</h2>
                    <div id="charWeapon" class="weapon"></div>
                </div>
            </div>
            <div class="m-form__row o-characterGenerator__row">
                <div class="m-form__column">
                    <button
                        type="submit"
                        @click="createPlayer"
                        id="createPlayerButton"
                        class="button action__button"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { diceRollK2, diceRollK3, diceRollK10 } from '../assets/scripts/diceRoll'
export default {
    data() {
        return {
            isActive: false,
            character: {
                name: '',
                race: '',
                class: '',
                bio: '',
                stats: {}
            }
        }
    },
    methods: {
        createPlayer() {
            console.log('create')
        },
        rollStats(race) {
            if (race === 'human') {
                this.character.stats = {
                    hp: diceRollK3(),
                    melee: diceRollK10() * 2,
                    ranged: diceRollK10() * 2,
                    dexterity: diceRollK10(),
                    strength: diceRollK3(),
                    thoughtness: diceRollK3(),
                    speed: diceRollK3(),
                    initiative: diceRollK10() * 2,
                    attacks: 1,
                    inteligence: diceRollK10() * 2,
                    'will power': diceRollK10() * 2,
                    charisma: diceRollK10() * 2
                }
            }
            if (race === 'dwarf') {
                this.character.stats = {
                    hp: diceRollK3(),
                    melee: diceRollK10() * 2,
                    ranged: diceRollK10() * 2,
                    dexterity: diceRollK10(),
                    strength: diceRollK3(),
                    thoughtness: diceRollK3(),
                    speed: diceRollK2(),
                    initiative: diceRollK10() * 2,
                    attacks: 1,
                    inteligence: diceRollK10() * 2,
                    'will power': diceRollK10() * 2,
                    charisma: diceRollK10() * 2
                }
            }

            console.log(this.character)
        }
    }
}
</script>
