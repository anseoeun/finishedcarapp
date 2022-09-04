<template>
  <input
    :type="type"    
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength" 
    :autocomplete="autocomplete"    
    @input="onInput"
    :oninput="maxLength(maxlength)"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number],
      default: ''
    },         
    autocomplete: {
      type: String,
      default: ''
    },
  },
  methods: {
    onInput(e) {
      let value =  e.target.value
      let max = parseInt(this.maxlength)
      if (max !== '' && value.length > max){
        value = value.slice(0, max)
      }
      this.$emit('input', value)
    },    
    maxLength(max){
      if(!max) return;
      return 'if (this.value.length > '+ max +') this.value = this.value.slice(0, '+ max +')';
    }  
  }
}
</script>