<template>
  <div class="contents">
    <div class="charge-detail-wrap">
      
      <!-- charger-list -->
      <ul class="charger-list">
        <li v-for="(item, index) in chargerList" :key="index">
          <div class="box">
            <div class="box-header">
                <strong class="tit">{{ item.tit }}</strong>
                <div class="num">{{ item.using }}/{{ item.total }}</div>
            </div>
            <div class="status">
              <span :class="`status-${item.status}`">{{ item.status === 'possible' ? '사용가능' : item.status === 'repair' ? '점검중' : '충전중' }}</span>
              <span>{{ item.speed }}</span>
            </div>
            
            <div class="btn-wrap">
              <router-link to="/" class="btn-charge" :class="{'btn-type2 st1': skin === 'polestar'}"><span>충전하기</span></router-link>
              <button v-if="skin === 'polestar'" class="btn-type2 st2" @click.prevent="popup.popMapFind=true"><span>길안내</span></button>
            </div>
          </div>
        </li>
      </ul>
      <!-- // charger-list -->
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
      chargerList: [
        {
          tit: 'ID 2003422001',
          status:'possible', // repair, charging
          speed: '완속',
          total: 10,
          using: 3,
        },
        {
          tit: 'ID 2003422001',
          status:'repair', 
          speed: '급속',
          total: 10,
          using: 3,
        },
        {
          tit: 'ID 2003422001',
          status:'charging',
          speed: '완속',
          total: 10,
          using: 3,
        },
      ],      

      popup: {
        popMapFind: false
      }
    }
  },
  mounted(){
    document.querySelector('.header-sub .tit').innerHTML = '[차지비] 서울시 강남구 서울주택도시공사 [차지비] 서울시 강남구 서울주택도시공사'
  }
}
</script>
