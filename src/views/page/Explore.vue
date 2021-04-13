<template>
  <Swiper class="carousel"
          @swiper="onSwiper"
          :centeredSlides="true"
          :centeredSlidesBounds="true"
          :loop="true"
          :slidesPerView="3"
          :space-between="100"
          :grabCursor="true"
          navigation
          :pagination="{ clickable: true }">
    <SwiperSlide class="carousel_cell" v-for="item in allCoffeeBeanInfo" :key="item.id">
      <router-link :to="'/explore/flavor'">
        <img :src="require(`@/assets/img/${item.img_name}`)" alt="">
      </router-link>
    </SwiperSlide>
  </Swiper>
  <router-view />
</template>

<script>
import { computed, watch, nextTick } from 'vue'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const store = useStore()
    const allCoffeeBeanInfo = computed(() => {
      const allProductInfo = store.getters.productInfo
      const getCoffeeBeanData = allProductInfo.filter(item => item.mainGroupName === 'coffeeBean')
      return getCoffeeBeanData
    })

    const onSwiper = (swiper) => {
      watch(allCoffeeBeanInfo, () => {
        nextTick(() => {
          swiper.update()
        })
      })
    }
    return {
      allCoffeeBeanInfo,
      onSwiper
    }
  }
}
</script>
