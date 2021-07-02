<template>
  <div class="coffeeDescription">
    <section class="coffeePhotoSection">
      <div class="coffeePhotoSection__background sectionBackground" :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}"></div>
      <div class="coffeePhotoSection__container">
        <div class="coffeePhotoSection__container__title leftSide">{{clickedCoffeeBeanInfo.sloganI}}</div>
        <img :src="require(`@/assets/img/${clickedCoffeeBeanInfo.img_name}`)" alt="" class="coffeePhotoSection__container__img">
        <div class="coffeePhotoSection__container__title rightSide">{{clickedCoffeeBeanInfo.sloganII}}</div>
      </div>
    </section>
    <section class="coffeeArticleSection sectionSize">
      <div class="coffeeArticleSection__container">
        <div class="coffeeArticleSection__container__title">{{clickedCoffeeBeanInfo.name}}</div>
        <div class="sectionBar"></div>
        <div class="coffeeArticleSection__container__content">
          <p class="coffeeArticleSection__container__content__text" v-html="clickedCoffeeBeanInfo.description"></p>
          <p class="coffeeArticleSection__container__content__text">聽起來不錯？向下滾動閱讀更多內容。</p>
          <p class="coffeeArticleSection__container__content__recommendText">新鮮烤製，提供快速和免費的一流服務。<br>價格 NTD380 起 </p>
        </div>
        <div>
          <Button :btnMsg="buyBtnMsg" class="coffeeArticleSection__container__btn"/>
          <Button :btnMsg="tasteBtnMsg" class="coffeeArticleSection__container__btn"/>
        </div>
      </div>
      <div class="coffeeArticleSection__img" :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}">
        <img :src="require(`@/assets/img/${clickedCoffeeBeanInfo.img_mediumBackgroundI}`)" alt="" class="coffeeArticleSection__img__pic">
      </div>
    </section>
    <section class="transitionSection sectionSize">
      <div class="transitionSection__title1">手工<br>烘培</div>
      <div class="sectionBackground">
        <img :src="require(`@/assets/img/${clickedCoffeeBeanInfo.img_backgroundI}`)" alt="" class="transitionSection__img ">
      </div>
      <div class="transitionSection__title2">小批量<br>製作</div>
    </section>
    <section class="coffeeMoreInfoSection sectionSize">
      <div class="coffeeMoreInfoSection__container">
        <div class="coffeeMoreInfoSection__container__title">告訴我更多</div>
        <div class="sectionBar"></div>
        <div class="coffeeMoreInfoSection__container__textList" v-for="item in moreInfoListMsgArr" :key="item.title">
          <div class="coffeeMoreInfoSection__container__text">{{item.title}}</div>
          <div class="ccoffeeMoreInfoSection__container__plus">＋</div>
        </div>
      </div>
      <div class="coffeeMoreInfoSection__img" :style="{'--clickedFlavorColor':clickedCoffeeBeanInfo.color}">
        <img :src="require(`@/assets/img/${clickedCoffeeBeanInfo.img_mediumBackgroundII}`)" alt="" class="coffeeArticleSection__img__pic">
      </div>
    </section>
    <section class="coffeeReviewSection sectionSize">
      <div class="coffeeReviewSection__title1">喝過此商品的評價</div>
      <div class="coffeeReviewSection__text">早晨來一杯暢飲。真棒！讓我似乎還在夢中。</div>
      <div class="coffeeReviewSection__user">Alice Lee</div>
      <div class="sectionBackground">
        <img :src="require(`@/assets/img/${clickedCoffeeBeanInfo.img_backgroundII}`)" alt="" class="transitionSection__img ">
      </div>
      <div class="coffeeReviewSection__title2">告訴我們你覺得它像的味道<br>@caffeinewithmike</div>
    </section>
    <section class="coffeePurchaseSection sectionSize">
      <ProductCard/>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import ProductCard from '@/components/explore/ProductCard.vue'
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    Button,
    ProductCard
  },
  setup (props) {
    // 取得所點擊的風味
    const route = useRoute()
    const clickedFlavor = route.params.flavor
    // 取得咖啡豆資料
    const store = useStore()
    const allCoffeeBeanInfo = computed(() => {
      return store.getters.allCoffeeBeanInfo
    })

    const setClickedCoffeeBean = computed(() => {
      return allCoffeeBeanInfo.value.filter(item => item.name === clickedFlavor)
    })
    const clickedCoffeeBeanInfo = setClickedCoffeeBean.value[0]

    const buyBtnMsg = ref('馬上購買')
    const tasteBtnMsg = ref('取得試飲')
    const moreInfoListMsgArr = reactive([
      { title: '口味：' },
      { title: '烘培：' },
      { title: '沖煮方法：' },
      { title: '幕後花絮：' },
      { title: 'SCAA杯測分數：' },
      { title: '細節：' },
      { title: '名稱從何而來？' },
      { title: '為什麼要在這裡購買特色咖啡？' }
    ])

    return {
      clickedCoffeeBeanInfo,
      props,
      buyBtnMsg,
      tasteBtnMsg,
      moreInfoListMsgArr
    }
  }
}
</script>

<style>

</style>
