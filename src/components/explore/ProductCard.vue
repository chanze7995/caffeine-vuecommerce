<template>
  <div class="productCardContainer">
    <div class="productCard">
      <div class="productCard__background">
        <div class="colorCard"></div>
        <h1 class="logoName">Caffeine With Mike</h1>
        <a href="#" class="share">
          <Icon icon-name="share-symbol" icon-class="shareIcon"/>
        </a>
        <img src="@/assets/img/coffeeBean/caffeinewithyellow.png" alt="" class="productImg">
      </div>
      <div class="productCard__info">
        <div class="productCard__info__title">
          <h1 class="productName">麥克＆知識淵博的長靴</h1>
          <h3 class="productGroup">淺烘培</h3>
        </div>
        <div class="productCard__info__description">
          <h3 class="title">商品資訊</h3>
          <p class="text">來自盧安達基特加山地區單一起源咖啡。<br>生長於海拔1600公尺，<br>這天然的咖啡外觀呈奶油狀和堅果狀，帶有香橙般的酸度。</p>
        </div>
        <div class="productCard__info__grind">
          <h3 class="title">研磨度</h3>
          <div class="sizeContainer">
            <div class="size">原豆</div>
            <div class="size">粗</div>
            <div class="size">細</div>
          </div>
        </div>
        <div class="productCard__info__size">
          <h3 class="title">份量</h3>
          <div class="sizeContainer">
            <div class="size">250g</div>
            <div class="size">500g</div>
            <div class="size">1kg</div>
          </div>
        </div>
        <div class="productCard__info__price">
          <a href="#" class="buy">
            <Icon icon-name="cart" icon-class="buyIcon"/>
            <p>加入購物車</p>
          </a>
          <div class="price">
            <h1>520元</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/svgSprites/Icon.vue'
export default {
  components: {
    Icon
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/component/explore/_productCard.scss';
</style>
