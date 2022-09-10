<template>
  <div class="contents">
    <div class="using-wrap">
      <h2 class="tit-type1">이용내역</h2>

      <h3 class="tit-type1">10월 10일</h3>
      <div class="using-lis">
        <ul>
          <li>
            <div class="box">
              <div class="month">10월</div>
              <div class="arr"><Icon type="arr-using"/></div>
              <div class="right">
                <ul class="grid-list">
                  <li>
                    <div class="label">사용포인트</div>
                    <div class="auto">12,568원/4건</div>
                  </li>
                  <li>
                    <div class="label">결제금액</div>
                    <div class="auto">12,56원/4건</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <button class="box">
              <div class="month">10월</div>
              <div class="auto">
                <div class="f-wrap-list">
                  <div class="f-wrap">BMW 거점용 충전기
                    <div class="right">9,611원</div>
                  </div>
                  <div class="f-wrap">2021-10-10 10:12:34 일시불
                    <div class="right">미청구</div>
                  </div>
                </div>
              </div>
              <Icon type="arr-using-link"/>
            </button>
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
  
    </div>

    <!-- 팝업:캘린더 -->
    <PopCalendar :visible="popup.popCalendar" :selectedDay="form[flag]" @confirm="calendarConfirm" @close="popup.popCalendar=false"/>
  </div>
</template>

<script>
import PopCalendar from '@/views/PopCalendar'
export default {
  components:{
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
