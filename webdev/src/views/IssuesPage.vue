<template>
<div class="issues">
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
       <router-link to="/welcome"><b-navbar-brand >Home</b-navbar-brand></router-link>
         <router-link to="/projects"><b-navbar-brand >Projects</b-navbar-brand></router-link>
         <router-link to="/issues"><b-navbar-brand >Issues</b-navbar-brand></router-link>

        <b-navbar-nav class="ml-auto">
            <b-navbar-brand href="#">Logout</b-navbar-brand>
        </b-navbar-nav>
    </b-navbar>
</div><br/>
    <center><b-jumbotron id="issues">
        <h1>Issues</h1>
    </b-jumbotron></center>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'issues',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
     #issues{
     background-color: rgba(0,0,0, .10);  
	box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
    width:90%;
}
</style>
