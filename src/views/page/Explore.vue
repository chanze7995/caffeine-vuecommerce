<template>
  <swiper class="carousel"
          :slides-per-view="3"
          :loop="true"
          :space-between="200"
          :centeredSlides="true"
          :grabCursor="true"
          navigation
          :pagination="{ clickable: true }">
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_yellow.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_blue.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_pink.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_green.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_purple.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_orange.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_white.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_red.png" alt="">
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <img src="@/assets/img/coffeeBean/caffeine_with_unknow.png" alt="">
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Navigation, Pagination, A11y])

export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
