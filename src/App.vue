<template>
  <div id="app">
    <div id="nav">
      <Navigacija/>
      <CentralniDio/>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/oke"> Oke</router-link>
    </div>dz
    <router-view/>
  </div>
</template>

<script>
import Navigacija from "./components/Navigacija.vue";
import CentralniDio from "./components/CentralniDio.vue";

export default {
  components: {
    Navigacija,
    CentralniDio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
