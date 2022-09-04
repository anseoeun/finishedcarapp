<template>
  <div class="contents">
    <div class="charge-status-wrap">
      <h2 class="tit-type2">충전소 정보</h2>
      <div class="grid-box st2">
        <ul>
          <li>
            <div class="cell label">충전소명</div>
            <div class="cell auto">[차지비] 서울시 강남구 서울주택도시공사</div>
          </li>
          <li>
            <div class="cell label">충전기</div>
            <div class="cell auto">2008692002 - 완속</div>
          </li>
          <li>
            <div class="cell label">시간설정</div>
            <div class="cell auto">08/08 10:00:00 ~ 08/08 19:00:00</div>
          </li>
          <li>
            <div class="cell label">충전시간</div>
            <div class="cell auto">9시간</div>
          </li>
          <li>
            <div class="cell label">인증종류</div>
            <div class="cell auto">회원  Mobile 충전소ID</div>
          </li>
          <li>
            <div class="cell label">충전상태</div>
            <div class="cell auto">즉시충전</div>
          </li>
          <li>
            <div class="cell label">남은시간</div>
            <div class="cell auto"></div>
          </li>
          <li>
            <div class="cell label">예상사용량</div>
            <div class="cell auto">53.5kWh</div>
          </li>
        </ul>
      </div>

      <div class="btn-wrap">
        <button v-if="skin === 'polestar'" class="btn-type1 st2" @click="popup.cancel=true"><span>충전종료</span></button>
        <button v-else class="btn-type1 st2" @click="popup.cancel=true"><span>취소</span></button>
      </div>
    </div>

     <!-- 팝업:충전취소 -->
    <Popup :is-open="popup.cancel" @close="popup.cancel=false;">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">충전을 취소하시겠습니까?</div>
        </template>
    </Popup>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      popup: {
        cancel: false,
      }
    }
  },
}
</script>
