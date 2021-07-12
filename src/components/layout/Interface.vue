<template>
    <div class="o-interface">
        <button id="attackButtonOne" type="button" class="action__button" @click="attack">
            Attack1
        </button>
        <button id="inventoryButton" type="button" class="action__button">
            Inventory
        </button>
    </div>
</template>

<script>

export default {
    name: 'Interface',
    methods: {
        attack() {
            this.$store.dispatch('attack', true)
        }
    }
}
</script>

<style></style>
