<template>
  <header>
    <div class="mobileHeader">
      <div class="mobileHeader__logoImg">
        <img src="@/assets/img/logoImg.svg" alt="logo">
      </div>
      <div :class="['mobileHeader__toggleMenuBtn',{ open:isOpen }]" @click="showMenuHandler">
        <img :src="changeImgHandler" alt="">
      </div>
    </div>
    <ul :class="['headerNavbar',{ open:isOpen }]">
      <li class="headerNavbar__item">
        <router-link to="/">首頁</router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/explore">探索咖啡</router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/shop">線上購物</router-link>
      </li>
      <li :class="['logoImg',{close:isOpen}]">
        <router-link to="/">
          <img src="@/assets/img/logoImg.svg" alt="logo">
        </router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/locations">門市據點</router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/course">咖啡課程</router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/about">資訊</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { ref, computed } from 'vue'
import menu from '@/assets/img/menu.svg'
import close from '@/assets/img/close.svg'
export default {
  setup (prop, { emit }) {
    const isOpen = ref(false)
    const changeImgHandler = computed(() => {
      return (isOpen.value) ? close : menu
    })
    const showMenuHandler = () => {
      isOpen.value = !isOpen.value
      emit(
        'menu-open', isOpen.value
      )
    }
    return {
      isOpen,
      showMenuHandler,
      changeImgHandler,
      menu,
      close
    }
  }
}
</script>
