<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup () {
    const isMobileMenuOpen = ref(false)
    const showMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    return {
      isMobileMenuOpen,
      showMobileMenu
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
