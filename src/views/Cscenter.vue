<template>
  <div class="contents">
    <div class="cs-center-wrap">
      <h2 class="tit-type1">고객센터</h2>

      <ul class="menu-list-type1">
        <li><router-link to="/" class="menu"><span class="icon"><i class="i-cs-notice"></i></span><span class="txt">공지사항</span></router-link></li>
        <li><router-link to="/" class="menu"><span class="icon"><i class="i-cs-faq"></i></span><span class="txt">FAQ</span></router-link></li>
        <li><router-link to="/" class="menu"><span class="icon"><i class="i-cs-question"></i></span><span class="txt">1:1 문의</span></router-link></li>
        <li><a href="tel:1600-4047" class="menu"><span class="icon"><i class="i-cs-center"></i></span><span v-if="skin !== 'polestar'" class="txt">고객센터</span><span v-else class="txt">전화상담</span></a></li>
        <li v-if="skin === 'bmw'"><router-link to="/" class="menu"><span class="icon"> <i class="i-cs-apps"></i></span><span class="txt">BMW APPS</span></router-link></li>
        <li v-if="skin === 'benz'"><button class="menu" @click="popup.chatbot=true"><span class="icon"> <i class="i-cs-chatbot"></i></span><span class="txt">챗봇</span></button></li>
        <li v-if="skin === 'benz'"><router-link to="/" class="menu"><span class="icon"> <i class="i-cs-apps"></i></span><span class="txt">App 안내</span></router-link></li>
        <li v-if="skin === 'polestar'"><router-link to="/" class="menu"><span class="txt">이벤트</span></router-link></li>
      </ul>
      
    </div>

     <!-- 팝업:챗봇 -->
    <Popup :is-open="popup.chatbot" :customBtn="true" @close="popup.chatbot=false;">
        <template slot="header">알림</template>
        <template slot="body">
          <div class="alert-txt">챗봇 서비스를 사용하시겠습니까?</div>
        </template>
    </Popup>    
  </div>
</template>


<script>
export default {
  data(){
    return{
      popup: {
        chatbot: false,
      }
    }
  },
}
</script>
