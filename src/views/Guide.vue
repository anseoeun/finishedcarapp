<template>
  <div class="contents">
    <div class="guide-wrap">
      <div class="guide-visual" :style="'background-image:url('+require('@/assets/images/polestar/visual-guide.jpg')+')'"></div>

      <div class="guide-cont">
        <h2 class="tit-type1">안내</h2>
        <ul class="menu-list-type1">
          <li><router-link to="/" class="menu"><span class="txt">Polestar 소개</span></router-link></li>
          <li><router-link to="/" class="menu"><span class="txt">Polestar 2 Charging - 주행거리와 충전</span></router-link></li>
          <li><router-link to="/" class="menu"><span class="txt">Polestar 2 Charging - 충전 방법</span></router-link></li>
          <li><router-link to="/" class="menu"><span class="txt">프로모션</span></router-link></li>
        </ul>
      </div>
    </div>
    <!-- // guide-wrap -->
  </div>
</template>
