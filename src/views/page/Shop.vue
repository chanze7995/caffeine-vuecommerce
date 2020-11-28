<template>
  <div class="shopContainer">
    <ProductMenu/>
    <ProductExhibit/>
  </div>
</template>

<script>
import ProductMenu from '@/components/shop/ProductMenu.vue'
import ProductExhibit from '@/components/shop/ProductExhibit.vue'
export default {
  components: {
    ProductMenu,
    ProductExhibit
  }
}
</script>
