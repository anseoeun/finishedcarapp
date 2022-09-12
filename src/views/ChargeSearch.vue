<template>
  <div class="contents">
    <div class="charge-search-wrap">
      <div class="charge-search">
        <Input type="text" v-model="form.sch" placeholder="시/도, 도로명, 충전소명으로 검색" />
      </div>
      <!-- station-list -->
      <ul class="station-list">
        <li v-for="(item, index) in stationList" :key="index">
          <router-link to="/" class="charge-station st2">
            <button class="btn-favorite" @click="item.favorite = !item.favorite"><Icon type="favorite-s" :class="{on: item.favorite}" /></button>
            <strong class="tit">{{ item.tit }}</strong>
            <div class="addr">
              <p>{{ item.addr }}</p>
              <p>{{ item.addr2 }}</p>
            </div>
            <div class="info-wrap">
              <div class="info">
                <span><b>{{ item.rapidity }}</b><span>급속</span></span>
                <span><b>{{ item.slow }}</b><span>완속</span></span>
                <span><b>{{ item.km }}</b><span>Km</span></span>
              </div>
            </div>
            <div class="btn-wrap">
              <router-link to="/" class="btn-charge btn-type2 st1"><span>충전하기</span></router-link>
              <button class="btn-type2 st2" @click.prevent="popup.popMapFind=true"><span>길안내</span></button>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- // station-list -->
    </div>

    <!-- 길찾기 -->
    <PopMapFind :visible="popup.popMapFind" @close="popup.popMapFind=false"/>    
  </div>
</template>

<script>
import PopMapFind from '@/views/PopMapFind'
export default {
  components:{
    PopMapFind
  },  
  data(){
    return{
      form: {
        sch: ''
      },

      stationList: [
        {
          tit: '[차지비] 케이티 수서빌딩',
          addr: '서울특별시 강남구 수서동 734(KT) 1',
          rapidity: 2,
          slow: 0,
          km: '2.7',
          favorite: true,
        },
        {
          tit: '[차지비] 케이티 수서빌딩',
          addr: '서울특별시 강남구 수서동 734(KT) 1',
          addr2: '공용주차장 지하3층 B1구역(주차비 유료)',
          rapidity: 2,
          slow: 0,
          km: '2.7',
          favorite: false,
        },
        {
          tit: '[차지비] 케이티 수서빌딩',
          addr: '서울특별시 강남구 수서동 734(KT) 1',
          rapidity: 2,
          slow: 0,
          km: '2.7',
          favorite: true,
        },
        {
          tit: '[차지비] 케이티 수서빌딩',
          addr: '서울특별시 강남구 수서동 734(KT) 1',
          rapidity: 2,
          slow: 0,
          km: '2.7',
          favorite: true,
        },
        {
          tit: '[차지비] 케이티 수서빌딩',
          addr: '서울특별시 강남구 수서동 734(KT) 1',
          rapidity: 2,
          slow: 0,
          km: '2.7',
          favorite: true,
        },
      ],      

      popup: {
        popMapFind: false
      }
    }
  },
}
</script>
