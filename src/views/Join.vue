<template>
  <div class="contents">
    <div class="join-wrap">
      <!-- 본인인증 -->
      <h2 class="tit-type1">본인인증</h2>
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
            <div class="cell auto">
              본인인증 후 자동 입력됩니다.
            </div>
          </li>
        </ul>
        <div class="txt-success">인증이 완료되었습니다.</div>
      </div>
      <!-- 계정등록 -->
      <h2 class="tit-type1">계정등록</h2>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">아이디</div>
            <div class="cell auto">
              <Input type="text" v-model="form.email" placeholder="E-MAIL을 입력하세요" />
            </div>
          </li>
          <li>
            <div class="cell label">비밀번호</div>
            <div class="cell auto">
              <Input type="password" v-model="form.pw" placeholder="문자, 숫자, 특수문자 조합" />
            </div>
          </li>
          <li>
            <div class="cell label">비밀번호 확인</div>
            <div class="cell auto">
              <Input type="password" v-model="form.pwcheck" placeholder="비밀번호 재입력" />
            </div>
          </li>
        </ul>
        <div class="txt-error">비밀번호가 일치하지 않습니다.</div>
      </div>
      <!-- 본인정보 -->
      <h2 class="tit-type1">본인정보</h2>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">주소</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <!-- 텍스트들어가야된다면 여기 -->
                </div>
                <button class="btn-type4 st1" @click="popup.popAddr = true"><span>검색</span></button>
              </div>
            </div>
          </li>
          <li>
            <div class="cell label">상세주소</div>
            <div class="cell auto">
              <Input type="text" v-model="form.addr" />
            </div>
          </li>
          <li>
            <div class="cell label">멤버십카드</div>
            <div class="cell auto">
              <Input type="number" v-model="form.memcard" placeholder="멤버십 카드 번호를 입력하세요." />
            </div>
          </li>
          <li>
            <div class="cell label">신용카드</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <!-- 텍스트들어가야된다면 여기 -->
                </div>
                <button class="btn-type4 st1" @click="popup.popCardRegist=true"><span>등록</span></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 차량정보 -->
      <h2 class="tit-type1">차량정보</h2>
      <div class="grid-box">
        <ul>
          <li>
            <div class="cell label">차량번호</div>
            <div class="cell auto">
              <Input type="text" v-model="form.carnum" />
            </div>
          </li>
          <li>
            <div class="cell label">소유자명</div>
            <div class="cell auto">
              <div class="f-wrap">
                <div class="auto">
                  <!-- 텍스트들어가야된다면 여기 -->
                </div>
                <button class="btn-type4 st1" @click="popup.carAuth=true;popup.ownerMismatch=true;"><span>인증</span></button>
              </div>
            </div>
          </li>
        </ul>
        <div class="txt-success">차량인증이 완료되었습니다.</div>
      </div>
      
      <!-- 지원 프로그램 선택 -->
      <h2 class="tit-type1">지원 프로그램 선택</h2>
      <div class="support-program-wrap">
        <div class="check-wrap">
          <template v-if="skin === 'polestar'">
            <div v-for="(item, index) in supportProgromList" :key="index" class="check">
              <label class="inp-radio st2">
                <input type="radio" v-model="supportProgram" :value="item.value">
                <span class="ic"></span>
                <span class="t" v-html="item.label"></span>
              </label>
            </div>
            <div class="line"></div>
            <div class="check">
              <label class="inp-check st2">
                <input type="checkbox">
                <span class="ic"></span>
                <span class="t">폴스타 충전 프로그램 동의</span>
              </label>
            </div>
          </template>
          <div class="check">
            <label class="inp-check st2">
              <input type="checkbox">
              <span class="ic"></span>
              <span class="t">완성차 제공 서비스 안내사항 동의</span>
            </label>
          </div>
        </div>
        <div class="text-noti">
          <p>※ 지급된 충전포인트의 유효기간 연장은 불가하오니, 반드시 기한 내에 사용해주시기 바랍니다.
            <br>[마이페이지 > 잔여포인트 확인]
          </p>
          <p>※ 지급된 포인트의 양도, 대여, 판매, 부정사용 적발시 서비스 이용 제재가 이뤄질 수 있습니다.</p>
        </div>
        <div class="text">
          <p v-if="skin === 'bmw'">카드 인증은 대상자 일치 여부(차대번호, 카드번호 등) 확인 후 업무일 기준 2일 이내에 완료됩니다.</p>
          <p v-else>카드 인증은 업무일 기준 2일 이내에 완료됩니다.</p>
        </div>
      </div>
      <div class="btn-wrap">
        <button v-if="skin === 'polestar'" class="btn-type1 st1" @click="popup.complete=true"><span>가입완료</span></button>
        <button v-else class="btn-type1 st1" @click="popup.complete=true"><span>카드인증 요청</span></button>
      </div>
    </div>

     <!-- 팝업:회원인증 -->
    <Popup :is-open="popup.memAuth" @close="popup.memAuth=false;" >
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">
            발급 받으신 멤버십 카드 번호를
            <br>꼭 입력하셔야 회원 인증이 가능합니다.
          </div>
        </template>
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
     <!-- 팝업:가입완료 -->
    <Popup :is-open="popup.complete" @close="popup.complete=false;" >
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">
            회원가입이 완료되었습니다.
            <br>인증까지는 2~3영업일이 소요됩니다.
          </div>
        </template>
    </Popup>  

    <!-- 팝업:주소검색 -->
    <PopAddr :visible="popup.popAddr" @close="popup.popAddr = false"/>
    <!-- 팝업:신용카드 등록 -->
    <PopCardRegist :visible="popup.popCardRegist" @close="popup.popCardRegist = false"/>
    
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
      
      popup: {
        memAuth: false,
        carAuth: false,
        ownerMismatch:false,
        complete:false,
        popAddr: false,
        popCardRegist:false,
      }
    }
  },
  mounted(){
    this.popup.memAuth = true
  },
}
</script>
