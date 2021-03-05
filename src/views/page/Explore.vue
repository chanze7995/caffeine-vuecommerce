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
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithyellow.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithblue.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithpink.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithgreen.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithpurple.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithorange.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithwhite.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithred.png" alt="">
      </router-link>
    </swiper-slide>
    <swiper-slide class="carousel_cell">
      <router-link :to="'/explore/flavor'">
        <img src="@/assets/img/coffeeBean/caffeinewithunknown.png" alt="">
      </router-link>
    </swiper-slide>
  </swiper>
  <router-view />
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
