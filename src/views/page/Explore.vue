<template>
  <Swiper class="carousel"
          @swiper="onSwiper"
          :centeredSlides="true"
          :centeredSlidesBounds="true"
          :loop="true"
          :preventClicksPropagation="true"
          :slidesPerView="3"
          :space-between="100"
          :grabCursor="true"
          navigation
          :pagination="{ clickable: true }">
    <SwiperSlide v-for="item in allCoffeeBeanInfo" :key="item.id">
      <router-link :to="`/explore/${item.name}`" @click="getClickedCoffeeId(item.id)">
        <img :src="require(`@/assets/img/${item.img_name}`)" alt="">
      </router-link>
    </SwiperSlide>
  </Swiper>
  <router-view />
</template>

<script>
import { computed, watch, nextTick, ref } from 'vue'
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
      return store.getters.allCoffeeBeanInfo
    })
    const clickedCoffeeBeanId = ref(0)
    const getClickedCoffeeId = (idx) => {
      clickedCoffeeBeanId.value = idx
    }
    // const setClickedCoffeeId = () => {
    //   store.dispath('setClickedCoffeeId', clickedCoffeeBeanId)
    // }
    const onSwiper = (swiper) => {
      watch(allCoffeeBeanInfo, () => {
        nextTick(() => {
          swiper.update()
        })
      })
    }
    return {
      allCoffeeBeanInfo,
      getClickedCoffeeId,
      // setClickedCoffeeId,
      onSwiper
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/page/_explore.scss';
</style>
