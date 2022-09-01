<template>
    <div :class="[layoutClass, {'has-footer' : footer}]">
        <HeaderSub />
        <slot />
        <Footer v-if="footer" />
    </div>
</template>

<script>
import HeaderSub from '@/components/layout/HeaderSub';
import Footer from '@/components/layout/Footer';
export default {
    components: {
        HeaderSub,
        Footer
    },
    computed: {
      layoutClass(){
        return this.$root.$route.meta.layoutClass ? this.$root.$route.meta.layoutClass : 'layout-sub'
      },
      footer(){
        if(this.$route.path === '/joinRuleList') { //이용 약관 동의
          if(this.skin === 'benz') return ''
          if(this.skin === 'polestar') return ''
        }        
        return this.$root.$route.meta.footer ? this.$root.$route.meta.footer : false
      },
    }, 
}
</script>