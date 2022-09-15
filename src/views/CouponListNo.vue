<template>
  <div class="contents">
    <div class="coupon-wrap">
      <div class="tit-wrap">
        <h2 class="tit-type1">쿠폰 eX</h2>
        <div class="right">
          <router-link to="/" class="btn-type5 st4"><span>쿠폰 보관함</span><Icon type="arr-right-sm"/></router-link>
        </div>
      </div>
      <!-- 쿠폰 리스트 -->
      <h3 class="tit-coupon"><span>쿠폰 리스트</span></h3>
      <div class="point-wrap">
        <ul class="labels">
          <li>잔여 포인트</li>
          <li>사용가능 포인트</li>
        </ul>
        <div class="points">
          <div class="no-coupon">사용 가능한 포인트가 없습니다</div>
        </div>
      </div>

      <div class="no-data">조회된 결과값이 없습니다.</div>
    </div>
  </div>
</template>
