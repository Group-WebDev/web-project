<template>
<div>
    <b-navbar type="dark" variant="info">
        <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Project</b-nav-item>
            <b-nav-item href="#">Issues</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace><b-nav-item right>Logout</b-nav-item></router-link>
        </b-navbar-nav>
    </b-navbar>
    <router-view @authenticated="setAuthenticated" />
</div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "patrick@cabs",
                    password: "password"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    h1 {
        padding: 0;
        margin-top: 0;
    }
</style>
