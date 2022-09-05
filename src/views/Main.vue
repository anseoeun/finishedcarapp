<template>
  <div class="contents">
    <div class="main-wrap">
      <div class="main-visual">
        <Carousel class="visual-slide" :data="visualList" :options="visualSliderOpt">
          <template slot-scope="props">
            <button class="visual" :style="'background-image:url('+props.item.src+')'" @click="bannerSrc=props.item.bannerSrc;popup.view=true;"></button>
          </template>
        </Carousel>
      </div>

      <!-- 간편정보 -->
      <div class="main-info-wrap">
        <strong class="tit">간편정보</strong>
        <!-- 로그인전 -->
        <div class="before-login">
          <div class="box">
            로그인 후<br>이용 가능합니다.
          </div>
          <div v-if="skin === 'bmw'" class="box st2">
            비회원<br>충전 서비스
          </div>
        </div>
        <!-- 로그인후 -->
        <div class="summary-info">
          <router-link v-if="skin === 'bmw'" to="/" class="point-wrap">
            <div class="name">
              <strong>고객명</strong>
              <span class="label">잔여포인트</span>
            </div>
            <div class="point">
              <strong>18,984</strong>
              <span>포인트</span>
            </div>
          </router-link>
          <ul class="status-wrap">
            <li>
              <button @click="popup.nocharge=true">
                <span class="align">
                  <span class="icon"><i class="i-status-charge"></i></span>
                  <div class="desc">
                    <span>충전 상태</span>
                    <strong>충전대기</strong>
                  </div>
                </span>
              </button>
            </li>
            <li>
              <router-link to="/">
                <span class="align">
                  <span class="icon"><i class="i-status-reserve"></i></span>
                  <div class="desc">
                    <span>예약상태</span>
                    <strong>예약없음</strong>
                  </div>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- 충전기 설치신청 -->
      <div class="main-info-wrap">
        <template v-if="skin === 'bmw'">
          <strong class="tit">충전기 설치신청</strong>
          <router-link to="/" class="link-box">
              <div class="text">
                <span>“BMW Charging”</span>
                <div class="txt">다양한 홈충전솔루션 신청</div>
              </div>
          </router-link>
        </template>
        <template v-if="skin === 'benz'">
          <strong class="tit">스마트코칭 서비스</strong>
          <router-link to="/" class="link-box">
              <div class="text">
                <span>“Smart Coacing Service”</span>
                <div class="txt">메르세데스-벤츠 스마트코칭</div>
              </div>
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
            <li><router-link to="/" class="link">[2021-10-12]공지사항3</router-link></li>
            <li><router-link to="/" class="link">[2021-10-12]공지사항3</router-link></li>
            <li><router-link to="/" class="link">[2021-10-12]공지사항3 공지사항3공지사항3공지사항3공지사항3공지사항3공지사항3공지사항3공지사항3공지사항3공지사항3</router-link></li>
          </ul>
          <router-link to="/" class="more"></router-link>
        </div>
      </div>

    </div>
    <!-- // main-wrap -->

     <!-- 팝업:로그인필요 -->
    <Popup :is-open="popup.login" @close="popup.login=false;">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">로그인 후 이용가능합니다.</div>
        </template>
    </Popup>    
     <!-- 팝업:이미지보기 -->
    <Popup :is-open="popup.view"  :dimClose="true" class="img-view" @close="popup.view=false;">
        <template slot="body">
          <img :src="bannerSrc" alt="">
        </template>
    </Popup>    
     <!-- 팝업:업데이트로그인 -->
    <Popup :is-open="popup.update" @close="popup.update=false;">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">업데이트 된 앱 로그인시<br>차량인증이 필요합니다.</div>
        </template>
    </Popup>    
     <!-- 팝업:충전중아님 -->
    <Popup :is-open="popup.nocharge" @close="popup.nocharge=false;">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">충전중이 아닙니다.</div>
        </template>
    </Popup>    
  </div>
</template>

<script>

export default {
  components:{

  },
  data(){
    return{
      visualSliderOpt: {
        perPage: 1,
        perMove: 1,
        arrows: true
      },
      bannerSrc :'',
      popup: {
        login: false,
        view: false,
        update: false,
        nocharge: false,
      }
    }
  },
  computed: {
    visualList(){
      return  [
          {
            src: require(`@/assets/images/${this.skin}/temp-main-visual.jpg`),
            bannerSrc:  require(`@/assets/images/${this.skin}/temp-visual-banner.jpg`)
          },
          {
            src: require(`@/assets/images/${this.skin}/temp-main-visual.jpg`),
            bannerSrc:  require(`@/assets/images/${this.skin}/temp-visual-banner.jpg`)
          }
        ]
    }
  },
  mounted(){
    this.popup.login = true
    this.popup.update = true
  }
}
</script>
