<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/about">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
 max-width: 680px;
}
</style>
