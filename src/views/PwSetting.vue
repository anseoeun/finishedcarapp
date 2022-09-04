<template>
  <div class="contents">
    <div class="join-find-wrap">
      <div class="noti-text">
        가입시 등록한 아이디(이메일), 이름을 입력해주세요.
        <br>카카오 알림톡으로 임시 비밀번호가 발송됩니다.
      </div>
      <div class="f-wrap-list form-find-info">
        <div class="f-wrap">
          <div class="auto"><Input type="text" v-model="form.id" placeholder="아이디" /></div>
        </div>
        <div class="f-wrap">
          <div class="auto"><Input type="text" v-model="form.name" placeholder="이름" /></div>
        </div>
      </div>

      <div class="btn-wrap">
        <button class="btn-type1 st1" @click="popup.send=true"><span>확인</span></button>
      </div>
    </div>

     <!-- 팝업:ID발송 -->
    <Popup :is-open="popup.send" @close="popup.send=false;" >
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">알림톡으로 임시 비밀번호가 발송되었습니다.<br>로그인 후 비밀번호를 변경해주세요.</div>
        </template>
    </Popup>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: { },
      popup: {
        send: false,
      }
    }
  },
}
</script>
