<template>
  <div class="contents">
    <div class="smart-coaching-wrap">
      <div class="smart-coaching-visual" :style="'background-image:url('+require('@/assets/images/benz/visual-smart-coaching.jpg')+')'"></div>

      <!-- smart-coaching-cont -->
      <div class="smart-coaching-cont">
        <h2 class="tit-type1">스마트코칭</h2>
        <ul class="menu-list-type1 st2">
          <li><router-link to="/" class="menu"><span class="icon"><i class="i-service-guide"></i></span><span class="txt">서비스 안내</span></router-link></li>
          <li><router-link to="/" class="menu"><span class="icon"><i class="i-progress-guide"></i></span><span class="txt">진행 안내</span></router-link></li>
        </ul>
      </div>
      <!-- // smart-coaching-cont -->

    </div>
    <!-- // main-wrap -->


     <!-- 팝업:포인트 유효기간  -->
    <Popup :is-open="popup.nodata" @close="popup.nodata=false;" >
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">스마트코칭  조회 내역이 없습니다.</div>
        </template>
    </Popup> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      popup: {
        nodata: false
      },
    }
  },
  mounted(){
    this.popup.nodata = true
  }
}
</script>
