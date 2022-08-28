<template>
  <div class="contents">
    <div class="join-rule-list-wrap">
      <div class="logo"></div>
      <div class="text">
        <strong>이용 약관 동의</strong>
        <p>
          차지비  서비스 이용을 위해 다음 약관에<br>동의해 주시기 바랍니다.
        </p>
      </div>
        <div class="menu-wrap">
          <div class="grid-list-menu">
            <div class="row total">
               <div class="check">
                  <button  @click="setAllCheck">
                    <span class="icon-check" :class="{on: !ruleChecked.includes(false)}">
                      <Icon type="check-total" />
                    </span>
                    <span class="txt">아래 약관에 모두 동의합니다.</span>
                  </button>
              </div>
            </div>
            <div v-for="(item, index) in ruleList" :key="index" class="row">
              <div class="check">
                  <button  @click="checkIcon($event, 'ruleChecked', index)">
                    <span class="icon-check">
                      <Icon type="check" :class="{on: ruleChecked[index]}" />
                    </span>
                    <span class="txt">{{ item.tit }}</span>
                  </button>
              </div>
              <div class="right">
                <router-link :to="item.link" class="bth-link">
                  <Icon type="arr-right" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="btn-wrap">
            <button class="btn-type1 st1" @click="alertPop = true">동의</button>
          </div>
        </div>
    </div>

    <!-- 팝업 -->
    <Alert :is-open="alertPop" @close="alertPop = false">      
        <template slot="header">전화번호 인증 안내</template>
        <template slot="body">
          차지비 신규앱 최초 로그인 시<br />
          전화번호 인증을 1회 진행합니다.<br />
          약관 동의 후 회원 정보를 확인해주세요.
        </template>
    </Alert>    
  </div>
</template>

<script>

export default {
  data(){
    return{
      ruleChecked: new Array(5).fill(false),
      ruleList: [
        {
          tit: '차지비 이용약관 (필수)',
          link: '/'
        },
        {
          tit: '개인정보취급방침 (필수)',
          link: '/'
        },
        {
          tit: '위치기반서비스 이용약관 (필수)',
          link: '/'
        },
        {
          tit: '이메일 / SMS 정보수집 동의',
          link: '/'
        }
      ],
      //팝업
      alertPop: false,            
    }
  },
  methods: {
    setAllCheck(){
      let num = this.ruleChecked.length - 1;
      let check = !this.ruleChecked.includes(false) ? false : true
      for(let i=0;i<=num;i++){
        this.$set(this.ruleChecked, i, check);
      }
    },
  }
}
</script>
