<template>
  <div class="productExhibit">
    <div class="productBox">
      <div class="productBox__img">
        <a href="">
          <img src="@/assets/img/coffeeEquipment/brewing/aeropress/aeropress1-960x639.jpg" alt="" class="productBox__productImg">
        </a>
        <ul class="productBox__option">
          <li>
            <a href="" data-tip="加入購物車">
              <svg class="productBox__option__icon">
                <use xlink:href="#cart" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" data-tip="喜歡">
              <icon icon-name="heart"></icon>
              <svg-icon class="productBox__option__icon" icon-class="heart" />
            </a>
          </li>
          <li>
            <a href="" data-tip="了解更多">
              <img src="@/assets/img/icons/magnifying-glass.svg" alt="" class="productBox__option__icon">
            </a>
          </li>
        </ul>
      </div>
      <div class="productBox__content">
        <div class="producName">AeroPress 愛樂壓 Coffee Maker </div>
        <div class="productPrice">定價：980元</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/img/icons/cart.svg'
export default {

}
</script>

<style>

</style>
