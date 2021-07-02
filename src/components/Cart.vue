<template>
  <div class="cartContainer">
    <div class="cartContent">
      <h1>購物車</h1>
      <p>This is an informative card that will tell you something that's... well, important!</p>
      <div class="cartIcon">
        <Icon icon-name="cart" icon-class="cart__icon" />
      </div>
    </div>
    </div>
</template>

<script>
import Icon from '@/components/svgSprites/Icon.vue'
export default {
  name: 'Cart',
  components: {
    Icon
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/component/_cart.scss';
</style>
