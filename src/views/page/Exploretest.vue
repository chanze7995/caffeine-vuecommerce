<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in allCoffeeBeanInfo" :key="item.id">
        <router-link :to="'/exploretest/flavor'">
        <img :src="require(`@/assets/img/${item.img_name}`)" alt="">
      </router-link>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  <router-view />
</template>

<script>
import { computed, nextTick, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
// import Swiper from 'swiper'
// import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import Swiper from 'swiper/bundle'
// import 'swiper/swiper-bundle.css'
// SwiperCore.use([Navigation, Pagination])

export default {
  setup () {
    const store = useStore()
    const allCoffeeBeanInfo = computed(() => {
      const allProductInfo = store.getters.productInfo
      const getCoffeeBeanData = allProductInfo.filter(item => item.mainGroupName === 'coffeeBean')
      return getCoffeeBeanData
    })
    watch(allCoffeeBeanInfo, () => {
      nextTick(() => {
        swiper.update()
        console.log(2)
        // swiper.update()
      })
    })
    let swiper = null
    onMounted(() => {
      swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 3,
        spaceBetween: 200,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
    return {
      allCoffeeBeanInfo,
      swiper
    }
  }
}
</script>
