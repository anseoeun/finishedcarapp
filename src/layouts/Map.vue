<template>
    <div class="layout-map">
        <slot />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/layout/Footer';
export default {
  components: {
      Footer
  },
}
</script>