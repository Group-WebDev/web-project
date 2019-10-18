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
    <router-view />
</div>
</template>

<style>
#app {
    max-width:100%;
    background-image:url("assets/background.jpg");
    background-size:cover;
}
.class{
  width:100%;
}


#navbar{
  width:100%;
  position:relative;
  width:auto;
   background-color: rgba(0,0,0, .10);  
	box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}
</style>
