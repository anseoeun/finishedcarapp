<template>
  <div class="contents">
    <div class="join-etc-wrap join-permission-wrap">
      <div class="logo"></div>
      <div class="text">
        <strong>권한 허용 안내</strong>
        <p>
          <strong>서비스 이용을 위해 다음 권한을<br>허용해 주시기 바랍니다.</strong>
        </p>
      </div>
      <div class="text2">
        <strong>선택적 접근권한 : 2건</strong>
        <p>동의하지 않아도 기본 앱 이용은 가능하나 특정 기능 이용에<br>제약이 있을 수 있습니다.</p>
      </div>
      <!-- permission-list -->
      <div class="permission-list">
        <ul>
          <li>
            <div class="icon"><i class="i-permission-noti"></i></div>
            <div class="desc">
              <strong>푸시, 알림</strong>
              <p>푸시알림을 위한 장치 고유 식별 정보 확인</p>
            </div>
          </li>
          <li>
            <div class="icon"><i class="i-permission-idx"></i></div>
            <div class="desc">
              <strong>위치</strong>
              <p>충전소 찾기 서비스에서 충전소 정보를<br>현 위치(GPS)를 지도 경로로 표시</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- // permission-list -->
      <div class="text2">
        <strong>접근권한 변경 방법</strong>
        <p class="fs2">설정 > 어플리케이션 정보 > App > 어플리케이션 설정</p>
      </div>
      <div class="btn-wrap">
        <button class="btn-type1 st1" @click="alertPop = true"><span>동의</span></button>
      </div>
    </div>
  </div>
</template>
