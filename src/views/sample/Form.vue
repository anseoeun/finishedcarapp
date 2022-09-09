<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">인풋 스타일</h2>
    <Input type="text" v-model="form.form1" placeholder="text 인풋" />
    <Input type="number" v-model="form.form1" placeholder="number 인풋" maxlength="6" />

    <br>
    <br>
    <div class="f-wrap-list form-address">
      <div class="f-wrap">
        <div class="auto"><Input type="text" v-model="form.addr1" placeholder="도로명, 건물명, 지번" /></div>
        <button class="btn-type3 st1 btn-addr-sch"><span>주소검색</span></button>
      </div>
      <div class="f-wrap">
        <div class="auto"><Input type="text" v-model="form.addr2" placeholder="상세주소" /></div>
      </div>
    </div>
    <br>
    <div class="grid-box form-card">
      <ul>
        <li>
          <div class="cell label">카드번호</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div style="width:25%"><Input type="text" v-model="form.card1" /></div>
              <div style="width:25%"><Input type="text" v-model="form.card2" /></div>
              <div style="width:25%"><Input type="text" v-model="form.card3" /></div>
              <div style="width:25%"><Input type="text" v-model="form.card4" /></div>
            </div>
          </div>
        </li>
        <li>
          <div class="cell label">유효기간</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div style="width:25%"><Input type="text" v-model="form.month" /></div>
              <div style="width:25%">월</div>
              <div style="width:25%"><Input type="text" v-model="form.year" /></div>
              <div style="width:25%">년</div>
            </div>
          </div>
        </li>
        <li>
          <div class="cell label">비밀번호</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div style="width:25%"><Input type="text" v-model="form.month" /></div>
              <div style="width:75%">** (앞2자리)</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </li>
        <li>
          <div class="cell label">인증번호</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div style="width:25%"><Input type="text" v-model="form.month" /></div>
              <div style="width:25%"></div>
              <div style="width:25%"></div>
              <div style="width:25%"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <br>
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
        <li>
          <div class="cell label">휴대폰</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div class="auto">
                001-5555-8888
              </div>
              <button class="btn-type4 st1"><span>인증하기</span></button>
            </div>
          </div>
        </li>
        <li>
          <div class="cell label">아이디</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div class="auto">
                <Input type="text" v-model="form.email" placeholder="E-MAIL을 입력하세요" />
              </div>
              <button class="btn-type4 st1"><span>인증</span></button>
            </div>
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
              <button class="btn-type4 st1"><span>수정</span></button>
            </div>
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
      <div class="txt-result">인증이 완료되었습니다.</div>
    </div>
    <br>
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
          <div class="cell auto"></div>
        </li>
        <li>
          <div class="cell label">멤버십카드</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div class="auto">
                1010-0101-1234-1234
              </div>
              <button class="btn-type4 st1"><span>추가</span></button>
              <button class="btn-type4 st1"><span>재발급</span></button>
            </div>
          </div>
        </li>
        <li>
          <div class="cell label">멤버십카드</div>
          <div class="cell auto">
            <div class="f-wrap">
              <div class="auto">
                1010-0101-1234-1234
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
                  [현대]<br>1234-****-****-1234
                </div>
                <button class="btn-type4 st2"><span>삭제</span></button>
                <button class="btn-type4 st1"><span>변경</span></button>
              </div>
              <div class="f-wrap">
                <div class="auto">
                  [현대]<br>1234-****-****-1234
                </div>
                <button class="btn-type4 st2"><span>삭제</span></button>
                <button class="btn-type4 st1"><span>변경</span></button>
              </div>
              <div class="f-wrap">
                <div class="auto">
                  <!-- 텍스트들어가야된다면 여기 -->
                </div>
                <button class="btn-type4 st1"><span>추가</span></button>
              </div>
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
      </ul>
    </div>
    <br>
    
    <div class="wrap-box">
      <div class="f-wrap">
        <div class="auto">
          <ul class="basic-list">
            <li>충전 시작</li>
            <li>충전 정상 종료</li>
            <li>충전기 점검으로 인한 예약 취소</li>
            <li>잔액 부족</li>
            <li>예약 충전 시작 15분전</li>
            <li>변경</li>
            <li>충전 비정상 종료</li>
            <li>충전 종료 15분전</li>
            <li>충전량 미발생시 전송</li>
            <li>충전 시작(비회원결제)</li>
            <li>충전 종료(비회원결제)</li>
          </ul>
        </div>
        <button class="btn-type4 st1"><span>변경</span></button>
      </div>
    </div>
    <br>
    <div class="wrap-box">
      <div class="f-wrap">
        <div class="auto">
          <p class="txt-st">회원탈퇴에 앞서 <b>유의사항 및 안내를 반드시 읽고 진행</b>해주세요</p>
        </div>
        <button class="btn-type4 st1"><span>탈퇴</span></button>
      </div>
    </div>

    <div class="num-list">
      <ol>
        <li><span class="num">1</span><span class="txt">전용 충전카드 및 충전포인트 제공</span></li>
        <li><span class="num">2</span><span class="txt">충전포인트 유효기간 확장(3년)</span></li>
        <li><span class="num">3</span><span class="txt">충전포인트 전환서비스 제공 (세차권, 주유권)</span></li>
      </ol>
    </div>
    <div class="num-list2">
      <ol>
        <li><span class="num">1.</span><span class="txt">잔여 선불포인트는 <b>소멸</b>되며, 환불되지 않습니다.</span></li>
        <li><span class="num">2.</span><span class="txt">동일 차량등으로 <b>재가입</b>이 이뤄질 경우, <b>카드발급 비용이 청구</b>될 수 있습니다.</span></li>
        <li><span class="num">3.</span><span class="txt">미결제된 금액이 남아있을 경우, <b>납부 완료 전까지 탈퇴가 불가</b>할 수 있습니다.</span></li>
        <li><span class="num">4.</span><span class="txt">개인정보를 포함한 <b>모든데이터는 삭제</b>되며, 삭제된 데이터는 <b>복구되지 않습니다.</b></span></li>
      </ol>
      <p class="list-txt">정말로 탈퇴하시겠습니까?</p>
    </div>
  </div>
</template>
<script>
export default {
    components:{

    },  
    data(){
      return{
        form: {},
      }
    },
    methods: {

    }
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


