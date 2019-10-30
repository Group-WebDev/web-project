<template>
<div>
      <v-col v-if="user === users.email">
        <NavBar user/>
      </v-col>
    
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components: {
        NavBar
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    created() {
        this.$store.dispatch('getUsers');
    },
}
</script>

<style>

</style>
