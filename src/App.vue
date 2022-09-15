<template>
  <div id="app">
    <h1 class="hidden">
      <template v-if="skin === 'bmw'">BMW Charging</template>
      <template v-if="skin === 'benz'">Mercedes-benz Charge</template>
      <template v-if="skin === 'polestar'">Polestar Charge</template>
    </h1>
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
    },
    created(){

    const bmwStyle = () => import('@/assets/css/style-bmw.scss')
    const benzStyle = () => import('@/assets/css/style-benz.scss')
    const polestarStyle = () => import('@/assets/css/style-polestar.scss')

      switch(this.skin){ //ui.js에서 설정
        case 'bmw' : {
          bmwStyle()
          break
        }
        case 'benz' : {
          benzStyle()
          break
        }
        case 'polestar' : {
          polestarStyle()
          break
        }
      }
      
      document.querySelector('body').classList.add('skin-'+this.skin)
    }
}
</script>
