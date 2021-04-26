<template>
  <div class="productLightbox__background" :class="(isProductLightboxOpen)?'openProductLightbox__background':''" @click="showProductLightbox()"></div>
  <div class="productLightbox" :class="(isProductLightboxOpen)?'openProductLightbox':''">
    <div class="productCard">
      <div @click="showProductLightbox()">
        <Icon icon-name="close" icon-class="productCard__closeIcon"/>
      </div>
      <div class="productCard__img">
        <img :src="require(`@/assets/img/${clickedProductInfo.img_name}`)" alt="" class="productCard__productImg">
      </div>
      <div class="productCard__content">
        <div class="productCard__content__brand">{{clickedProductInfo.brand}}</div>
        <div class="productCard__content__name">{{clickedProductInfo.name}}</div>
        <div class="productCard__content__description" v-html="clickedProductInfo.description"></div>
        <div class="productCard__content__price">
          <div class="productCard__content__price__original">定價：{{clickedProductInfo.price}}元</div>
          <div class="productCard__content__price__discount"></div>
        </div>
      <div class="productCard__quantity">
        <div class="productCard__quantity__icon"></div>
        <div class="productCard__quantity__value"></div>
        <div class="productCard__quantity__icon"></div>
      </div>
      <Button :btnMsg="addCartBtnMsg" class="productCard__addBtn"/>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/svgSprites/Icon.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Icon,
    Button
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

<style>

</style>
