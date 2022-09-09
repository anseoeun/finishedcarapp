<template>
    <Popup :is-open="visible" 
       @close="$emit('close');"
    >
        <template slot="header">2022년 08월</template>
        <template slot="body">
          캘린더
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="confirm();"><span>확인</span></button>
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
  },  
  data(){
    return{
    }
  },
}
</script>
