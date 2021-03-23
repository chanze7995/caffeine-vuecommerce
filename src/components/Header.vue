<template>
  <header>
    <div class="mobileHeader">
      <div class="mobileHeader__logoImg">
        <img src="@/assets/img/logoImg.svg" alt="logo">
      </div>
      <div :class="['mobileHeader__toggleMenuBtn',{ open:props.isMobileMenuOpen }]" @click="showMobileMenu">
        <img :src="changeImgHandler" alt="">
      </div>
    </div>
    <ul :class="['headerNavbar',{ open:props.isMobileMenuOpen }]">
      <li class="headerNavbar__item">
        <router-link to="/">首頁</router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/explore">探索咖啡</router-link>
      </li>
      <li class="headerNavbar__item">
        <router-link to="/shop">線上購物</router-link>
      </li>
      <li :class="['logoImg',{close:props.isMobileMenuOpen}]">
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
        <router-link to="/account">會員</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { computed } from 'vue'
import menu from '@/assets/img/menu.svg'
import close from '@/assets/img/close.svg'
export default {
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      deault: false
    },
    showMobileMenu: {
      type: Function,
      default: () => {}
    }
  },
  setup (props) {
    const changeImgHandler = computed(() => {
      return (props.isMobileMenuOpen) ? close : menu
    })
    return {
      props,
      changeImgHandler,
      menu,
      close
    }
  }
}
</script>
