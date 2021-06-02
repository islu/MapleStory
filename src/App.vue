<template>
  <BaseMapleStoryDialog
    title="Maple Story Gobang"
    width="400"
  >
    <MapleStoryGomoku/>
  </BaseMapleStoryDialog>
</template>

<script>
import BaseMapleStoryDialog from './components/BaseMapleStoryDialog.vue';
import MapleStoryGomoku from './components/MapleStoryGomoku.vue';

export default {
  name: 'App',
  components: {
    BaseMapleStoryDialog,
    MapleStoryGomoku,
  },
  computed: {
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
  margin-top: 30px;
}
html {
  cursor: url('../static/cursor/cursor.gif'), default;
}
html:active {
  cursor: url('../static/cursor/cursor_active.gif'), default;
}
</style>
