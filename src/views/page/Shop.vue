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
import { ref, reactive, computed, onMounted } from 'vue'
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
    const productInfoLoad = () => {
      store.dispatch('getProductData')
    }
    const allProductInfo = computed(() => {
      return store.getters.productInfo
    })
    // 點選的商品資料
    const clickedProductInfo = reactive({})
    const editProductLightbox = (idx) => {
      clickedProductInfo.value = allProductInfo.value[idx]
    }
    const isProductLightboxOpen = ref(false)
    const showProductLightbox = () => {
      isProductLightboxOpen.value = !isProductLightboxOpen.value
    }
    onMounted(() => {
      productInfoLoad()
    })
    return {
      allProductInfo,
      clickedProductInfo,
      editProductLightbox,
      isProductLightboxOpen,
      showProductLightbox
    }
  }
}
</script>
