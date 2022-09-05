<template>
  <div class="contents">
    <button class="back"><Icon v-if="skin !== 'polestar'" type="back" /></button>
    <div class="login-wrap">
      <div class="logo"></div>
      <div class="min-fix">
        <div class="login-box">
          <ul>
            <li>
              <div class="inp id">
                <input type="text" placeholder="아이디" @click="popup.emailCheck = true">
              </div>
            </li>
            <li>
              <div class="inp pw">
                <input type="password" placeholder="비밀번호">
              </div>
            </li>
          </ul>
          <div class="btn-box">
              <button class="btn-type1 st1" @click="popup.idpwCheck = true"><span>로그인</span></button>
          </div>
          <div class="login-menu">
            <ul>
              <li><router-link to="/" class="btn">회원가입</router-link></li>
              <li><router-link to="/" class="btn">아이디찾기</router-link><router-link to="/" class="btn">비밀번호 찾기</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
     <!-- 팝업:이메일안내 -->
    <Popup :is-open="popup.emailCheck" @close="popup.emailCheck=false;">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">아이디는 이메일 형식이어야 합니다.</div>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="$emit('close');"><span>확인</span></button>
          <button class="btn-type1 st2" @click="$emit('close');"><span>취소</span></button>
        </template>
    </Popup>
    <!-- 팝업:아이디비밀번호안내 -->
    <Popup :is-open="popup.idpwCheck" @close="popup.idpwCheck=false">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">
            아이디 또는 비밀번호가 잘못되었습니다.
            <br>법인, 완성차회원인 경우 인증이 완료되어야
            홈페이지/모바일 앱 로그인이 가능합니다.
            <br>(인증까지 최대 2~3일 소요)
          </div>
        </template>
    </Popup>
  </div>
</template>

<script>
export default {
  data(){
    return{
      status: 'selfAuth',
      guideTextStatus: 'selfAuth',
      form:{
        agency: {},
        tel: '',
        auth: '',
        addr:'',
        addr2:'',
        pin: '',
        pin2: '',        
      }, 

      popup: {
        emailCheck: false,
        idpwCheck: false
      }
    }
  },
}
</script>
