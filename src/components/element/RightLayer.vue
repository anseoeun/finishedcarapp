<template>
    <div 
      ref="layerwrap" 
      class="right-layer-wrap"
      :class="{on:visible}"
     >
      <div ref="layer" class="right-layer">
          <template v-if="$slots.header">
            <div class="layer-header">
              <slot ref="header" name="header" />
              <button class="btn-header-close" @click="$emit('close');"><Icon type="close" /></button>
            </div>
          </template>
          <template>
            <slot ref="content" name="content" />
          </template>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      closeChk: {
        type: Boolean,
        default: false
      },
      close:{
        type: Boolean,
        default: false
      },
    },
    data(){
      return{
        scrollTop: 0,
        isScrolling: false
      }
    },
    watch: {
      visible(newVisible) {
        // const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer
        
        if (newVisible) {
            setTimeout(()=>{
              $('body').css('overflow', 'hidden');
              // $(layerwrap).show();
              setTimeout(()=>{
                
                $(layer).animate({right:0}, function(){
                  this.$emit('opended')
                  $(layer).find('.cont-scroll').scrollTop(0);
                }.bind(this));
              },180)

              if(layer.querySelector('.cont-scroll')){
                let wrapper = layer.querySelector('.cont-scroll')

                wrapper.addEventListener("scroll", (e)=>{
                  if(e.target.scrollTop <= 0){
                    setTimeout(()=>{
                      this.scrollTop = e.target.scrollTop;
                    }, 100)
                  }else{
                    this.scrollTop = e.target.scrollTop;
                    this.isScrolling = true
                  }
                });
              }

              this.onClose()
            }, 100)
        }else{
          this.closeLayer()
        }
      }
    },
    methods:{
      onClose() {
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer

        let startX= null;
        let dir = null;
        let menutop = 0 
        let over = 100;
        let close = false;
        let moveX = null;
        let flag = false;

        function touchMove(){
          let e = window.event;
            if(e.target.closest('.cont-scroll') && this.isScrolling) return

            let touch = e.touches[0];

            moveX = Math.abs(menutop - parseInt(startX - touch.clientX));

            if(moveX > 30) flag = true; 
            if(flag) e.stopPropagation();
 
            if(startX > touch.clientX) dir = 'plus'
            else dir = 'minus'
            
            if(menutop - parseInt(startX - touch.clientX) >= 0) {
              $(layer).css('right',  parseInt(startX - touch.clientX) + 'px');
            }else{
              $(layer).css('right', 0);
            }

           if(dir == 'minus' && moveX > over){
                close = true;
            }else{
                close = false;
            }
        }

        function touchEnd(){  
            if(close) {
                this.closeLayer();
                setTimeout(()=>{
                  this.$emit('close');
                }, 300)
            }else{
                $(layer).css('right', 0);
                $('body').css('overflow', 'hidden');
            }

            $(layer).removeClass('ing');
            flag = false;
            startX= null
            setTimeout(()=>{
              if(this.scrollTop == 0) this.isScrolling = false
            }, 150)
        }

        function touchStart(e){
          if(this.isScrolling) return
            let touch = e.touches[0];
            menutop = 0;
            startX = touch.clientX;
            close = false;
        }

        layerwrap.addEventListener("touchstart", touchStart, true);
        layerwrap.addEventListener("touchmove", touchMove.bind(this), true);
        layerwrap.addEventListener("touchend", touchEnd.bind(this), true);
      },
      closeLayer(){
        // const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer

       
        $(layer).animate({right:'-100vw'});

        $('body').css('overflow', '');
      }      
    }
}
</script>
