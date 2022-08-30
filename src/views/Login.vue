<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>
    <div class="login-wrap">
      <div class="min-fix">
        <div class="logo"></div>
        <div class="login-box">
          <ul>
            <li>
              <div class="inp id">
                <input type="text" placeholder="아이디">
              </div>
            </li>
            <li>
              <div class="inp pw">
                <input type="password" placeholder="비밀번호">
              </div>
            </li>
          </ul>
          <div class="btn-box">
              <button class="btn-type1 st1"><span>로그인</span></button>
          </div>
          <div class="login-menu">
            <ul>
              <li><router-link to="/">회원가입</router-link></li>
              <li><button><span>아이디찾기</span><span>비밀번호 찾기</span></button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
     <!-- 팝업:미인증차량 안내 -->
    <Alert :is-open="alert.uncertifiedCar" 
      @close="alert.uncertifiedCar=false;status='paymentCheck';guideTextStatus='paymentCheck'"
    >
        <template slot="header">미인증차량 안내</template>
        <template slot="body">
          미인증 차량은 등록이 불가능하며 삭제됩니다.
          <br />계속 진행을 원하시는 경우 확인 버튼을
          <br />눌러주세요.
        </template>
    </Alert>
    <!-- 팝업:생체인식 사용 -->
    <Alert :is-open="alert.biometricsPop" @close="alert.biometricsPop=false" :confirm="false" class="header-title-size2">
        <template slot="header">생체인식 사용</template>
        <template slot="body">
          <span class="bold t-m">생체인식을 사용하시겠습니까?</span>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="alertPop=false">사용</button>
          <button class="btn-type1 st3" @click="alertPop=false">사용안함</button>
        </template>
    </Alert>         
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

      alert: {
        uncertifiedCar: false,
        biometricsPop: false
      }
    }
  },
}
</script>
