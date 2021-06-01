<template>
  player: {{player}}
  <div class="container">
    <i
      v-for="(value, index) in board"
      :key="index"
      @click="checkPoint(index)"
    >
      <img :src="imgPath(value)" class="chess">
      <!-- {{value}} -->
    </i>
  </div>
</template>

<script>
import green from '@/assets/green.png';
import yellow from '@/assets/yellow.png';

export default {
  name: 'MapleStoryGobang',
  data() {
    return {
      board: [],
      player: 0,
    };
  },
  created() {
    this.board = Array(225).fill(0);
    this.player = 1;
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
        alert('黑子勝利');
      } else if (this.whiteWin(str)) {
        alert('白子勝利');
      }
    },
    blackWin(str) {
      return str.includes('11111');
    },
    whiteWin(str) {
      return str.includes('22222');
    },
    imgPath(value) {
      if (value === 1) {
        return green;
      }
      if (value === 2) {
        return yellow;
      }
      return '';
    },
    // imgStyle(value) {
    //   return `background-image: url(${this.imgPath(value)})`;
    // },
  },
};
</script>

<style>
.container {
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  border: solid 1px;
  padding: 5px;
  transform: scale(1.2);
}
/* .square {
  width: 20px;
  height: 20px;
  padding: 10px;
  border: 1px solid #000;
  border-collapse: collapse;
  background: #F9CC9D;
  margin: 0px -1px -1px 0px;
} */
i {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  /* cursor: url('../../static/cursor/cursor_hover.gif'), pointer; */
  text-align: left;
  background: #F9CC9D;
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
