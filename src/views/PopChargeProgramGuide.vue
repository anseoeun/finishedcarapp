<template>
  <BtmLayer :visible="visible" @close="$emit('close')" class="pop-charge-guide">
    <template slot="header">폴스타 충전프로그램 안내사항</template>
    <template slot="content">
      <div class="cont-scroll">
        <div class="charge-program-guide">
          <!-- [제공혜택] -->
          <div class="benefits">
            <strong class="tit">[제공혜택]</strong>
            <ol class="num-list3">
              <li>아래 선택1과 선택2 중 택1 (1개 혜택만 제공됨)</li>
              <li>혜택 변경은 기제공된 혜택을 사용하지 않은 경우 1회에 한해 가능</li>
            </ol>
            <!-- charge-benefits -->
            <div class="charge-benefits">
              <div class="benefit">
                <div class="text">
                  <strong><em>선택1.</em><span>충전포인트</span></strong>
                  <p>충전포인트 1년 무제한</p>
                </div>
                <div class="img">
                  <img :src="require('@/assets/images/polestar/img-charge-benefits1.png')" style="width:8.8rem" alt="">
                </div>
              </div>
              <div class="benefit">
                <div class="text">
                  <strong><em>선택2.</em><span>홈충전기 설치 지원</span></strong>
                  <p><em>(홈충전기 별도 제공 불가)</em></p>
                </div>
                <div class="img">
                  <img :src="require('@/assets/images/polestar/img-charge-benefits2.png')" style="width:2.7rem" alt="">
                </div>
              </div>
            </div>
            <!-- // charge-benefits -->            
            <div class="agree">
              <label class="inp-check st2">
                <input type="checkbox" v-model="agreeChecked[0]">
                <span class="ic"></span>
                <span class="t">동의</span>
              </label>
            </div>
          </div>
          <!-- [선택1. 충전포인트 1년 무제한] -->
          <div class="benefits">
            <strong class="tit">[선택1. 충전포인트 1년 무제한]</strong>            
            <ol class="num-list3">
              <li>회원가입 및 인증완료 후 충전포인트 자동 지급</li>
              <li>지급된 포인트는 차지비 및 차지비와 제휴된 로밍사 충전기에서 사용 가능</li>
              <li>지급된 포인트는 지급일로부터 1년간 유효 (중단, 연장 불가)</li>
              <li>유효기간 만료시 충전요금은 등록된 신용카드로 결제</li>
              <li>본 혜택은 폴스타 차량에 제공되는 혜택으로 금전적인 대가와 관계없이 대여, 양도, 판매가 불가하며, 이를 위반할 경우 혜택 회수를 포함한 서비스 제재가 적용될 수 있음</li>
            </ol>
            <div class="agree">
              <label class="inp-check st2">
                <input type="checkbox" v-model="agreeChecked[1]" @change="agreeChecked[1] ? agreeChecked[2] = false : ''">
                <span class="ic"></span>
                <span class="t">동의</span>
              </label>
            </div>
          </div>
          <!-- [선택2. 홈충전기 설치 지원(홈충전기 만 별도 제공 불가)] -->
          <div class="benefits">
            <strong class="tit">[선택2. 홈충전기 설치 지원(홈충전기 만 별도 제공 불가)]</strong>            
            <ol class="num-list3">
              <li>설치비용: 사전 신청고객은 표준공사범위(벽부형 설치, 전기인입 30M 기준) 내 무상 지원<br>※ 사전 신청 고객이 아닐 경우 설치 비용은 별도 문의 필요</li>
              <li>회원가입 및 인증 완료 후 48시간 이내 해피콜 실시 (현장실사 일정 등 안내)</li>
              <li>
                <div>
                  <strong>추가 비용 발생 내역</strong>
                  <ul class="dash-list">
                    <li>표준공사범위(30M) 초과 시, M당 추가 비용 발생</li>
                    <li>스탠드형 설치 시,  25만원(vat 포함) 추가 비용 발생</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  주거환경 등에 따라 발생되는 제세공과금은 고객 직접 납부 필요 (발생 시)
                  <ul class="dash-list">
                    <li>한국전력 표준시설부담금, 취득세(지방세) 등</li>
                  </ul>
                </div>
              </li>
              <li>충전요금은 한국전력 고지서로 청구되며, 고객 직접 납부 필요</li>
              <li>보증기간: 2년</li>
            </ol>
            <div class="agree">
              <label class="inp-check st2">
                <input type="checkbox" v-model="agreeChecked[2]" @change="agreeChecked[2] ? agreeChecked[1] = false : ''">
                <span class="ic"></span>
                <span class="t">동의</span>
              </label>
            </div>
          </div>

          <div class="all-agree-check">
            <strong> ※ 위 사항을 모두 동의하였습니다.</strong>
            <div class="input-name">
              <Input type="text" placeholder="가입자 이름 입력" />
            </div>
          </div>

        </div>
        <!-- // charge-program-guide -->
      </div>
    </template>
    <template slot="footer">
      <div class="btn-wrap">
        <button class="btn-type1 st1" @click="confirm()"><span>확인</span></button>
        <button class="btn-type1 st2" @click="cancel()"><span>취소</span></button>
      </div>
    </template>
  </BtmLayer>

</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    agreeAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      agreeChecked: new Array(3).fill(false),
      confirmAgreeChecked: new Array(3).fill(false),
    }
  },
  methods:{
    confirm(){
      this.$emit('close');
      this.confirmAgreeChecked = this.agreeChecked;
      this.$emit('confirm', this.agreeChecked.includes(true));
    },
    cancel(){
      this.$emit('close');
      this.agreeChecked = this.confirmAgreeChecked;
    }
  }
}
</script>