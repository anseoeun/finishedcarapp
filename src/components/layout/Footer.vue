<template>
    <div class="footer">
       <div class="footer-menu">
           <router-link to="/" class="menu" :class="{ on : menu === 'home' }">
            <span class="icon"><Icon type="foot-home" class="off" /><Icon type="foot-home-on" class="on" /></span><span v-if="skin != 'benz'" class="txt">HOME</span>
           </router-link>
           <router-link to="/" class="menu" :class="{ on : menu === 'charge' }">
            <span class="icon"><Icon type="foot-my" class="off" /><Icon type="foot-my-on" class="on" /></span>
            <span v-if="skin === 'bmw'" class="txt">마이차지비</span>
            <span v-if="skin === 'polestar'" class="txt">마이페이지</span>
           </router-link>           

           <router-link to="/" class="menu" :class="{ on : menu === 'charge' }">
            <span class="icon"><Icon type="foot-charge" class="off" /><Icon type="foot-charge-on" class="on" /></span><span v-if="skin != 'benz'" class="txt">충전하기</span>
           </router-link>

           <router-link v-if="skin === 'bmw'" to="/" class="menu" :class="{ on : menu === 'coupon' }"><span class="icon"><Icon type="foot-bmw-coupon" class="off" /><Icon type="foot-bmw-coupon-on" class="on" /></span><span class="txt">쿠폰eX</span></router-link>
           <router-link v-if="skin === 'benz'" to="/" class="menu" :class="{ on : menu === 'smart' }"><span class="icon"><Icon type="foot-benz-smart" class="off" /><Icon type="foot-benz-smart-on" class="on" /></span></router-link>
           <router-link v-if="skin === 'polestar'" to="/" class="menu" :class="{ on : menu === 'guide' }"><span class="icon"><Icon type="foot-polestar-guide" class="off" /><Icon type="foot-polestar-guide-on" class="on" /></span><span class="txt">안내</span></router-link>

           <router-link to="/" class="menu" :class="{ on : menu === 'cscenter' }">
            <template v-if="skin === 'bmw'"><span class="icon"><Icon type="foot-bmw-cscenter" class="off" /><Icon type="foot-bmw-cscenter-on" class="on" /></span><span v-if="skin != 'benz'" class="txt">고객센터</span></template>
            <template v-if="skin === 'benz'"><span class="icon"><Icon type="foot-benz-cscenter" class="off" /><Icon type="foot-benz-cscenter-on" class="on" /></span></template>
            <template v-if="skin === 'polestar'"><span class="icon"><Icon type="foot-polestar-cscenter" class="off" /><Icon type="foot-polestar-cscenter-on" class="on" /></span><span v-if="skin != 'benz'" class="txt">고객센터</span></template>
           </router-link>
       </div>
    </div>
</template>
<script>
export default {
    computed: {
      menu(){
        return this.$root.$route.meta.menu
      },
    }
};
</script>