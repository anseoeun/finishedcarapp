<template>
  <!-- <div id="app" :class="'skin-'+skin" :style="customStyle"> -->
  <div id="app" :style="customStyle">
    <div class="hidden"></div>
    <Layout :layout="layout">
        <router-view />
    </Layout>
  </div>
</template>
<script>
import Layout from '@/layouts/Layout';

export default {
    name: 'App',
    components: { Layout },
    computed: {
      layout(){
        return this.$root.$route.meta.layout
      },
      customStyle () {
        return {
          '--c-path': 'bmw',
          '--c-base': '#ff0000' // testColor 는 예시 변수명
        }
      }
    },
    created(){
      document.querySelector('body').classList.add('skin-'+this.skin)
    }
}
</script>
<style lang="scss">
@import '~@/assets/css/media.scss';
.skin-bmw{
  $path: 'bmw';
  @import '~@/assets/css/style2.scss';
}
  
</style>
<!--<style>
  @import '~@/assets/css/common.css';
  @import '~@/assets/css/style-bmw.css';
</style>--> 