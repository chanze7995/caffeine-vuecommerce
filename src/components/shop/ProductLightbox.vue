<template>
  <div class="productLightbox__background" :class="(isProductLightboxOpen)?'openProductLightbox__background':''" @click="showProductLightbox()"></div>
  <div class="productLightbox" :class="(isProductLightboxOpen)?'openProductLightbox':''">
    <div @click="showProductLightbox()">
      <Icon icon-name="close" icon-class="productCard__closeIcon"/>
    </div>
    <ProductCard/>
  </div>
</template>

<script>
import Icon from '@/components/svgSprites/Icon.vue'
// import Button from '@/components/Button.vue'
// import ProductCard from '@/components/explore/ProductCard.vue'
import { ref } from 'vue'
import ProductCard from '../explore/ProductCard.vue'
export default {
  components: {
    Icon,
    // Button
    ProductCard
  },
  props: {
    clickedProductInfo: {
      type: Object,
      default: () => ({})
    },
    isProductLightboxOpen: {
      type: Boolean,
      deault: false
    },
    showProductLightbox: {
      type: Function,
      default: () => {}
    }
  },
  setup () {
    const addCartBtnMsg = ref('加入購物車')

    return {
      addCartBtnMsg
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/component/shop/_productLightbox.scss';
</style>
