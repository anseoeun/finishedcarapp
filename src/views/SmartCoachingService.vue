<template>
  <div class="contents">
    <div class="smart-coaching-service-wrap">
      <h2 class="tit-type1">스마트코칭 서비스</h2>
      <ol class="smart-coaching-service-list">
        <!-- 차량 인도 -->
        <li class="step1">
          <div class="box">
            <div class="title">
              <em class="num">STEP 1</em>
              <strong class="tit">차량 인도</strong>
            </div>
            <div class="desc">
              <div class="img">
                <object :data="require('@/assets/images/benz/step-smart-coaching1-1.svg')" type="image/svg+xml" aria-label=""></object>
                <object :data="require('@/assets/images/benz/step-smart-coaching1-2.svg')" type="image/svg+xml" aria-label=""></object>
              </div>
              <p>EQ 차량 출고</p>
            </div>
          </div>
        </li>
        <!-- 스마트코치 배정 -->
        <li class="step2">
          <div class="box">
            <div class="title">
              <em class="num">STEP 2</em>
              <strong class="tit">스마트코치 배정</strong>
            </div>
            <div class="desc">
              <div class="img">
                <object :data="require('@/assets/images/benz/step-smart-coaching2.svg')" type="image/svg+xml" aria-label=""></object>
              </div>
              <ul>
                <li>고객</li>
                <li>스마트코치</li>
              </ul>
            </div>
          </div>
        </li>
        <!-- 솔루션 안내 -->
        <li class="step3">
          <div class="box">
            <div class="title">
              <em class="num">STEP 3</em>
              <strong class="tit">솔루션 안내</strong>
            </div>
            <div class="desc">
              <div class="img">
                <object :data="require('@/assets/images/benz/step-smart-coaching3.svg')" type="image/svg+xml" aria-label=""></object>
              </div>
              <strong>주거 환경에 적합한<br>충전 솔루션 제안</strong>
              <ul>
                <li>·Mercedes me Charge카드 사용 안내</li>
                <li>·공용 충전기 사용 안내</li>
                <li>·현장 실사부터 설치 및 충전기 사용 교육까지 전 프로세스 지원</li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>
    <!-- // guide-wrap -->
  </div>
</template> 

<script>
export default {
  data(){
    return{
    }
  }
}
</script>
