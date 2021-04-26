<template>
  <div class="shopContainer">
    <ProductMenu/>
    <ProductExhibit :allProductInfo="allProductInfo"
                    @clicked-product-id="editProductLightbox"
                    :showProductLightbox="showProductLightbox"/>
  </div>
  <div class="shopLightbox">
    <ProductLightbox :clickedProductInfo="clickedProductInfo"
                     :isProductLightboxOpen="isProductLightboxOpen"
                     :showProductLightbox="showProductLightbox"/>
  </div>
</template>

<script>
import ProductMenu from '@/components/shop/ProductMenu.vue'
import ProductExhibit from '@/components/shop/ProductExhibit.vue'
import ProductLightbox from '@/components/shop/ProductLightbox.vue'
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    ProductMenu,
    ProductExhibit,
    ProductLightbox
  },
  setup () {
    // 取得全部商品資料
    const store = useStore()
    const allProductInfo = computed(() => {
      return store.getters.allProductInfo
    })
    // 點選的商品資料
    const clickedProductInfo = reactive({
      id: 0,
      name: '知識淵博的長靴  ',
      description: '來自盧安達基特加山地區單一起源咖啡。生長於海拔1600公尺，這天然的咖啡外觀呈奶油狀和堅果狀，帶有香橙般的酸度。聽起來不錯？向下滾動閱讀更多內容。',
      price: 520,
      isDiscount: false,
      discount: 1,
      img_name: 'coffeeBean/caffeinewithyellow.png',
      groupName: 'single',
      mainGroupName: 'coffeeBean'
    })
    // let clickedProductInfo = null
    const editProductLightbox = (idx) => {
      console.log('1', clickedProductInfo)
      Object.assign(clickedProductInfo, allProductInfo.value[idx])
      // Object.assign(clickedProductInfo, { ...allProductInfo.value[idx] })
      // clickedProductInfo = { ...allProductInfo.value[idx] }
      // clickedProductInfo = allProductInfo.value[idx]
      console.log('2', clickedProductInfo)
    }
    const isProductLightboxOpen = ref(false)
    const showProductLightbox = () => {
      isProductLightboxOpen.value = !isProductLightboxOpen.value
    }

    return {
      allProductInfo,
      // ...toRefs(clickedProductInfo),
      clickedProductInfo,
      editProductLightbox,
      isProductLightboxOpen,
      showProductLightbox
    }
  }
}
</script>
