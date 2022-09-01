<template>
    <div class="header-sub">
        <div class="left">
          <button class="back"><Icon type="back" /></button>
        </div>
        <div class="center">
          <h1 class="tit">{{ title }}</h1>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    title(){
      if(this.$route.path === '/joinRuleList') { //이용 약관 동의
        if(this.skin === 'bmw') return '회원가입'
        if(this.skin === 'benz') return ''
        if(this.skin === 'polestar') return '이용 약관 동의'
      }
      return this.$root.$route.meta.title ? this.$root.$route.meta.title : ''
    },
  },
}
</script>
