<template>
  <div class="contents">
    <button v-if="skin === 'benz'" class="back">
      <Icon v-if="skin !== 'polestar'" type="back" />
    </button>
    <div class="join-etc-wrap join-rule-wrap">
      <div v-if="skin !== 'polestar'" class="logo"></div>
      <div class="text">
        <strong>이용 약관 동의</strong>
        <p>
          <span v-if="skin !== 'polestar'">차지비 서비스</span>
          <span v-else>Polestar Charging</span> 이용을 위해 다음 약관에<br>동의해 주시기 바랍니다.
        </p>
      </div>
      <div class="menu-wrap">
        <div class="grid-list-menu">
          <div class="row total">
            <div class="check">
              <button @click="setAllCheck">
                <span class="icon-check" :class="{on: !ruleChecked.includes(false)}">
                  <Icon type="check-total" />
                </span>
                <span class="txt">아래 약관에 모두 동의합니다.</span>
              </button>
            </div>
          </div>
          <div v-for="(item, index) in ruleList" :key="index" class="row">
            <div class="check">
              <button @click="checkIcon($event, 'ruleChecked', index)">
                <span class="icon-check">
                  <Icon type="check" :class="{on: ruleChecked[index]}" />
                </span>
                <span class="txt">{{ item.tit }}</span>
              </button>
            </div>
            <div v-if="item.tit !== '이메일 / SMS 정보수집 동의'" class="right">
              <button class="bth-link" @click="popRule('rule'+(index + 1));">
                <Icon type="arr-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-wrap">
        <button class="btn-type1 st1" @click="alertPop = true"><span>동의</span></button>
      </div>
    </div>
    <!-- 약관 상세내역 -->
    <PopRuleDetail :visible="btmLayer.popRuleDetail" :gbn.sync="ruleGbn" @close="btmLayer.popRuleDetail = false" />
  </div>
</template>

<script>
import PopRuleDetail from '@/views/PopRuleDetail'
export default {
  components: {
    PopRuleDetail
  },
  data() {
    return {
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
          tit: '휴대폰본인확인 서비스 이용 동의 (필수)',
          link: '/'
        },
        // {
        //   tit: '개인정보 수집/이용 동의 (필수)',
        //   link: '/'
        // },
        // {
        //   tit: '통신사 이용약관 동의 (필수)',
        //   link: '/'
        // },
        // {
        //   tit: '서비스 이용약관 동의 (필수)',
        //   link: '/'
        // },
        // {
        //   tit: '개인정보 제 3자 제공 동의(알뜰폰) (필수)',
        //   link: '/'
        // },
        {
          tit: '이메일 / SMS 정보수집 동의',
          link: '/'
        }
      ],
      ruleGbn: '',

      btmLayer: {
        popRuleDetail: false,
      },
    }
  },
  methods: {
    setAllCheck() {
      let num = this.ruleChecked.length - 1;
      let check = !this.ruleChecked.includes(false) ? false : true
      for (let i = 0; i <= num; i++) {
        this.$set(this.ruleChecked, i, check);
      }
    },
    popRule(index) {
      this.ruleGbn = index;
      this.btmLayer.popRuleDetail = true;
    }
  }
}
</script>

<style scroped>
.skin-benz .header-sub {
  display: none;
}

.skin-benz .contents {
  padding-top: 0 !important;
}
</style>