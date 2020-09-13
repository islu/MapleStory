
Vue.component('ms-item', {
  props: {
    'Name': String,
    'Type': String,
    'Description': String,
    'Effects': String,
    'Img_Path': String,
  },
  template: ` 
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <span :style="styleObject">{{Name}}</span>
          <br><span>{{Type}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <img :src=Img_Path width="80%">
        </div>
        <div class="col-8"> 
          {{Description}}
          {{Effects}} 
        </div>
      </div> 
    </div>`,
  data: function() {
    return {
      styleObject: {
        fontSize: '30px',
        color: 'blue',
      },
    }
  }
})

