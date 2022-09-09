<template>
  <div class="contents">
    <div class="join-wrap">
      <h2 class="tit-type1">내정보</h2>
      <!-- 인증정보 -->
      <h3 class="tit-type2">인증정보</h3>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">휴대폰</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <!-- 텍스트들어가야된다면 여기 -->
                </div>
                <button class="btn-type4 st1"><span>인증하기</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">회원이름</div>
            <div class="cell auto"></div>
          </li>
        </ul>
      </div>
      <!-- 계정정보 -->
      <h3 class="tit-type2">계정정보</h3>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">아이디</div>
            <div class="cell auto">
              polestar@chargev.co.kr
            </div>
          </li>
          <li>
            <div class="cell label">비밀번호</div>
            <div class="cell auto">
            <div class="f-wrap">
              <div class="auto">
                <div class="row"><Input type="text" v-model="form.pw" placeholder="현재비밀번호" /></div>
                <div class="row"><Input type="text" v-model="form.newpw" placeholder="새 비밀번호" /></div>
                <div class="row"><Input type="text" v-model="form.newpwcheck" placeholder="새 비밀번호 확인" /></div>
              </div>
              <button class="btn-type4 st1" @click="popup.pwChange=true;"><span>수정</span></button>
            </div>
          </div>
          </li>
        </ul>
        <div class="txt-error">비밀번호가 일치하지 않습니다.</div>
      </div>
      <!-- 본인정보 -->
      <h3 class="tit-type2">본인정보</h3>
      <div class="grid-box">
        <ul>
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
            <div class="cell auto">{{ form.addrdetail }}</div>
          </li>
          <li>
            <div class="cell label txt-ls-s">멤버십카드</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <span class="txt-card-num">0000-0000-0000-0000</span>
                </div>
                <button class="btn-type4 st1"><span>추가</span></button>
                <button class="btn-type4 st1"><span>재발급</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label txt-ls-s">멤버십카드</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <span class="txt-card-num">0000-0000-0000-0000</span>
                </div>
                <button class="btn-type4 st1"><span>재발급</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">신용카드</div>
            <div class="cell auto">
              <div class="f-wrap-list">
                <div class="f-wrap">
                  <div class="auto">
                    [현대]<br><span class="txt-card-num">0000-****-****-0000</span>
                  </div>
                  <button class="btn-type4 st2" @click="popup.cardDeleteDisable=true"><span>삭제</span></button>
                  <button class="btn-type4 st1"><span>변경</span></button>
                </div>
                <div class="f-wrap">
                  <div class="auto">
                    [현대]<br><span class="txt-card-num">0000-****-****-0000</span>
                  </div>
                  <button class="btn-type4 st2" @click="popup.cardDelete=true"><span>삭제</span></button>
                  <button class="btn-type4 st1"><span>변경</span></button>
                </div>
                <div class="f-wrap">
                  <div class="auto">
                    <!-- 텍스트들어가야된다면 여기 -->
                  </div>
                  <button class="btn-type4 st1" @click="popup.popCardRegist = true"><span>추가</span></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 차량정보 -->
      <h3 class="tit-type2">차량정보</h3>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">차량번호</div>
            <div class="cell auto">
              <div class="f-wrap">
                  <div class="auto">
                    01테9876
                  </div>
                  <button class="btn-type4 st1"><span>대표차량설정</span></button>
                </div>
            </div>
          </li>
          <li>
            <div class="cell label">차량번호</div>
            <div class="cell auto">
              <div class="f-wrap">
                  <div class="auto">
                    01테9876
                  </div>
                  <button class="btn-type4 st1" disabled><span>대표차량설정</span></button>
                </div>
            </div>
          </li>
          <li>
            <div class="cell label">소유자명</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">김김김</div>
                <button class="btn-type4 st1" @click="popup.carAuth=true;popup.ownerMismatch=true;"><span>인증</span></button>
              </div>
            </div>
          </li>
        </ul>
        <div class="txt-success">차량인증이 완료되었습니다.</div>
      </div>
      
      <!-- 알림설정 -->
      <h3 class="tit-type2">알림설정</h3>
      <div class="wrap-box">
        <div class="f-wrap">
          <div class="auto">
            <ul class="basic-list">
              <li v-for="(item, index) in alarm" :key="index">{{ alarmList[item].label }}</li>
            </ul>
          </div>
          <button class="btn-type4 st1" @click="popup.alarm=true"><span v-if="alarm.length <= 0">선택</span><span v-else>변경</span></button>
        </div>
      </div>

      <!-- 회원탈퇴 -->
      <h3 class="tit-type2">회원탈퇴</h3>      
      <div class="wrap-box">
        <div class="f-wrap">
          <div class="auto">
            <p class="txt-st">회원탈퇴에 앞서 <b>유의사항 및 안내를 반드시 읽고 진행</b>해주세요</p>
          </div>
          <button class="btn-type4 st1" @click="popup.wthdrawalNoti=true"><span>탈퇴</span></button>
        </div>
      </div>
      
    </div>

    <!-- 팝업:비밀번호 변경 완료 -->
    <Popup :is-open="popup.pwChange" @close="popup.pwChange=false;" >
        <template slot="header">비밀번호 변경 완료</template>
        <template slot="body"><div class="alert-txt">비밀번호가 변경되었습니다.</div></template>
    </Popup>    
    <!-- 팝업:카드삭제불가 -->
    <Popup :is-open="popup.cardDeleteDisable" @close="popup.cardDeleteDisable=false;" >
        <template slot="header">알림</template>
        <template slot="body"><div class="alert-txt">결제카드 삭제가 불가능합니다.<br>최소 1개의 카드등록은 필수사항입니다.</div></template>
    </Popup>
    <!-- 팝업:카드삭제 -->
    <Popup :is-open="popup.cardDelete" @close="popup.cardDelete=false;" >
        <template slot="header">알림</template>
        <template slot="body"><div class="alert-txt">신용카드를 삭제하시겠습니까?</div></template>
    </Popup>
    <!-- 팝업:차량 인증 완료 -->
    <Popup :is-open="popup.carAuth" @close="popup.carAuth=false;" >
        <template slot="header">알림</template>
        <template slot="body"><div class="alert-txt">차량 인증이 완료되었습니다.</div></template>
    </Popup>    
     <!-- 팝업:소유자명 불일치 -->
    <Popup :is-open="popup.ownerMismatch" @close="popup.ownerMismatch=false;" >
        <template slot="header">소유자명 불일치</template>
        <template slot="body">
          <div class="alert-txt">
            소유자가 일치하지 않습니다.
            <br>차량정보 등록은 실 소유자만 가능합니다.
          </div>
        </template>
    </Popup>    
     <!-- 팝업:탈퇴사항 -->
    <Popup :is-open="popup.wthdrawalNoti" @close="popup.wthdrawalNoti=false;popup.complete=true;" >
        <template slot="header">알림</template>
        <template slot="body">
          <div class="num-list2">
            <ol>
              <li><span class="num">1.</span><span class="txt">잔여 선불포인트는 <b>소멸</b>되며, 환불되지 않습니다.</span></li>
              <li><span class="num">2.</span><span class="txt">동일 차량등으로 <b>재가입</b>이 이뤄질 경우, <b>카드발급 비용이 청구</b>될 수 있습니다.</span></li>
              <li><span class="num">3.</span><span class="txt">미결제된 금액이 남아있을 경우, <b>납부 완료 전까지 탈퇴가 불가</b>할 수 있습니다.</span></li>
              <li><span class="num">4.</span><span class="txt">개인정보를 포함한 <b>모든데이터는 삭제</b>되며, 삭제된 데이터는 <b>복구되지 않습니다.</b></span></li>
            </ol>
            <p class="list-txt">정말로 탈퇴하시겠습니까?</p>
          </div>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="popup.wthdrawalNoti=false;popup.complete=true"><span>확인</span></button>
          <button class="btn-type1 st2" @click="popup.wthdrawalNoti=false"><span>취소</span></button>
        </template>
    </Popup>  
     <!-- 팝업:탈퇴완료 -->
    <Popup :is-open="popup.complete" @close="popup.complete=false;" >
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">
            회원 탈퇴가 완료되었습니다.
          </div>
        </template>
    </Popup>  
     <!-- 팝업:알람 설정 -->
    <Popup :is-open="popup.alarm" @close="popup.alarm=false;" >
        <template slot="header">알람 설정</template>
        <template slot="body">
          <div class="basic-list st2">
            <li v-for="(item, index) in alarmList" :key="index">
              <label class="inp-check">
                <input type="checkbox" v-model="alarm" :value="item.value">
                <span class="ic"></span>
                <span class="t">{{ item.label }}</span>
              </label>
            </li>
          </div>
        </template>
    </Popup>  

    <!-- 팝업:주소검색 -->
    <PopAddr :visible="popup.popAddr" @confirm="addrConfirm" @close="popup.popAddr=false"/>
    <!-- 팝업:신용카드 등록 -->
    <PopCardRegist :visible="popup.popCardRegist" @close="popup.popCardRegist=false"/>
    
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import PopCardRegist from '@/views/PopCardRegist'
export default {
  components:{
    PopAddr,
    PopCardRegist,
  },  
  data(){
    return{
      form: {
        email: '',
        pw: '',
        pwcheck: '',
        addr: '',
        addrdetail: '',
        memcard: ''
      },
      supportProgram: '',
      supportProgromList: [
        {
          value: 'p01',
          label: '홈충전기 설치지원<br>(구매조건 및 설치 환경에 따라 일부 추가비용 발생 가능)'
        },
        {
          value: 'p02',
          label: '충전포인트(1년 무제한)'
        },
        {
          value: 'p03',
          label: '충전포인트(15만원)'
        },
      ],
      alarm: [0,1,2,3,4,5,6,7,8,9],
      alarmList: [
        {
          value: 0,
          label: '충전 시작'
        },
        {
          value: 1,
          label: '충전 정상 종료'
        },
        {
          value: 2,
          label: '충전기 점검으로 인한 예약 취소'
        },
        {
          value: 3,
          label: '잔액 부족'
        },
        {
          value: 4,
          label: '예약 충전 시작 15분전'
        },
        {
          value: 5,
          label: '충전 비정상 종료'
        },
        {
          value: 6,
          label: '충전 종료 15분전'
        },
        {
          value: 7,
          label: '충전량 미발생시 전송'
        },
        {
          value: 8,
          label: '충전 시작(비회원결제)'
        },
        {
          value: 9,
          label: '충전 종료(비회원결제)'
        },
      ],
      
      popup: {
        pwChange: false,
        cardDeleteDisable: false,
        cardDelete: false,
        carAuth: false,
        ownerMismatch:false,
        wthdrawalNoti:false,
        complete:false,
        alarm:false,
        popAddr: false,
        popCardRegist:false,
      }
    }
  },
  methods: {
    addrConfirm(form){
      this.form.addr = form.addr;
      this.form.addrdetail = form.addrdetail;
    }
  }
}
</script>
