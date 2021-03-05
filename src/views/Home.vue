<template>
  <div class="home">
    <Header :isMobileMenuOpen="isMobileMenuOpen"
            :showMobileMenu="showMobileMenu" />
    <router-view :isMobileMenuOpen="isMobileMenuOpen"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
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
