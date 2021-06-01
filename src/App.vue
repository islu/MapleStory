<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <br/>
  <MapleStoryGobang/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import MapleStoryGobang from './components/MapleStoryGobang.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MapleStoryGobang,
  },
};
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
html {
  cursor:
    /* url('../static/cursor/cursor.ani'), */
    url('../static/cursor/cursor.gif'),
    default;
}
html:active {
  cursor:
    /* url('../static/cursor/cursor_hover.ani'), */
    url('../static/cursor/cursor_active.gif'),
    default;
}
</style>
