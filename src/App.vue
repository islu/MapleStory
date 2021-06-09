<template>
  <div v-if="isGomokuOpen">
    <MapleStoryGomoku/>
  </div>
  <MapleStoryNpc/>
  <footer>
    <button @click="gomokuControll">Gomoku</button>
  </footer>
</template>

<script>
import MapleStoryGomoku from './components/MapleStoryGomoku.vue';
import MapleStoryNpc from './components/MapleStoryNpc.vue';

export default {
  name: 'App',
  components: {
    MapleStoryGomoku,
    MapleStoryNpc,
  },
  data() {
    return {
      isGomokuOpen: false,
    };
  },
  computed: {
  },
  methods: {
    gomokuControll() {
      this.isGomokuOpen = !this.isGomokuOpen;
    },
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

footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
}
</style>
