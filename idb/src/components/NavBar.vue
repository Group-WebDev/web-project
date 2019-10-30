<template>
<v-toolbar dense color="blue lighten-4">
    <v-toolbar-title>Eco Green |</v-toolbar-title>

    <v-btn icon>
        <v-icon>mdi-home</v-icon><br/>
    </v-btn>

    <v-btn icon>
        <v-icon>mdi-alert</v-icon><br/>
    </v-btn>

    <v-btn icon>
        <v-icon>mdi-recycle</v-icon><br/>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn icon>
        <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
        <v-icon>mdi-face</v-icon>
        <span>{{ user.email }}</span>
    </v-btn>

    <v-btn>
        <span>Logout</span>
    </v-btn>
</v-toolbar>
</template>

<script>
export default {
    props: ['user'],
    data: () => ({

    }),
    created() {
        console.log('user created');
    },
    methods: {}
}
</script>

<style>

</style>
