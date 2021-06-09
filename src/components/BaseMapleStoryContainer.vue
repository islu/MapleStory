<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="maplestory-container"
    :style="style"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
  >
    <div class="maplestory-title"
      @mousedown="handleMouseDown"
    >
      {{ title }}
      <span style="float:right">
        <i class="fa fa-times"></i>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import moveCousor from '../../static/cursor/cursor_move.gif';

export default {
  name: 'BaseMapleStoryContainer',
  data() {
    return {
      currentX: 0,
      currentY: 0,
      draggable: false,
    };
  },
  created() {
    this.offsetX = 0;
    this.offsetY = 0;
    this.draggable = false;
  },
  computed: {
    style() {
      return {
        width: `${this.width}px`,
        transform: `translate3d(${this.currentX}px, ${this.currentY}px, 0px)`,
        cursor: this.draggable ? `url(${moveCousor}), move` : '',
      };
    },
  },
  props: {
    title: {
      type: String,
    },
    width: {
      type: [Number, String],
    },
  },
  methods: {
    handleMouseDown(event) {
      this.initX = event.clientX - this.offsetX;
      this.initY = event.clientY - this.offsetY;
      this.draggable = true;
    },
    handleMouseMove(event) {
      if (this.draggable) {
        event.preventDefault();
        this.currentX = event.clientX - this.initX;
        this.currentY = event.clientY - this.initY;
        this.offsetX = this.currentX;
        this.offsetY = this.currentY;
      }
    },
    handleMouseUp() {
      this.initX = this.currentX;
      this.initY = this.currentY;
      this.draggable = false;
    },
  },
};
</script>

<style>
.maplestory-container {
  background: rgba(0, 0, 0, 0.85);
  margin: 5px auto;
  min-height: 100px;
  border: 5px double  rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: inset 0 5px 5px rgba(255, 255, 255, 0.8);
  position: relative;
}

.maplestory-title {
  font-size: 13px;
  font-weight: bold;
  font-family: arial;
  -webkit-text-stroke: .6px black; /* width and color */
  /* text-shadow: -0px 3px 10px rgba(255, 255, 255, 0.61),2px 0 8px #FFF; */
  padding: 0px 10px;
  color: rgb(255, 208, 0);
  text-align: center;
  /* box-shadow: inset 0 0 84px rgba(0, 0, 0, 0.43); */
  /* background: url("https://cdn4.iconfinder.com/data/icons/seed-png/program_group.png") no-repeat 1% 85%; */
  /* background-size: 24px; */
}
</style>
