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
      <div class="txt-success">성공입니다.</div>
      <div class="txt-error">에러입니다.</div>
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
    <br>

    <div class="basic-list st2 option-list">
      <li v-for="(item, index) in optionList" :key="index">
        <label class="inp-check">
          <input type="checkbox" v-model="option" :value="item.value">
          <span class="ic"></span>
          <span class="t">{{ item.label }}</span>
        </label>
      </li>
    </div>  

    <br>  
    <br>

    <div class="basic-list st2">
      <li v-for="(item, index) in installPlaceList" :key="index">
        <label class="inp-radio">
          <input type="radio" v-model="installPlace" :value="index">
          <span class="ic"></span>
          <span class="t">{{ item.label }}</span>
        </label>
      </li>
    </div>      
    
  </div>
</template>
<script>
export default {
    data(){
      return{
        form: {},

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
      }
    },
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


