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
      if(this.$route.path === '/chargeStatus') { //충전상태
        if(this.skin === 'bmw') return '충전상태'
        if(this.skin === 'benz') return '즉시충전'
        if(this.skin === 'polestar') return '즉시충전'
      }
      if(this.$route.path === '/reserveStatus') { //예약현황
        if(this.skin === 'bmw') return '예약현황'
        if(this.skin === 'benz') return '예약내역'
        if(this.skin === 'polestar') return '예약내역'
      }
      if(this.$route.path === '/apply' || this.$route.path === '/applyIndex') { //신청하기
        if(this.skin === 'bmw') return '홈충전솔루션 신청'
        if(this.skin === 'benz') return '홈충전솔루션 신청'
        if(this.skin === 'polestar') return '홈충전기 설치신청'
      }
      if(this.$route.path === '/ChargeStart') { //충전하기
        if(this.skin === 'bmw') return '충전하기'
        if(this.skin === 'benz') return '즉시충전'
        if(this.skin === 'polestar') return '즉시충전'
      }
      return this.$root.$route.meta.title ? this.$root.$route.meta.title : ''
    },
  },
}
</script>
