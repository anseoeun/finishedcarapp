<template>
    <div 
      ref="layerwrap" 
      class="btm-layer-wrap"
      :class="{on:visible}"
     >
      <div ref="layer" class="btm-layer" style="display:none">
        <button v-if="close" class="btn-close" @click="$emit('close');"><Icon type="close" /></button>        
          <template v-if="$slots.header">
              <div class="layer-header">
                <button class="btn-header-close" @click="$emit('close');"><Icon type="back" /></button>
                <div class="title">
                  <slot ref="header" name="header" />
                </div>
              </div>
          </template>
          <template>
              <slot ref="content" name="content" />
          </template>
          <template v-if="$slots.footer">
              <div class="layer-footer">
                <slot ref="footer" name="footer" />
              </div>
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
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer
        
        if (newVisible) {
            setTimeout(()=>{
              $('body').css('overflow', 'hidden');
              $(layerwrap).fadeIn(300);
              setTimeout(()=>{
                $(layer).slideDown(180, function(){
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

        let startY= null;
        let dir = null;
        let menutop = 0 
        let over = 100;
        let close = false;
        let moveY = null;
        let flag = false;
        // let bottom = $(layerwrap).hasClass('apply-footer') ? $('.footer').height() : 0;

        function touchMove(){
          let e = window.event;
            if(e.target.closest('.cont-scroll') && this.isScrolling) return

            let touch = e.touches[0];

            moveY = Math.abs(menutop - parseInt(startY - touch.clientY));

            if(moveY > 30) flag = true; 
            if(flag) e.stopPropagation();
 
            if(startY > touch.clientY) dir = 'plus'
            else dir = 'minus'
            
            if(menutop - parseInt(startY - touch.clientY) >= 0) {
              $(layer).css('bottom',  parseInt(startY - touch.clientY) + 'px');
            }else{
              $(layer).css('bottom', 0);
            }

           if(dir == 'minus' && moveY > over){
                close = true;
            }else{
                close = false;0
            }
        }

        function touchEnd(){  
            if(close) {
                this.closeLayer();
                setTimeout(()=>{
                  this.$emit('close');
                }, 300)
            }else{
                $(layer).css('bottom', 0);
                $('body').css('overflow', 'hidden');
            }

            $(layer).removeClass('ing');
            flag = false;
            startY= null
            setTimeout(()=>{
              if(this.scrollTop == 0) this.isScrolling = false
            }, 150)
        }

        function touchStart(e){
          if(this.isScrolling) return
            let touch = e.touches[0];
            menutop = 0;
            startY = touch.clientY;
            close = false;
        }

        layerwrap.addEventListener("touchstart", touchStart, true);
        layerwrap.addEventListener("touchmove", touchMove.bind(this), true);
        layerwrap.addEventListener("touchend", touchEnd.bind(this), true);
      },
      closeLayer(){
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer

       
        $(layer).slideUp(150, ()=>{
          $(layer).css('bottom', 0);
          $(layerwrap).fadeOut(300);
        })
        $('body').css('overflow', '');
      }      
    }
}
</script>
