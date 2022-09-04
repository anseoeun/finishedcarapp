<template>
    <div :class="layoutClass">
        <Header @logout="popup.logout=true" />
        <slot />
        <Footer />

      <!-- 팝업:로그아웃 -->
      <Popup :is-open="popup.logout" :customBtn="true"
        @close="popup.logout=false;"
      >
          <template slot="header">알림</template>
          <template slot="body">
            <div class="alert-txt">로그아웃하시겠습니까?</div>
          </template>
          <template slot="btn">
            <button class="btn-type1 st1" @click="popup.logout=false"><span>확인</span></button>
            <button class="btn-type1 st2" @click="popup.logout=false"><span>취소</span></button>
          </template>
      </Popup>   
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
    components: {
        Header,
        Footer
    },
    data(){
      return{
        popup: {
          logout: false,
        }
      }
    },    
    computed: {
      layoutClass(){
        return this.$root.$route.meta.layoutClass ? this.$root.$route.meta.layoutClass : 'layout-default'
      },
      footer(){
        return this.$root.$route.meta.footer ? this.$root.$route.meta.footer : false
      },      
    }, 
}
</script>