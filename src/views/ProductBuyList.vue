<template>
  <div class="contents">
    <div class="using-wrap">
      <h2 class="tit-type1">상품구매내역</h2>
      <div class="using-list">
        <ul>
          <li>
            <div class="box">
              <div class="month">10월 <Icon type="arr-using"/></div>
              <div class="right">
                <ul class="grid-list">
                  <li>
                    <div class="label align-r">사용포인트</div>
                    <div class="auto align-r">12,568원/4건</div>
                  </li>
                  <li>
                    <div class="label align-r">결제금액</div>
                    <div class="auto align-r">12,56원/4건</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="box date-search">
              <div class="period">
                 <Input type="text" v-model="form.start" @focus="openCalendar('start')" />
                 <span class="dash">~</span>
                 <Input type="text" v-model="form.end" @focus="openCalendar('end')" />
              </div>
              <p class="txt-error">조회 기간은 3개월(90일)까지만 가능합니다.</p>
            </div>
          </li>
        </ul>
      </div>

    <h3 class="tit-type2">10월 10일</h3>
    <div class="using-list">
      <ul>
        <li v-for="i in 2" :key="i">
          <button class="box" @click="popup.popListDetail=true">
            <div class="month">10월</div>
            <div class="auto">
              <div class="f-wrap-list">
                <div class="f-wrap">BMW 거점용 충전기 </div>
                <div class="f-wrap">2021-10-10 10:12:34 일시불</div>
              </div>
            </div>
            <div class="account">250,000원</div>
          </button>
        </li>
      </ul>
    </div>  

    <h3 class="tit-type2">10월 08일</h3>
    <div class="using-list">
      <ul>
        <li v-for="i in 2" :key="i">
          <button class="box" @click="popup.popListDetail=true">
            <div class="month">10월</div>
            <div class="auto">
              <div class="f-wrap-list">
                <div class="f-wrap">BMW 거점용 충전기 </div>
                <div class="f-wrap">2021-10-10 10:12:34 일시불</div>
              </div>
            </div>
            <div class="account">250,000원</div>
          </button>
        </li>
      </ul>
    </div>  
  
    </div>

    <!-- 팝업:내역상세 -->
    <PopListDetail :visible="popup.popListDetail" @close="popup.popListDetail=false"/>
    <!-- 팝업:캘린더 -->
    <PopCalendar :visible="popup.popCalendar" :selectedDay="form[flag]" @confirm="calendarConfirm" @close="popup.popCalendar=false"/>
  </div>
</template>

<script>
import PopListDetail from '@/views/PopListDetail'
import PopCalendar from '@/views/PopCalendar'
export default {
  components:{
    PopListDetail,
    PopCalendar
  },  
  data(){
    return{
      flag: '',
      form: {
        start: '',
        end: '',
      },
     
      popup: {
        popListDetail: false,
        popCalendar: false,
      }
    }
  },
  methods: {
    openCalendar(flag){
      this.flag = flag;
      this.popup.popCalendar = true;
    },
    calendarConfirm(day){
      this.form[this.flag] = day;
    }
  }
}
</script>
