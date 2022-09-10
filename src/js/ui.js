import Vue from 'vue'
// import $ from 'jquery'

Vue.filter("fillzero", function (val) {
  return val < 10 ? '0'+val : val;
});

Vue.mixin({
    data(){
      return {
        skin: 'bmw'
        // skin: 'benz'
        // skin: 'polestar'
      }
    },
    methods: {
      checkIcon(e, arr, i){
        e.stopPropagation();
        e.preventDefault();
        const el = e.currentTarget.querySelector('i')
        if(el.classList.contains('on')){
          if(Array.isArray(this[arr])) this.$set(this[arr], i, false)
          else this[arr] = false
        }else{ 
          if(Array.isArray(this[arr]))  this.$set(this[arr], i, true)
          else this[arr] = true
        }
      },
    }
  })

  
