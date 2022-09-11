<template>
    <BtmLayer :visible="visible" :close="true" @close="$emit('close')" class="apply-footer no-dim">
      <template slot="content">
        <div class="cont-scroll">
            <div class="charge-station">
              <div class="label">차지비</div>
              <strong class="tit">서울시 송파구 롯데타워지하3층</strong>
              <div class="addr">
                <p>서울 송파구 올림픽로 300</p>
                <p>N5~R5구역</p>
              </div>
              <div class="info-wrap">
                <div class="info">
                  <span><b>0</b><span>급속</span></span>
                  <span><b>21</b><span>완속</span></span>
                  <span><b>0.2</b><span>Km</span></span>
                </div>
                <div class="info"><span><span>운영시간</span><b>24시간</b></span></div>
              </div>
              <div class="btn-wrap">
                <router-link to="/" class="btn-type1 st1"><span>충전시작</span></router-link>
                <div class="f-wrap">
                  <div class="auto">
                    <button class="btn-type1 st2" @click="$emit('mapFind')"><span>길안내</span></button>
                  </div>
                  <button class="btn-favorite" @click="favoriteChecked = !favoriteChecked"><Icon type="favorite" :class="{on: favoriteChecked}" /></button>
                </div>
              </div>              
            </div>
        </div>
      </template>  
    </BtmLayer>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean, 
      default: false  
    },
  },  
  data(){
    return {
      favoriteChecked: false,
    }
  }
}
</script>
