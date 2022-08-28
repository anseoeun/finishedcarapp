<template>
    <div class="header-sub">
        <div class="left">
          <button class="back"><Icon type="back" /></button>
        </div>
        <div class="center">
          <strong class="tit">{{ title }}</strong>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
      title(){
        return this.$root.$route.meta.title ? this.$root.$route.meta.title : ''
      },
    },   
    data() {
        return {
            status: true,
            alarm: 10
        }
    }
}
</script>
