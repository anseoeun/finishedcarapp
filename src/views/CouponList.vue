<template>
  <div class="contents">
    <div class="coupon-wrap">
      <div class="tit-wrap">
        <h2 class="tit-type1">쿠폰 eX</h2>
        <div class="right">
          <router-link to="/" class="btn-type5 st4"><span>쿠폰 보관함</span><Icon type="arr-right-sm"/></router-link>
        </div>
      </div>
      <!-- 쿠폰 리스트 -->
      <h3 class="tit-coupon"><span>쿠폰 리스트</span></h3>
      <div class="point-wrap">
        <ul class="labels">
          <li>잔여 포인트</li>
          <li>사용가능 포인트</li>
        </ul>
        <div class="points">
          <ul>
            <li>
              <div class="point"><b>250,000</b><span>포인트</span></div>
              <div class="gage"><b style="width:80%"></b></div>
            </li>
            <li>
              <div class="point"><b>10,000</b><span>포인트</span></div>
              <div class="gage"><b style="width:20%"></b></div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 세차쿠폰 -->
      <div class="tit-wrap">
        <h4 class="tit-type2">세차쿠폰</h4>
        <div class="right">
          <button to="/" class="btn-type5 st4"><span>사용처</span></button>
        </div>
      </div>
      <div class="coupon-list">
        <ul>
          <li v-for="(item, i) in couponList" :key="i"><button @click="popup.issue=true"><img :src="item.src" /></button></li>
        </ul>
      </div>

      <!-- 주유쿠폰 -->
      <div class="tit-wrap">
        <h4 class="tit-type2">주유쿠폰</h4>
        <div class="right">
          <button to="/" class="btn-type5 st4"><span>사용처</span></button>
        </div>
      </div>
      <div class="coupon-list">
        <ul>
          <li v-for="(item, i) in couponList2" :key="i"><button @click="popup.issue=true"><img :src="item.src" /></button></li>
        </ul>
      </div>
    </div>

    <!-- 팝업:쿠폰발급 -->
    <Popup :is-open="popup.issue" @close="popup.issue=false">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">
            쿠폰을 발급하시겠습니까?
            <br>발급가능한 금액 <b>10,000</b>에서 수수료를 
            <br>포함한 <b>500</b>포인트가  차감됩니다.
          </div>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="popup.issue=false"><span>확인</span></button>
          <button class="btn-type1 st2" @click="popup.issue=false"><span>취소</span></button>
        </template>
    </Popup>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      couponList: [
        {
          src: require('@/assets/images/bmw/temp-coupon-1.png')
        }
      ],
      couponList2: [
        {
          src: require('@/assets/images/bmw/temp-coupon-2.png')
        },
        {
          src: require('@/assets/images/bmw/temp-coupon-2.png')
        },
      ],

      popup: {
        issue: false
      }
    }
  },
}
</script>
