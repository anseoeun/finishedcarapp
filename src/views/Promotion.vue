<template>
  <div class="contents">
    <div class="promotion-wrap">
      <h2 class="tit-promotion">Polestar</h2>
      <div class="promotion-visual" :style="'background-image:url('+require('@/assets/images/polestar/visual-promotion.jpg')+')'"></div>
      <!-- 충전 프로모션 -->
      <h2 class="tit-promotion line">충전 프로모션</h2>
      <ul class="f-list label-fix1">
        <li>
          <div class="label">대상</div>
          <div class="auto">PlusPack 구매 고객 대상</div>
        </li>
        <li>
          <div class="label">제공혜택</div>
          <div class="auto">아래 두가지 중 1개 혜택 선택</div>
          <div class="full">
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
          </div>
        </li>
      </ul>
      <!-- 사전 예약 안내 -->
      <h2 class="tit-promotion line">사전 예약 안내</h2>
      <ul class="f-list label-fix1">
        <li>
          <div class="label">사전예약기간</div>
          <div class="auto">2022. 01. 18 ~ 2022. 02. 21</div>
        </li>
        <li>
          <div class="label">추가혜택</div>
          <div class="auto">Polestar 사전 예약기간 동안, 사전 예약을 진행(사전 예약금 지불)한 고객 한정으로 홈충전기 설치 신청 시 <b>무상 설치 지원</b> (표준 공사 범위 내, 한전불입금 별도)</div>
        </li>
      </ul>
      <!-- 충전혜택 신청방법 -->
      <h2 class="tit-promotion line">충전혜택 신청방법</h2>
      <ul class="f-list label-fix1">
        <li>
          <div class="label">신청기간</div>
          <div class="auto">2023년 03월 31일까지 (2022년 출고 고객 / 회원가입 기준) </div>
        </li>
        <li>
          <div class="label">신청안내</div>
          <div class="auto">회원가입 이후 마이페이지에서 충전 혜택 선택</div>
        </li>
        <li>
          <div class="label">회원가입</div>
          <div class="full">
            <div class="apply-step"><img :src="require('@/assets/images/polestar/step-charge-benefits-apply-method.svg')" alt="충전혜택 신청방법" /></div>
          </div>
        </li>
        <li>
          <div class="label">선택1 신청</div>
          <div class="auto">회원인증 완료 > 충전포인트 지급</div>
        </li>
        <li>
          <div class="label">선택2 신청</div>
          <div class="auto">고객 상담 및 현장실사 > 설치 가능 > 대금 결제(추가비용 발생시) > 충전기 설치(설치 불가시 선택1 혜택으로 전환)</div>
        </li>
      </ul>
      <!-- 충전포인트 -->
      <h2 class="tit-promotion line">충전포인트</h2>      
      <div class="f-wrap">
        <div class="img">
          <img :src="require('@/assets/images/polestar/img-charge-benefits1.png')" style="width:8.8rem" alt="">
        </div>
        <div class="auto">
          <strong class="tit">Polestar 전용 멤버십 카드 제공</strong>
          <ul class="f-list label-fix2">
            <li>
              <div class="label">이용방법</div>
              <div class="auto">이용 가능한 충전소에서 충전카드를 카드 인식부에 접촉</div>
            </li>
            <li>
              <div class="label">유효기간</div>
              <div class="auto">충전포인트 지급일로부터 1년</div>
            </li>
            <li>
              <div class="label">사용처</div>
              <div class="auto">차지비 충전기 및 로밍파트너사 충전기</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 로밍파트너사 -->
      <h2 class="tit-promotion line">로밍파트너사</h2>
      <ul class="logo-list">
        <li v-for="(img, i) in logoList" :key="i">
          <img :src="require('@/assets/images/logos/'+img.src)" :style="img.height ? 'height:'+img.height+'rem' : ''" alt="">
        </li>
      </ul>
      <!-- 홈충전기 설치지원 -->
      <h2 class="tit-promotion line">홈충전기 설치지원</h2>
      <div class="f-wrap">
        <div class="img">
          <img :src="require('@/assets/images/polestar/img-charge-benefits2.png')" style="width:2.78rem" alt="">
        </div>
        <div class="auto">
          <strong class="tit">Polestar 전용 홈충전기 제공</strong>
          <ul class="f-list label-fix2">
            <li>
              <div class="label">설치비용</div>
              <div class="auto">25만원(vat포함, 사전 예약고객은 표준 공사 조건에 한하여 무상 지원)
                <br>※ 사전 신청 고객이 아닐 경우 설치 비용은 별도 문의 필요
              </div>
            </li>
            <li>
              <div class="label">현장실사</div>
              <div class="auto">회원가입 및 인증 완료 후 48시간 이내 해피콜 실시 후 설치 실사 일정 등 안내</div>
            </li>
            <li>
              <div class="label">상품결제</div>
              <div class="auto">현장 실사 후 홈충전기 추가비용에 대한 설치 대금 결제 필수</div>
            </li>
            <li>
              <div class="label">추가비용<br>발생안내</div>
              <div class="auto">
                <ul class="dash-list">
                  <li>한국전력 표준시설부담금 별도(발생 시 고객부담)</li>
                  <li>표준공사 범위(30m) 초과 시 m당 추가 요금 발생</li>
                  <li>스탠드형 설치 시 20만원 추가 요금 발생</li>
                  <li>취득세(지방세) 별도 (발생 시 고객 부담)</li>
                  <li>충전요금: 한국전력 고지서 청구, 고객 직접 납부</li>                  
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- // guide-wrap -->
  </div>
</template> 

<script>
export default {
  data(){
    return{
      logoList: [
        {src: 'logo-me.png'},
        {src: 'logo-kepco.png'},
        {src: 'logo-jeju.png'},
        {
          src: 'logo-everon.png',
          height: 0.32,
        },
        {
          src: 'logo-sscharger.png',
          height: 0.93,
        },
        {src: 'logo-kevcs.png'},
        {
          src: 'logo-lghellow.png',
          height: 0.65,
        },
        {src: 'logo-tardis.png'},
        {src: 'logo-evolt.png'},
        {src: 'logo-samsung-evc.png'},
        {src: 'logo-kevit.png'},
        {src: 'logo-klin.png'},
        {src: 'logo-chaevi.png'},
        {src: 'logo-gconnect.png'},
        {src: 'logo-joyev.png'},
        {src: 'logo-ev.png'},
        {
          src: 'logo-gs.png',
          height: 1,
        },
        {
          src: 'logo-starkoff.png',
          height: 1.2,
        },
        {
          src: 'logo-humaxev.png',
          height: 1.2,
        },
        {
          src: 'logo-evz.png',
          height: 1.2,
        },
        {src: 'logo-cus.png'},
        {
          src: 'logo-ecarplug.png',
          height: 1.2,          
        },
      ]
    }
  }
}
</script>
