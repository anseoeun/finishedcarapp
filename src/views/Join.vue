<template>
  <div class="contents">
    <div class="join-wrap">
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
      <h2 class="tit-type1">계정등록</h2>
      <div class="grid-box">
        <ul>
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
      
      <div class="btn-wrap">
        <button class="btn-type1 st1"><span>카드인증 요청</span></button>
      </div>      
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      form: {
        email: '',
        pw: '',
        pwcheck: '',
      }
    }
  },
  methods: {
    
  }
}
</script>
