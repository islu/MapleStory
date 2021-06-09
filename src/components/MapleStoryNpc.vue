<template>
  <BaseMapleStoryContainer
    title="Npc"
    width="400"
  >
  </BaseMapleStoryContainer>
  <br><button @click="getMob">mob</button>
  <br><button @click="getNpc">npc</button>
  <br><button @click="getNpcIcon">npc icon</button>
  <br><button @click="getQuest">quest</button>
  <br><img :src="npcIcon" alt="">
  <br>{{npcName}}
</template>

<script>
import BaseMapleStoryContainer from '@/components/BaseMapleStoryContainer.vue';
import api from '@/api/MapleStoryApi';

export default {
  name: 'MapleStoryNpc',
  components: {
    BaseMapleStoryContainer,
  },
  created() {
    // this.getNpcName();
  },
  data() {
    return {
      npcIcon: '',
      npcName: '',
    };
  },
  methods: {
    getMob() {
      const data1 = api.GetMob('2230110');
      console.log(data1);
      const data2 = api.GetMobAnimation('2230110', 'stand');
      console.log(data2);
      data2.then((d) => { this.npcIcon = URL.createObjectURL(d); });
    },
    getNpc() {
      const data = api.GetNpc('1101002');
      console.log(data);
    },
    getNpcIcon() {
      const data = api.GetNpcIcon('1101002');
      // console.log(data);
      data.then((d) => { this.npcIcon = URL.createObjectURL(d); });
    },
    getNpcName() {
      const data = api.GetNpcName('1101002');
      console.log(data);
      data.then((d) => { this.npcName = d.name; });
    },
    getQuest() {
      // 20797
      const data = api.GetQuest('20797');
      console.log(data);
    },
  },
};
</script>

<style>

</style>
