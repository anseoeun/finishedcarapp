<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">버튼 스타일</h2>

    <button class="btn-type1 st1"><span>btn-type1 st1</span></button>
    <button class="btn-type1 st2"><span>btn-type1 st2</span></button>
    <button class="btn-type2 st1"><span>btn-type2 st1</span></button>
    <button class="btn-type2 st2"><span>btn-type2 st2</span></button>
    <button class="btn-type3 st1"><span>btn-type3 st1</span></button>
    <button class="btn-type3 st2"><span>btn-type3 st2</span></button>
    <button class="btn-type4 st1"><span>btn-type4 st1</span></button>
    <button class="btn-type4 st2"><span>btn-type4 st2</span></button>
    <br>
    <button class="btn-type5 st1"><span>btn-type5 st1</span></button>
    <button class="btn-type5 st2"><span>btn-type5 st2</span></button>
    <button class="btn-type1 st1" disabled><span>st1 disabled</span></button>
    <button class="btn-type1 st2" disabled><span>st2 disabled</span></button>
    <button class="btn-type1 st1 disabled-st1" disabled><span>disabled-st1</span></button>


    <h2 class="guide-tit">균등배분 버튼</h2>    
    <div class="btn-wrap">
      <button class="btn-type1 st1"><span>확인</span></button>
      <button class="btn-type1 st2"><span>취소</span></button>
    </div>
  </div>
</template>

<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>
 

