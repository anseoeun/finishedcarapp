<template>
  <div class="contents">
    <div class="charge-start-wrap">
      <!-- 충전기 정보 -->
      <h2 class="tit-type2">충전기 정보</h2>
      <div class="grid-box st4">
        <ul>
          <li>
            <div class="cell label">충전소명</div>
            <div class="cell auto">[차지비] 서울시 강남구 서울주택도시공사</div>
          </li>
          <li>
            <div class="cell label">충전소주소</div>
            <div class="cell auto">서울 강남구 개포로 621</div>
          </li>
          <li>
            <div class="cell label">상세위치</div>
            <div class="cell auto">공용주차장 지하3층 B1구역(주차비 유료)</div>
          </li>
          <li>
            <div class="cell label">충전기ID</div>
            <div class="cell auto">2003422001</div>
          </li>
        </ul>
      </div>
      <!-- 시간설정 -->
      <h2 class="tit-type2">시간설정</h2>
      <div class="grid-box st4">
        <p class="txt">시간은 최대시간(12시간)으로 설정되며,<br>
          충전이 완료되면 자동으로 중지합니다.
        </p>
        <ul>
          <li>
            <div class="cell label">사용시간</div>
            <div class="cell auto"><b>12시간</b></div>
          </li>
        </ul>
      </div>
      <!-- 결제방법 -->
      <h2 class="tit-type2">결제방법</h2>
      <div class="grid-box st4">
        <ul>
          <li>
            <div class="cell label">결제방법</div>
            <div class="cell auto"><b>멤버십포인트</b></div>
          </li>
          <li>
            <div class="cell label">멤버십포인트</div>
            <div class="cell auto"><b>∞ 포인트</b></div>
          </li>
        </ul>
      </div>
      <!-- 결제 금액 내역 -->
      <h2 class="tit-type2">결제 금액 내역</h2>
      <div class="grid-box st4">
        <ul>
          <li>
            <div class="cell label">단가</div>
            <div class="cell auto"><b>259.0원/kWh</b></div>
          </li>
        </ul>
      </div>

      <div class="check">
        <label class="inp-check">
          <input type="checkbox">
          <span class="ic"></span>
          <span class="t">위 결제 내역을 확인하였습니다.</span>
        </label>
      </div>

      <div class="btn-wrap">
        <button class="btn-type1 st1"><span>충전하기</span></button>
      </div>
    </div>
  </div>
</template>
