<template>
    <Popup :is-open="visible" :close="true" :footer="false"
       @close="$emit('close');"
    >
        <template slot="body">
          <div class="using-list-detail">
            <div class="desc">
              <div class="time">2020-10-08 10:12:34</div>
              <div class="provider">차지비</div>
              <div class="item-wrap">
                <p>BMW 거점용 충전기</p>
                <p>200210101010</p>
              </div>
              <div class="account">
                <strong>9,611</strong>원
              </div>
            </div>
            <div class="desc-list">
              <ul class="grid-list">
                <li>
                  <div class="label">결제방식</div>
                  <div class="auto"><b>선불</b></div>
                </li>
                <li>
                  <div class="label">결제방식</div>
                  <div class="auto"><b>일시불</b></div>
                </li>
                <li>
                  <div class="label">승인번호</div>
                  <div class="auto"><b></b></div>
                </li>
                <li>
                  <div class="label">승인상태</div>
                  <div class="auto"><b>정상</b></div>
                </li>
                <li>
                  <div class="label">충전량</div>
                  <div class="auto"><b>37.11kWh</b></div>
                </li>
                <li>
                  <div class="label">시작일시</div>
                  <div class="auto"><b>2021.10.10 10:12:34</b></div>
                </li>
                <li>
                  <div class="label">종료일시</div>
                  <div class="auto"><b>2021.10.10 16:12:34</b></div>
                </li>
                <li>
                  <div class="label">이용방식</div>
                  <div class="auto"><b>태깅</b></div>
                </li>
              </ul>
            </div>
          </div>
        </template>
    </Popup>    
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
}
</script>
