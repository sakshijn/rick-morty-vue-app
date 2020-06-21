<template>
  <div id="app">
    <rick-morty-container></rick-morty-container>
  </div>
</template>

<script>
import RickMortyContainer from './components/Container.vue'

export default {
  name: 'App',
  components: {
    RickMortyContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
