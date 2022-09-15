<template>
  <div class="contents">
    <div class="map-wrap">
      <!-- ※ 개발시 백그라운드 제거 -->
      <div class="map" :style="`background:url('${require('@/assets/images/temp-map.jpg')}') no-repeat 50% 50%;background-size:cover`"></div>

      <div class="map-search">
        <router-link to="/">시/도, 도로명, 충전소명으로 검색</router-link>
      </div>

      <button class="mapindex" style="top:150px;left:150px;" @click="btmLayer.popCharge=true"><i class="i-mapidx-wating"></i></button>
      <button class="mapindex" style="top:200px;left:150px;" @click="btmLayer.popCharge=true"><i class="i-mapidx-broken"></i></button>
      <button class="mapindex" style="top:250px;left:150px;" @click="btmLayer.popCharge=true"><i class="i-mapidx-reserved"></i></button>
      <button class="mapindex" style="top:300px;left:150px;" @click="btmLayer.popCharge=true"><i class="i-mapidx-using"></i></button>
      <button class="mapindex" style="top:350px;left:150px;" @click="btmLayer.popCharge=true"><i class="i-mapidx-benz"></i></button>

      <div class="zoom-menu">
        <button><Icon type="map-plus" /></button>
        <button><Icon type="map-minus" /></button>
      </div>

      <div class="map-menu top">
        <button><Icon type="map-pos" /></button>
        <button>
          <span v-if="skin === 'bmw'" class="txt sm">현 지도에서<br>검색</span>
          <Icon v-else type="map-index" />
        </button>
      </div>

      <div class="map-menu bottom">
        <div class="map-info-wrap" :class="{on: infoMenuOpend}">
          <ul>
            <li>
              <div class="idx"><i class="i-mapidx-wating"></i></div>
              <div class="txt">대기중</div>
            </li>
            <li>
              <div class="idx"><i class="i-mapidx-broken"></i></div>
              <div class="txt">고장</div>
            </li>
            <li>
              <div class="idx"><i class="i-mapidx-reserved"></i></div>
              <div class="txt">예약중</div>
            </li>
            <li>
              <div class="idx"><i class="i-mapidx-using"></i></div>
              <div class="txt">사용중</div>
            </li>
            <li v-if="skin === 'benz'">
              <div class="idx"><i class="i-mapidx-benz"></i></div>
              <div class="txt">벤츠</div>
            </li>
          </ul>
        </div>
        <button @click="infoMenuOpend = !infoMenuOpend">
          <Icon v-if="skin === 'benz'" type="map-info" />
          <span v-else class="txt">범례</span>
        </button>
        <button @click="rightLayer.popFavorite = true">
          <span v-if="skin === 'bmw'" class="txt">즐겨찾기</span>
          <Icon v-else type="map-favorite" />
        </button>
        <button @click="rightLayer.popMapFilter = true">
          <span v-if="skin === 'bmw'" class="txt">검색조건</span>
          <i v-else class="i-map-filter"></i>
        </button>
      </div>

    </div>

    <!-- 즐겨찾기 -->
    <PopFavorite :visible="rightLayer.popFavorite" @mapFind="popup.popMapFind=true" @station="btmLayer.popCharge=true" @close="rightLayer.popFavorite=false"/>
    <!-- 충전소 -->
    <PopChargeStation :visible="btmLayer.popCharge" @mapFind="popup.popMapFind=true" @close="btmLayer.popCharge=false"/>
    <!-- 검색조건 -->
    <PopMapFilter :visible="rightLayer.popMapFilter" @close="rightLayer.popMapFilter=false"/>    
    <!-- 길찾기 -->
    <PopMapFind :visible="popup.popMapFind" @close="popup.popMapFind=false"/>    
  </div>
</template>

<script>
import PopFavorite from '@/views/PopFavorite'
import PopChargeStation from '@/views/PopChargeStation'
import PopMapFilter from '@/views/PopMapFilter'
import PopMapFind from '@/views/PopMapFind'
export default {
  components:{
    PopFavorite,
    PopChargeStation,
    PopMapFilter,
    PopMapFind
  },
  data(){
    return{
      infoMenuOpend: false,
     
     popup:{
      popMapFind: false,
     },
     btmLayer: {
      popCharge: false,
     },
     rightLayer: {
      popFavorite: false,
      popMapFilter: false,
     }
    }
  },
  
}
</script>
