<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">팝업 스타일</h2>

    <button class="btn-type2 st1" @click="popup.alarm=true"><span>알림 팝업</span></button>
    <br>
    <br>
    <button class="btn-type2 st1" @click="popup.alarm2=true"><span>알림 팝업(custom 버튼)</span></button>
    <br>
    <br>
    <button class="btn-type2 st1" @click="popup.popAddr=true"><span>components 스타일</span></button>
    <br>
    <br>
    <button class="btn-type2 st1" @click="btmLayer.popCharge=true"><span>btmlayer 스타일</span></button>
    <br>
    <br>
    <button class="btn-type2 st1" @click="rightLayer.popFavorite=true"><span>rightlayer 스타일</span></button>



     <!-- 팝업:이메일안내 -->
    <Popup :is-open="popup.alarm" @close="popup.alarm=false">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">알림 입니다.</div>
      </template>
    </Popup>    

     <!-- 팝업:이메일안내 -->
    <Popup :is-open="popup.alarm2" @close="popup.alarm2=false">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">알림 입니다.</div>
      </template>
      <template slot="btn">
        <button class="btn-type1 st1" @click="popup.alarm2=false"><span>확인</span></button>
        <button class="btn-type1 st2" @click="popup.alarm2=false"><span>취소</span></button>
      </template>      
    </Popup>    

    <!-- 팝업:주소검색 -->
    <PopAddr :visible="popup.popAddr" @close="popup.popAddr=false"/>    
    <!-- 충전소 -->
    <PopChargeStation :visible="btmLayer.popCharge" @close="btmLayer.popCharge=false"/>    
    <!-- 즐겨찾기 -->
    <PopFavorite :visible="rightLayer.popFavorite" @close="rightLayer.popFavorite=false"/>    
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopChargeStation from '@/views/PopChargeStation'
import PopFavorite from '@/views/PopFavorite'
export default {
  components:{
    PopAddr,
    PopChargeStation,
    PopFavorite
  },    
  data(){
    return{
      form:{}, 

      popup: {
        alarm: false,
        alarm2: false,
        popAddr: false,
      },
     btmLayer: {
      popCharge: false,
     },
     rightLayer: {
      popFavorite: false,
     }      
    }
  },
}
</script>

<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>
 

