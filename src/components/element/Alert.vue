<template>
    <Popup :is-open="visible" 
        :customBtn="true"
       @close="$emit('close');"
    >
        <template slot="header">{{ alert.title }}</template>
        <template slot="body">
          <div class="alert-txt" v-html="alert.txt"></div>
        </template>
        <template slot="btn">
          <slot v-if="alert.customBtn" name="btn" />
          <button class="btn-type1 st1" @click="$emit('close');"><span>확인</span></button>
          <button class="btn-type1 st2" @click="$emit('close');"><span>취소</span></button>
        </template>
    </Popup>    
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    alert:{
      type: Object,
      default: () => {},
    }
  },  
  data(){
    return{

    }
  },
}
</script>
