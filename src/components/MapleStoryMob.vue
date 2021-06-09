<template>
  <BaseMapleStoryContainer
    title="Npc"
    width="400"
  >
  </BaseMapleStoryContainer>
  <br><button @click="getMob">mob</button>
  <br><img :src="mobIcon" alt="">
</template>

<script>
import BaseMapleStoryContainer from '@/components/BaseMapleStoryContainer.vue';
import api from '@/api/MapleStoryApi';

export default {
  name: 'MapleStoryMob',
  components: {
    BaseMapleStoryContainer,
  },
  created() {
  },
  data() {
    return {
      mobIcon: '',
    };
  },
  methods: {
    getMob() {
      const data1 = api.GetMob('2230110');
      console.log(data1);
      const data2 = api.GetMobAnimation('2230110', 'stand');
      console.log(data2);
      data2.then((d) => { this.mobIcon = URL.createObjectURL(d); });
    },
  },
};
</script>

<style>

</style>
