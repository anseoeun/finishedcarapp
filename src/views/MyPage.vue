<template>
  <div class="contents">
    <div class="mypage-wrap">
      <div class="card-visual">
        <h2 v-if="skin !== 'polestar'" class="tit-type1">
          <template v-if="skin !== 'bmw'">마이페이지</template>
          <template v-else>마이차지비</template>
        </h2>
        
        <Carousel class="slide-list" :class="{'no-slide':cardList.length <= 1}" :data="cardList" :options="cardSliderOpt">
          <template slot-scope="props">
            <router-link to="/" class="card" :class="{on: props.item.selected}">
                <div class="card-img" :style="'background-image:url('+props.item.src+')'"></div>
                <div class="card-num">
                    <div class="tit">카드번호 :&nbsp;</div>
                    <div class="num">
                      <span>{{ props.item.num[0] }}</span>-<span>{{ props.item.num[1] }}</span>-<span>{{ props.item.num[2] }}</span>-<span>{{ props.item.num[3] }}</span>
                    </div>
                </div>
            </router-link>
          </template>
        </Carousel>
      </div>
      <!-- mypage-cont -->
      <div class="mypage-cont">
        <h2 v-if="skin === 'polestar'" class="tit-type1">마이페이지</h2>
        <template v-if="skin === 'bmw'">
          <!-- remain-point -->
          <div class="remain-point">
            <div class="label">잔여포인트</div>
            <div class="point-wrap">
              <div class="point">
                <strong>18,984</strong>
                <span>포인트</span>
              </div>
              <div class="btn">
                <button @click="popup.point=true">유효기간 확인하기</button>
              </div>
            </div>
          </div>
          <div class="txt-payment">결제방식: 선불</div>
          <!-- // remain-point -->
        </template>

        <ul class="menu-list-type1 st2">
          <li><router-link to="/" class="menu"><span class="icon"><i class="i-myinfo"></i></span><span class="txt">내정보</span></router-link></li>
          <li v-if="skin === 'bmw'"><router-link to="/" class="menu"><span class="icon"><i class="i-product-list"></i></span><span class="txt">상품구매내역</span></router-link></li>
          <li><router-link to="/" class="menu"><span class="icon"><i class="i-using-list"></i></span><span class="txt">이용내역</span></router-link></li>
          <li v-if="skin !== 'polestar'"><router-link to="/" class="menu"><span class="icon"><i class="i-reserve-status"></i></span><span class="txt">예약현황</span></router-link></li>
          <li v-if="skin === 'polestar'"><router-link to="/" class="menu"><span class="txt">홈충전기 설치신청</span></router-link></li>
          <li v-if="skin === 'polestar'"><router-link to="/" class="menu"><span class="txt">설치현황 확인</span></router-link></li>
        </ul>
      </div>
      <!-- // mypage-cont -->

    </div>
    <!-- // main-wrap -->


     <!-- 팝업:포인트 유효기간  -->
    <Popup :is-open="popup.point" @close="popup.point=false;" >
        <template slot="header">포인트 유효기간</template>
        <template slot="body">
          <div class="point-available-wrap">
            <div class="date">21년 10월</div>
            <div class="grid-box st3">
              <ul>
                <li class="vt">
                  <div class="cell label">상품명</div>
                  <div class="cell auto"><b>[무제한] 1년 22년 BMW  Charging 인증회원상품(BEV)</b></div>
                </li>
                <li>
                  <div class="cell label">지급금액</div>
                  <div class="cell auto">무제한 포인트</div>
                </li>
                <li>
                  <div class="cell label">잔여금액</div>
                  <div class="cell auto"><span class="tag">무제한 포인트</span></div>
                </li>
                <li>
                  <div class="cell label">지급날짜</div>
                  <div class="cell auto">2021-10-01</div>
                </li>
                <li>
                  <div class="cell label">유효기간</div>
                  <div class="cell auto">2022-10-01</div>
                </li>
              </ul>
            </div>
          </div>
        </template>
    </Popup> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
        focus  : 'center',
        trimSpace: false,
        lazyLoad: true
      },

      popup: {
        point: false
      },
     
    }
  },
  computed: {
    cardList(){
      return  [
          {
            num: ['0000', '0000', '0000', '0000'],
            src: require(`@/assets/images/${this.skin}/temp-card.jpg`),
          },
          {
            num: ['0000', '0000', '0000', '0000'],
            src: require(`@/assets/images/${this.skin}/temp-card.jpg`),
          }
        ]
    }
  },
}
</script>
