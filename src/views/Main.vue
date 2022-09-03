<template>
  <div class="contents">
    <div class="main-wrap">
      <div class="main-visual">
        <Carousel class="visual-slide" :data="visualList" :options="cardSliderOpt">
          <template slot-scope="props">
            <button class="visual" :style="'background-image:url('+props.item.src+')'"></button>
          </template>
        </Carousel>
      </div>

      <!-- 간편정보 -->
      <div class="main-info-wrap">
        <strong class="tit">간편정보</strong>
        <!-- 로그인전 -->
        <div class="before-login">

        </div>
        <!-- 로그인후 -->
        <div class="summary-info">
          <router-link to="/" class="point-wrap">
            <div class="name">
              <strong class="name">고객명</strong>
              <span class="label">잔여포인트</span>
            </div>
            <div class="point">
              <strong>18,984</strong>
              <span>포인트</span>
            </div>
          </router-link>
          <ul class="status-wrap">
            <li>
              <span class="icon"></span>
              <div class="desc">
                <strong>충전 상태</strong>
                <p>충전대기</p>
              </div>
            </li>
            <li>
              <span class="icon"></span>
              <div class="desc">
                <strong>예약상태</strong>
                <p>예약없음</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 충전기 설치신청 -->
      <div class="main-info-wrap">
        <template v-if="skin === 'bmw'">
          <strong class="tit">충전기 설치신청</strong>
          <router-link to="/" class="link-box">
              <span>“BMW Charging”</span>
              <div class="txt">다양한 홈충전솔루션 신청</div>
          </router-link>
        </template>
        <template v-if="skin === 'benz'">
          <strong class="tit">스마트코칭 서비스</strong>
          <router-link to="/" class="link-box">
              <span>“Smart Coacing Service”</span>
              <div class="txt">메르세데스-벤츠 스마트코칭</div>
          </router-link>
        </template>
        <template v-if="skin === 'polestar'">
          <strong class="tit">안내</strong>
          <router-link to="/" class="link-box">
              <div class="txt">Polestar2 충전안내</div>
          </router-link>
        </template>
      </div>

      <!-- 공지사항 -->
      <div class="main-info-wrap">
        <strong class="tit">공지사항</strong>
        <div class="main-notice">
          <ul>
            <li><router-link to="/">[2021-10-12]공지사항3</router-link></li>
            <li><router-link to="/">[2021-10-12]공지사항3</router-link></li>
            <li><router-link to="/">[2021-10-12]공지사항3</router-link></li>
          </ul>
          <router-link to="/" class="more"></router-link>
        </div>
      </div>

    </div>
    <!-- // main-wrap -->
  </div>
</template>

<script>

export default {
  components:{

  },
  data(){
    return{
      cardSliderOpt: {
        perPage: 1,
        perMove:1,
        arrows: true
      },
    }
  },
  computed: {
    visualList(){
      return  [
          {
            src: require(`@/assets/images/${this.skin}/temp-main-visual.jpg`)
          },
          {
            src: require(`@/assets/images/${this.skin}/temp-main-visual.jpg`)
          }
        ]
    }
  },
  methods: {

  }
}
</script>
