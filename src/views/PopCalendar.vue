<template>
    <Popup :is-open="visible" 
       @close="$emit('close');"
    >
        <template slot="body">
          <!-- calendar-wrap -->
          <div class="calendar-wrap">
            <div class="calendar-header">
              <button class="prev" @click="previous()"><Icon type="cal-prev" /></button>
              <div class="calender-date">{{ currentYear }}년 {{  fillzero(currentMonth) }}월</div>
              <button class="next" @click="next()"><Icon type="cal-next" /></button>
            </div>
            <div class="calendar-body">
              <table>
                  <thead>
                    <tr>
                      <th v-for="(day, index) in days" :key="index">{{ day }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in rownum" :key="i">
                      <td v-for="j in 7" :key="j">
                        <div v-if="i === 1 && j <= firstDay" class='empty prev-month'></div>
                        <div v-else-if="date(i, j) > lastDay" class='empty next-month'></div>
                        <div v-else class='date' :class="[{selected : selected(date(i, j))}, {disabled : disabled(date(i, j))}]">
                          <button :disabled="disabled(date(i, j))" @click="setSelected(date(i, j))">{{ date(i, j) }}</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <!-- // calendar-wrap -->
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="confirm();"><span>확인</span></button>
          <button class="btn-type1 st2" @click="cancel()"><span>취소</span></button>
        </template>
    </Popup>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    selectedDay: {
      type: String,
      default: ''
    },
    disabledDate: {
      type: Array,
      default: ()=> []
    },
  },  
  data(){
    return{
      visitDay: {
        date: '',
      },      
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1 ,
      days: ["일", "월", "화", "수", "목", "금", "토"],
      firstDay : 0,
      lastDay : 0,
      rownum : 0,
      selectDay: this.selectedDay,
    }
  },
  created() {
    this.setCalendar(this.currentYear, this.currentMonth);
  },  
  methods: {
    fillzero(val){
      return val < 10 ? '0'+val : val
    },
    next() {
      this.currentYear = (this.currentMonth === 12) ? this.currentYear + 1 : this.currentYear;
      this.currentMonth = ((this.currentMonth + 1) % 13) === 0 ? 1 : (this.currentMonth + 1);
      this.setCalendar(this.currentYear, this.currentMonth);
    },

    previous() {
      this.currentYear = (this.currentMonth === 12) ? this.currentYear - 1 : this.currentYear;
      this.currentMonth = (this.currentMonth === 1) ? 12 : (this.currentMonth - 1);
      this.setCalendar(this.currentYear, this.currentMonth);
    },

    setCalendar(year, month){
      function daysInMonth(year, month) { 
        return 32 - new Date(year, (month-1), 32).getDate();
      }  
      let nowMonth = [...Array(daysInMonth(year, month)).keys()].map(day => day + 1)
      this.firstDay = (new Date( year, month-1) ).getDay();
      this.lastDay = daysInMonth(year, month);
      this.rownum = Math.ceil((nowMonth.length + this.firstDay) / 7)
    },
    date(i, j){
      return (j-(this.firstDay))+(7*(i-1));
    },
    selected(date){
      return this.selectDay === (this.currentYear + "-" + this.currentMonth + "-" + date) ? true : false;
    },
    disabled(date){
      if(this.disabledDate.length <= 0) return false;
      let case1 = new Date(this.currentYear + "-" + this.currentMonth + "-" + date) < new Date();
      let case2 = this.disabledDate.includes(this.currentYear + "-" + this.currentMonth + "-" + date);
      return (case1 || case2) ? true : false;
    },
    setSelected(date){
      this.selectDay = this.currentYear + "-" + this.currentMonth + "-" + date;
    },

    confirm(){
      let visitDay = this.selectDay.split('-');
      visitDay[1] = this.fillzero(visitDay[1]);
      visitDay[2] = this.fillzero(visitDay[2]);
      visitDay = visitDay.join('-');

      this.$emit('close');
      this.$emit('confirm', visitDay);
    },
    cancel(){
      this.selectDay = this.visitDay;
      this.$emit('close');
    }
  }
}
</script>
