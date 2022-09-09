<template>
  <div 
    v-if="isOpen"
    :dim="isDim"
    class="popup-wrap">
      <div class="dim" v-if="isDim" @click="onCloseDim"></div>
      <div class="popup">
        <!-- <button v-if="close" class="btn-close" @click="$emit('close');"><Icon type="close" /></button>         -->
          <div v-if="$slots.header" class="pop-header">
              <div class="pop-tit">
                <slot name="header" />
              </div>
          </div>
          <div class="pop-body">
              <template v-if="$slots.body">
                <slot name="body" />
              </template>
          </div>
          <div class="pop-footer">
              <div class="btn-wrap">
                <slot v-if="$slots.btn" name="btn" />
                <button v-else class="btn-type1 st1" @click="$emit('close');$emit('confirm')"><span>확인</span></button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen:{
      type: Boolean,
      default: false
    },
    isDim:{
      type: Boolean,
      default: true
    },
    dimClose:{
      type: Boolean,
      default: false
    },
    customBtn:{
      type: Boolean,
      default: false
    },
    close:{
      type: Boolean,
      default: true
    },
  },
  watch:{
    isOpen(newValue, oldValue) {
      if (newValue) {
        document.body.setAttribute('style', 'overflow:hidden')
      }else if (oldValue){
        document.body.setAttribute('style', '')
      }      
    }    
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onCloseDim() {
      if(this.dimClose) this.$emit('close')
    },
  }
}
</script>