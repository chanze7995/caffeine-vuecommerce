<template>
  <!-- <div class="productLightbox__background" :class="(isProductLightboxOpen)?'openProductLightbox':''" @click="props.showProductLightbox()"></div> -->
  <div class="productLightbox" :class="(props.isProductLightboxOpen)?'openProductLightbox':''" @click="props.showProductLightbox()">
    <div class="productCard">
      <Icon icon-name="close" icon-class="productCard__closeIcon" @click="props.showProductLightbox()" />
      <div class="productCard__img">
        <img src="@/assets/img/coffeeEquipment/brewing/aeropress/aeropress1-960x639.jpg" alt="" class="productCard__productImg">
      </div>
      <div class="productCard__content">
        <div class="productCard__content__brand">{{clickedProductInfo.brand}}</div>
        <div class="productCard__content__name">{{clickedProductInfo.name}}</div>
        <div class="productCard__content__description">{{clickedProductInfo.description}}</div>
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
      default: () => ({
        id: 0,
        brand: 'Caffeine With Mike',
        name: '麥克＆知識淵博的長靴  ',
        description: '來自盧安達基特加山地區單一起源咖啡。生長於海拔1600公尺，這天然的咖啡外觀呈奶油狀和堅果狀，帶有香橙般的酸度。聽起來不錯？向下滾動閱讀更多內容。',
        price: 520,
        isDiscount: false,
        discount: 1,
        img_name: 'coffeeBean/caffeinewithyellow.png',
        groupName: 'single',
        mainGroupName: 'coffeeBean'
      })
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
  setup (props) {
    const addCartBtnMsg = ref('加入購物車')
    return {
      props,
      addCartBtnMsg
    }
  }
}
</script>

<style>

</style>
