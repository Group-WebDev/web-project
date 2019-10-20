<template>
<div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <router-link to="/welcome"><b-navbar-brand >Home</b-navbar-brand></router-link>
        <b-navbar-brand >Projects</b-navbar-brand>
        <b-navbar-brand >Issues</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <b-navbar-brand href="#">Logout</b-navbar-brand>
        </b-navbar-nav>
    </b-navbar>
</div>
</template>
<script>
export default {
    name:"nav-bar"
}
</script>
