<template>
  <div class="contents">
    <div class="apply-index-wrap">
      <div v-if="skin !== 'polestar'" class="logo"></div>

      <div class="box notice">
        <Icon type="noti" />
        <div class="desc">
          <div class="txt-st xsm">
            <p><span class="ico">*</span><span class="auto">충전기 설치는 충전기의 종류에 따라 설치 사업자가 상이할 수 있으며, 설치과정에서 일부 비용이 발생할 수 있습니다.</span></p>
            <p><span class="ico">*</span><span class="auto">자세한 내용은 해당 업체 고객센터를 통해 상담받으실 수 있습니다.</span></p>
          </div>
        </div>
      </div>
      <router-link to="/" class="box menu">
        <div class="img">
          <img src="@/assets/images/temp-icon.png" alt="">
        </div>
        <duv class="desc">
          <strong>과금형 콘센트 충전기</strong>
          <p>일반 콘센트에 설치하여 BMW차량에 기본 제공되는 모드2 비상용 케이블로 전기차 충전</p>
        </duv>
      </router-link>
      <router-link to="/" class="box menu">
        <div class="img">
          <img src="@/assets/images/temp-icon.png" alt="">
        </div>
        <duv class="desc">
          <strong>개인용 충전기</strong>
          <p>충전기 소유자만 사용하는 비공용충전기</p>
        </duv>
      </router-link>
      <router-link to="/" class="box menu">
        <div class="img">
          <img src="@/assets/images/temp-icon.png" alt="">
        </div>
        <duv class="desc">
          <strong>부분개방형 충전기</strong>
          <p>공동주택 내 다른 입주민과 함께 사용하는 공용 충전기</p>
        </duv>
      </router-link>
        
      <div class="btn-wrap">
        <button class="btn-type1 st1" @click="alertPop = true"><span>신청 내역 확인</span></button>
      </div>
    </div>
  </div>
</template>
