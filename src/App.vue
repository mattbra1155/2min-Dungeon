<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/home">Main</router-link>
            <router-link to="/character-creation/">Create</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route )
    }
}
</script>
