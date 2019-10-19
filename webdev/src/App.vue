<template>
<div id="app">
    <div id="navbar">
        <b-navbar type="dark" id="nav">
            <b-navbar-nav class="ml-auto">
                <b-navbar-brand>
                    <div id="nav">
                        <router-link to="/">Login</router-link> |
                        <router-link to="/register">Register</router-link>
                    </div>
                </b-navbar-brand>
             </b-navbar-nav>
        </b-navbar>  
    </div><br/><br/>
    <router-view/>
</div>
</template>
<script>
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width:100%;
  background-image:url("assets/background.jpg");
  background-size:cover;
  background-repeat:no-repeat;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#navbar{
  width:100%;
  position:relative;
  width:auto;
  background-color: rgba(0,0,0, .10);  
	box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}
</style>
