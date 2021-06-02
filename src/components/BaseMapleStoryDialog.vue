<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="maplestory-container" :style="containerStyle">
    <div class="maplestory-title">
      {{ title }}
      <span style="float:right">
        <i class="fa fa-times"></i>
      </span>
    </div>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'BaseMapleStoryDialog',
  computed: {
    containerStyle() {
      return {
        width: `${this.width}px`,
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
  font-size: 12px;
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
