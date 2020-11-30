<template>
  <div class="productExhibit">
    <div class="productBox">
      <div class="productBox__img">
        <div class="productBox__discountLabel">-20%</div>
        <a href="">
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
          <a href="">AeroPress 愛樂壓 Coffee Maker</a>
        </div>
        <div class="productPrice">定價：980元</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/img/icons/cart.svg'
import Icon from '@/components/svgSprites/Icon.vue'
export default {
  components: {
    Icon
  }
}
</script>

<style>

</style>
