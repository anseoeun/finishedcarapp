<template>
    <Popup :is-open="visible" 
       @close="$emit('close');"
    >
        <template slot="header">신용카드 등록</template>
        <template slot="body">

          <div class="card-regist-wrap">
            <div class="grid-box form-card noline">
              <ul>
                <li>
                  <div class="cell label">카드번호</div>
                  <div class="cell auto">
                    <div class="f-wrap">
                      <div style="width:25%"><Input type="text" v-model="form.card1" /></div>
                      <div style="width:25%"><Input type="text" v-model="form.card2" /></div>
                      <div style="width:25%"><Input type="text" v-model="form.card3" /></div>
                      <div style="width:25%"><Input type="text" v-model="form.card4" /></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="cell label">유효기간</div>
                  <div class="cell auto">
                    <div class="f-wrap">
                      <div style="width:25%"><Input type="text" v-model="form.month" /></div>
                      <div style="width:25%">월</div>
                      <div style="width:25%"><Input type="text" v-model="form.year" /></div>
                      <div style="width:25%">년</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="cell label">비밀번호</div>
                  <div class="cell auto">
                    <div class="f-wrap">
                      <div style="width:25%"><Input type="text" v-model="form.pw" /></div>
                      <div style="width:75%">** (앞2자리)</div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="cell label">인증번호</div>
                  <div class="cell auto">
                    <div class="f-wrap">
                      <div style="width:25%"><Input type="text" v-model="form.pwcheck" /></div>
                      <div style="width:25%"></div>
                      <div style="width:25%"></div>
                      <div style="width:25%"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p class="txt-info">주민번호 앞6자리 또는 사업자번호(-없이 입력)</p>
          </div>

        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="$emit('close');"><span>확인</span></button>
          <button class="btn-type1 st2" @click="$emit('close');"><span>취소</span></button>
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
  data(){
    return{
      form: {},
    }
  },
}
</script>
