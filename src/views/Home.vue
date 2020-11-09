<template>
  <div class="home">
    <Header @menu-open="menuOpen" />
    <router-view :isActive="isOpen"/>
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
    const isOpen = ref(false)
    const menuOpen = (isActive) => {
      isOpen.value = isActive
    }

    return {
      menuOpen,
      isOpen
    }
  }

}

</script>
