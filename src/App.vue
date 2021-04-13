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
// import { ref } from 'vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup () {
    const store = useStore()
    const productInfoLoad = () => {
      console.log('1')
      store.dispatch('getProductData')
      console.log('1.1')
    }

    const isMobileMenuOpen = ref(false)
    const showMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }
    onMounted(
      () => {
        productInfoLoad()
        console.log('4')
      }
    )
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
