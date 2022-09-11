<template>
  <div class="contents">
    <div class="apply-wrap">
      <template v-if="$route.path === '/applyStatus'">
        <!-- 진행상태 -->
        <h2 class="tit-type2">진행상태</h2>
        <div class="grid-box process-status">
          <ul>
            <li>
              <div class="cell label">진행상태</div>
              <div class="cell auto">설치신청완료</div>
            </li>
          </ul>
        </div>
      </template>     
      <!-- 설치장소 -->
      <h2 class="tit-type2">설치장소</h2>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">구분</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">{{ installPlaceList[installPlace].label }}</div>
                <button class="btn-type4 st1" @click="popup.installPlace=true"><span>선택하기</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">주소</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">{{ form.addr }}</div>
                <button class="btn-type4 st1" @click="popup.popAddr = true"><span>검색</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">상세주소</div>
            <div class="cell auto">
              <Input type="text" v-model="form.addrdetail" />
            </div>
          </li>
        </ul>
      </div>
      <!-- 충전기 -->
      <h2 class="tit-type2">충전기</h2>
      <div class="grid-box">
        <ul>
          <li v-if="$route.path === '/apply'">
            <div class="cell label">충전기</div>
            <div class="cell auto">개인용 충전기</div>
          </li>
          <li v-else>
            <div class="cell label">충전기</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <!-- 텍스트들어가야된다면 여기 -->
                </div>
                <button class="btn-type4 st1"><span>선택하기</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">수량</div>
            <div class="cell auto">
              <Input type="number" v-model="form.num" />
            </div>
          </li>
          <li>
            <div class="cell label">옵션</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <ul class="basic-list">
                    <li v-for="(item, index) in option" :key="index">{{ optionList[item].label }}</li>
                  </ul>
                </div>
                <button class="btn-type4 st1" @click="popup.option=true"><span v-if="option.length <= 0">선택</span><span v-else>변경</span></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 방문 요청일 -->
      <h2 class="tit-type2">방문 요청일</h2>
      <div class="grid-box">
        <ul>
          <li v-if="$route.path === '/apply'">
            <div class="cell label">방문 요청일</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">{{ visitDay }}</div>
                <button class="btn-type4 st1" @click="popup.popCalendar=true"><span v-if="visitDay === ''">선택</span><span v-else>변경</span></button>
              </div>
            </div>
          </li>
          <li v-else>
            <div class="cell label">방문 요청일</div>
            <div class="cell auto">2022-09-03</div>
          </li>
        </ul>
      </div>
      <!-- 결제 예상 금액 -->
      <h2 class="tit-type2">결제 예상 금액</h2>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">결제방법</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <span class="txt-card-num">0000-0000-0000-0000</span>
                </div>
                <button class="btn-type4 st1"><span>변경</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">최종금액</div>
            <div class="cell auto">
              <div class="f-wrap-list">
                <div v-for="(item, index) in accountList" :key="index" class="f-wrap">
                  <div class="auto">{{ item.item }}</div>
                  <div class="txt-accoun">{{ item.price }} 원</div>
                </div>
                <div class="f-wrap">
                  <div class="auto">부가세</div>
                  <div class="txt-accoun">170,000 원</div>
                </div>
                <div class="f-wrap">
                  <div class="auto">합계</div>
                  <div class="txt-account"><strong>1,870,000</strong> 원</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
         <div class="txt-st sm">
          <p><span class="ico">※</span><span class="auto">표준공사 <b>30m 기준으로 초과시 m당 초과 비용</b>이 발생할 수 있습니다.</span></p>
          <p><span class="ico">※</span><span class="auto">여유 전력이 부족할 경우 <b>전력 증설로 인한 한국전력 표준 시설 부담금이 발생</b>할 수 있습니다.</span></p>
          <p><span class="ico">※</span><span class="auto"><b>완속충전기 취득세</b>가 부과될 수 있습니다.</span></p>
          <p><span class="ico">※</span><span class="auto">비용은 <b>현장 실사가 종료된 후 결제</b>하실 수 있습니다.</span></p>
        </div>
      </div>
      
      <div v-if="$route.path === '/apply'" class="btn-wrap">
        <button class="btn-type1 st1" @click="popup.complete=true"><span>신청하기</span></button>
      </div>      
      <template v-else>
        <div class="btn-wrap">
          <button class="btn-type1 st1 disabled-st1" disabled><span>결제하기</span></button>
        </div>
        <div class="btn-wrap">
          <button class="btn-type1 st1 disabled-st1"><span>결제하기</span></button>
        </div>
      </template>
    </div>


     <!-- 팝업:설치신청 완료 -->
    <Popup :is-open="popup.complete" @close="popup.complete=false;" >
        <template slot="header">설치신청 완료</template>
        <template slot="body"><div class="alert-txt">충전기 설치신청이 완료되었습니다.<br>방문 요청일을 확인 후 5일 이내에<br>설치 기사님이 연락을 드릴 예정입니다.</div></template>
    </Popup>    
     <!-- 팝업:설치장소 선택 -->
    <Popup :is-open="popup.installPlace" @close="popup.installPlace=false;" >
        <template slot="header">설치장소 선택</template>
        <template slot="body">
          <div class="basic-list st2">
            <li v-for="(item, index) in installPlaceList" :key="index">
              <label class="inp-radio">
                <input type="radio" v-model="installPlace" :value="index">
                <span class="ic"></span>
                <span class="t">{{ item.label }}</span>
              </label>
            </li>
          </div>
        </template>
    </Popup>  
     <!-- 팝업:옵션 설정 -->
    <Popup :is-open="popup.option" @close="popup.option=false;" >
        <template slot="header">옵션 선택</template>
        <template slot="body">
          <div class="basic-list st2">
            <li v-for="(item, index) in optionList" :key="index">
              <label class="inp-check">
                <input type="checkbox" v-model="option" :value="item.value">
                <span class="ic"></span>
                <span class="t">{{ item.label }}</span>
              </label>
            </li>
          </div>
        </template>
    </Popup>      
    <!-- 팝업:주소검색 -->
    <PopAddr :visible="popup.popAddr" @confirm="addrConfirm" @close="popup.popAddr=false"/>
    <!-- 팝업:캘린더 -->
    <PopCalendar :visible="popup.popCalendar" :selectedDay="visitDay" :disabledDate="disabledDate"  @confirm="calendarConfirm" @close="popup.popCalendar=false"/>
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopCalendar from '@/views/PopCalendar'
export default {
  components:{
    PopAddr,
    PopCalendar
  },  
  data(){
    return{
      form: {
        addr: '서울시 송파구 올림픽로 300',
        addrdetail: '3045호',
        num: '1'
      },
      installPlace: 0,
      installPlaceList: [
        {
          value: 0,
          label: '단독주택'
        },
        {
          value: 1,
          label: '공동주택(아파트, 빌라)'
        },
        {
          value: 2,
          label: '사옥, 상업시설, 관공서'
        },
        {
          value: 3,
          label: '기타'
        },
      ],
      option: [],
      optionList: [
        {
          value: 0,
          label: '스탠드 폴 추가'
        },
        {
          value: 1,
          label: '충전 케이블 연장(8m)'
        },
        {
          value: 2,
          label: '옵션3'
        }
      ],
      visitDay: '',
      disabledDate: [
        "2022-9-15",
        "2022-9-25",
        "2022-10-8",
        "2022-10-10",
        "2022-10-11",
        "2022-10-12",
        "2022-10-15",
        "2022-10-25",
        "2022-11-15",
        "2022-11-25",
      ],      

      accountList: [
        {
          item: '충전기',
          price: '1,500,000'
        },
        {
          item: '스탠드 추가',
          price: '200,000'
        },
      ],
      
      popup: {
        complete: false,
        installPlace: false,
        option: false,
        popAddr: false,
        popCalendar: false,
      }
    }
  },
  methods: {
    addrConfirm(form){
      this.form.addr = form.addr;
      this.form.addrdetail = form.addrdetail;
    },
    calendarConfirm(day){
      this.visitDay = day;
    }
  }
}
</script>
