<template>
  <BaseMapleStoryContainer
    title="Maple Story Gomoku"
    width="400"
  >
    <div class="container">
      <i
        v-for="(value, index) in board"
        :key="index"
        @click="checkPoint(index)"
      >
        <img :src="imgPath(index, value)" class="chess">
      </i>
    </div>
  </BaseMapleStoryContainer>
</template>

<script>
import mushroomStatic from '@/assets/gomoku/mushroom.png';
import mushroomIdleAnim from '@/assets/gomoku/mushroom.gif';
import slimeStatic from '@/assets/gomoku/slime.png';
import slimeIdleAnim from '@/assets/gomoku/slime.gif';
import BaseMapleStoryContainer from '@/components/BaseMapleStoryContainer.vue';

export default {
  name: 'MapleStoryGomoku',
  components: {
    BaseMapleStoryContainer,
  },
  data() {
    return {
      board: [],
      player: 0,
      isOver: false,
      lastStoneIndex: null,
    };
  },
  created() {
    // init
    this.board = Array(225).fill(0);
    this.player = 1;
    this.isOver = false;
    this.lastStoneIndex = null;
  },
  copmuted: {
  },
  methods: {
    checkPoint(index) {
      if (this.board[index] !== 0) {
        return;
      }
      this.board[index] = this.player;
      this.player = this.player === 1 ? 2 : 1;
      this.isWin(index);
      this.lastStoneIndex = index;
    },
    isWin(index) {
      const row = parseInt(index / 15, 10);
      const col = index % 15;
      const left = col - 4;
      const right = col + 4;
      const top = row - 4;
      const bottom = row + 4;
      let result = '';

      // left to right (橫線)
      result = '';
      for (let c = left; c <= right; c += 1) {
        if (!(c < 0 || c > 14)) {
          result += this.board[this.toIndex(row, c)];
        }
      }
      this.alertIfWin(result);

      // top to bottom (直線)
      result = '';
      for (let t = top; t <= bottom; t += 1) {
        if (!(t < 0 || t > 14)) {
          result += this.board[this.toIndex(t, col)];
        }
      }
      this.alertIfWin(result);

      // leftTop to rightBottom (左上右下斜線)
      result = '';
      for (let c = left, t = top; c <= right && t <= bottom; c += 1, t += 1) {
        if (!(c < 0 || c > 14 || t < 0 || t > 14)) {
          result += this.board[this.toIndex(t, c)];
        }
      }
      this.alertIfWin(result);

      // leftBottom to rightTop (左下右上斜線)
      result = '';
      for (let c = left, t = bottom; c <= right && t >= top; c += 1, t -= 1) {
        if (!(c < 0 || c > 14 || t < 0 || t > 14)) {
          result += this.board[this.toIndex(t, c)];
        }
      }
      this.alertIfWin(result);
    },
    toIndex(row, col) {
      return 15 * row + col;
    },
    alertIfWin(str) {
      if (this.blackWin(str)) {
        // alert('黑子勝利');
        this.isOver = true;
      } else if (this.whiteWin(str)) {
        // alert('白子勝利');
        this.isOver = true;
      }
    },
    blackWin(str) {
      return str.includes('11111');
    },
    whiteWin(str) {
      return str.includes('22222');
    },
    imgPath(index, value) {
      if (index === this.lastStoneIndex) {
        if (value === 1) {
          return mushroomIdleAnim;
        }
        if (value === 2) {
          return slimeIdleAnim;
        }
      }
      if (value === 1) {
        return mushroomStatic;
      }
      if (value === 2) {
        return slimeStatic;
      }
      return '';
    },
  },
};
</script>

<style scoped>
.container {
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  border: solid 1px;
  padding: 5px;
  /* transform: scale(1.2); */
}

i {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: left;
  /* background: #F9CC9D; */
  background-color: white;
}

i::before,
i::after {
  content: ' ';
  position: absolute;
  top: 12px;
  width: 24px;
  height: 0;
  border-top: 1px solid #333;
}

i::after {
  top: 0;
  right: 12px;
  width: 0;
  height: 24px;
  border-top: 0 none;
  border-right: 1px solid #333;
}

.chess {
  position: relative;
  margin: 0px 0px -7px 0px;
  z-index: 1;
}
</style>
