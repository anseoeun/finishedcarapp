<template>
    <Popup :is-open="visible" 
       @close="$emit('close');"
    >
        <template slot="header">길찾기</template>
        <template slot="body">
          <div class="map-find-wrap">
            <div class="txt-noti txt-st">
              길찾기를 이용하실 앱을 선택해주세요.
              <br>Tmap 또는 카카오내비가 설치되지 않았을 경우
              <br><b>길찾기 서비스 이용이 제한</b>됩니다.
            </div>
            <ul class="navi-selec">
              <li>
                <button class="icon tmap"><img :src="iconTmap" /></button>
              </li>
              <li>
                <button class="icon cacaonavi"><img :src="iconCaCaoNavi" /></button>
              </li>
            </ul>
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
  computed: {
    iconTmap(){
      return require(`@/assets/images/${this.skin}/ico-tmap.png`);
    },
    iconCaCaoNavi(){
      return require(`@/assets/images/${this.skin}/ico-cacao-navi.png`);
    }
  },  
}
</script>
