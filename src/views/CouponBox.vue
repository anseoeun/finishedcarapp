<template>
  <div class="contents">
    <div class="coupon-wrap">
      <h2 class="tit-type1">쿠폰보관함</h2>

      <!-- 쿠폰 리스트 -->
      <div class="tab-coupon">
        <button @click="currentTab = 'ing'" :class="{on: currentTab === 'ing'}">
          <h3 class="tit-coupon"><span>보유쿠폰</span></h3>
        </button>
        <button @click="currentTab = 'end'" :class="{on: currentTab === 'end'}">
          <h3 class="tit-coupon"><span>사용쿠폰</span></h3>
        </button>
      </div>

      <!-- 보유쿠폰 -->
      <div v-if="currentTab === 'ing'" class="coupon-list">
        <ul>
          <li v-for="(item, i) in couponList" :key="i">
            <div class="box">
              <button class="desc-wrap" @click="popup.detail=true">
                <div class="icon"><img :src="item.src" alt=""></div>
                <div class="desc">
                  <strong class="tit">{{ item.tit }}</strong>
                  <span class="date">{{ item.date }}까지</span>
                </div>
              </button>
              <button class="cancel" @click="popup.cancel=true">취소</button>
            </div>
          </li>
        </ul>
      </div>
      <!-- 사용쿠폰 -->
      <div v-if="currentTab === 'end'" class="coupon-list">
        <ul>
          <li v-for="(item, i) in endCouponList" :key="i">
            <div class="box">
              <div class="end-txt">{{ item.used }} 사용완료</div>
              <button class="desc-wrap">
                <div class="icon"><img :src="item.src" alt=""></div>
                <div class="desc">
                  <strong class="tit">{{ item.tit }}</strong>
                  <span class="date">{{ item.date }}까지</span>
                </div>
              </button>
              <button class="cancel">취소</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 팝업:상세 -->
    <Popup :is-open="popup.detail" @close="popup.detail=false">
        <template slot="body">
          <div class="tit-wrap">
            <div class="pop-tit">쿠폰보관함</div>
            <div class="right">
              <button class="btn-type5 st4"><span>확대해서 보기</span></button>
            </div>
          </div>
          <div class="coupon-detail">
            <div class="barcode">
              발급된 바코드
            </div>
            <div class="coupon-desc">
              <img :src="require('@/assets/images/bmw/temp-coupon-detail.png')" alt="">
              <div class="desc">
                <pre>
                  유효기간: 2022-10-10 ~ 2023-10-10

                  유의사항
                  1) 유효기간
                  - 구매일로부터 1년 : 구매한 쿠폰은 유효기간 내에서만 사용 가능하며, 쿠폰의 유효기간이 지난 경우에는 사용 불가
                  2) 환불기간
                  - 구매한 쿠폰은 유효기간 내에서만 구매한 포인트로 전환이 가능하며, 유효기간 이후에는 환불 불가능
                  - 단, 쿠폰의 유효기간이 포인트의 유효기간을 초과하지 않은 경우에만 구매한 포인트로 환불 가능
                  - 포인트의 유효기간이 지난 경우에는 쿠폰의 유효기간이 남아있더라도 구매한 포인트로 환불 불가능
                  3) 유의사항 
                  - 유효기간 이내 1인 1일 1매 사용 가능
                  - 본 쿠폰금액 이외 추가 결제한 금액에 대해서만 GS＆POINT 적립 가능
                  - 쿠폰의 현금 교환 및 타인 양도 불가
                  - 동일쿠폰 및 타 쿠폰과 중복사용 불가
                  - 쿠폰금액 미만 결제 시 잔액 환불 불가
                  - 현금영수증 발급 불가
                </pre>
              </div>
            </div>
          </div>
        </template>
    </Popup>    

    <!-- 팝업:쿠폰 상세정보 -->
    <Popup :is-open="popup.cancel" @close="popup.cancel=false">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">쿠폰을 취소하시겠습니까?</div>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="popup.cancel=false"><span>확인</span></button>
          <button class="btn-type1 st2" @click="popup.cancel=false"><span>취소</span></button>
        </template>
    </Popup>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentTab: 'ing',
      couponList: [
        {
          src: require('@/assets/images/bmw/temp-coupon-icon.png'),
          tit: 'GS칼텍스 주유쿠폰 30,000원',
          date: '2022-10-28'
        }
      ],
      endCouponList: [
        {
          src: require('@/assets/images/bmw/temp-coupon-icon.png'),
          tit: 'GS칼텍스 주유쿠폰 30,000원',
          date: '2022-10-28',
          used: '2022-10-10'
        },
        {
          src: require('@/assets/images/bmw/temp-coupon-icon.png'),
          tit: 'GS칼텍스 주유쿠폰 30,000원',
          date: '2022-10-28',
          used: '2022-10-10'
        },
      ],

      popup: {
        detail: false,
        cancel: false
      }
    }
  },
}
</script>
