<template>
  <div class="productExhibit">
    <div class="productExhibit__path">path</div>
    <div class="productExhibit__display">
      <div class="productBox" v-for="item in productInfo" :key="item.id">
        <div class="productBox__img">
          <div class="productBox__discountLabel" v-if="item.isDiscount">-{{100-item.discount*100}}%</div>
          <a href="">
            <!-- <img :src="require(`@/assets/img/${item.img_name}`)" alt="" class="productBox__productImg"> -->
            <img src="@/assets/img/coffeeEquipment/brewing/aeropress/aeropress1-960x639.jpg" alt="" class="productBox__productImg">
          </a>
          <ul class="productBox__option">
            <li>
              <a href="" data-tip="加入購物車">
                <Icon icon-name="cart" icon-class="productBox__option__icon" />
              </a>
            </li>
            <li>
              <a href="" data-tip="喜歡">
                <Icon icon-name="heart" icon-class="productBox__option__icon"/>
              </a>
            </li>
            <li>
              <a href="" data-tip="了解更多">
                <Icon icon-name="magnifying-glass" icon-class="productBox__option__icon" />
              </a>
            </li>
          </ul>
        </div>
        <div class="productBox__content">
          <div class="productName">
            <a href="">
              <div>{{item.brand}}</div>
              <div>{{item.name}}</div>
            </a>
          </div>
          <div class="productPrice">
            <div :class="['productPrice__original',{'productPrice--discount':item.isDiscount}]">定價：{{item.price}}元</div>
            <div class="productPrice__discount" v-if="item.isDiscount">特價：{{Math.round(item.price*item.discount)}}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>{{productInfo}}</div> -->
</template>

<script>
import '@/assets/img/icons/cart.svg'
import Icon from '@/components/svgSprites/Icon.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Icon
  },
  setup () {
    const store = useStore()
    const productInfoLoad = () => {
      store.dispatch('getProductData')
    }
    // const productInfo = reactive(store.getters.productInfo)
    const productInfo = computed(() => {
      return store.getters.productInfo
    })

    onMounted(() => {
      productInfoLoad()
    })
    return { productInfo }
  }
}
</script>

<style>

</style>
