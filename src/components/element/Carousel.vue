<template>
  <div class="carousel">
    <Splide
      ref="slider"
      class="slider"
      :options="setOption"
      @splide:mounted="init"
      @splide:move="onMove"
      @splide:moved="onMoved"
      @splide:drag="onDrag"
      @splide:dragged="onDragged"
    >
      <template v-if="content">
        <slot ref="content" name="content"></slot>
      </template>
      <!-- list -->
      <template v-else>
        <SplideSlide v-for="(item, index) in data" :key="index">
          <slot :item="item" :index="index"></slot>
        </SplideSlide>
      </template>
    </Splide>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSplide from '@splidejs/vue-splide';
Vue.use( VueSplide );

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
   components: { Splide, SplideSlide },
   props: {
    data: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => {},
    },
    content: {
      type: Boolean,
      default: false,
    },
    destroy:{
      type: Boolean,
      default: false,
    },
  },
  
  data() {
    return {
      key:0,
      opacity: 0,
    }
  },
  computed: {
    setOption() {
      let opt =Object.assign({
        arrows : false,
        pagination : true,
        drag : false,
      }, this.options)

      if(this.data.length > 1){
        opt.drag = true;
      }
      if(this.options.destroy){
        opt.breakpoints = {
          100000000: {
            destroy: true,
          }
        }
      }

      return opt;
    }
  },
  methods: {
    init(slider) {
      setTimeout(()=>{
        if(this.setOption.focus === 'center') {
          let w = this.$refs.slider.$el.querySelector('.splide__slide').clientWidth;
          this.$refs.slider.$el.querySelector('.splide__list').setAttribute('style', 'transform: translateX(calc(50vw - '+ (w/2) +'px))')
        }
      }, 10);

      this.$emit('init', slider);
    },
    onMove(slider, index){
      this.$emit('onMove', slider, index);
    },
    onMoved(slider, index){  
      this.$emit('onMoved', slider, index);
    },
    onDrag(){
      this.$refs.slider.$el.classList.add('ing');
    },
    onDragged(){
      this.$refs.slider.$el.classList.remove('ing');
    },
  },
}
</script>

