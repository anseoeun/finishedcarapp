<template>
    <Popup :is-open="visible" 
       @close="$emit('close');"
    >
        <template slot="header">주소검색</template>
        <template slot="body">

          <div class="addr-wrap">
            <div class="f-wrap-list form-address">
              <div class="f-wrap">
                <div class="auto"><Input type="text" v-model="form.addr" placeholder="도로명, 건물명, 지번" /></div>
                <button class="btn-type3 st1 btn-addr-sch" @click="resultShow = true"><span>주소검색</span></button>
              </div>
              <div class="f-wrap">
                <div class="auto"><Input type="text" v-model="form.addrdetail" placeholder="상세주소" /></div>
              </div>
            </div>

            <template v-if="resultShow">
                <!-- 검색결과 -->
                <ul class="addr-list" ref="addrlist">
                    <li v-for="(item, index) in addrList" :key="index">
                      <button @click="form.addr = item">{{ item }}</button>
                    </li>
                </ul>
            </template>
          </div>

        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="confirm();"><span>확인</span></button>
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
      form: {
        addr: '',
        addrdetail: '',
      },
      resultShow: false,
      addrList: [
          '서울 송파구 올림픽로 300(신천동)',
          '강원 평창군 대관령면 올림픽로 300',
          '강원도 평창군 올림픽로 300 강원도 평창군 올림픽로 300',
          '서울 송파구 올림픽로 300(신천동)',
          '강원 평창군 대관령면 올림픽로 300',
          '강원도 평창군 올림픽로 300 강원도 평창군 올림픽로 300',
          '서울 송파구 올림픽로 300(신천동)',
          '강원 평창군 대관령면 올림픽로 300',
          '강원도 평창군 올림픽로 300 강원도 평창군 올림픽로 300',
      ],
    }
  },
  methods: {
    confirm(){
      this.$emit('confirm', this.form);
      this.form.addr = "";
      this.form.addrdetail = "";
      this.$emit('close');
    }
  }
}
</script>
