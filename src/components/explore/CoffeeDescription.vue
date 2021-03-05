<template>
  <div class="coffeeDescription">
    <section class="coffeePhotoSection">
      <div class="coffeePhotoSection__background sectionBackground"></div>
      <div class="coffeePhotoSection__container">
        <div class="coffeePhotoSection__container__title leftSide">奶油堅果風味</div>
        <img src="@/assets/img/coffeeBean/caffeinewithyellow.png" alt="" class="coffeePhotoSection__container__img">
        <div class="coffeePhotoSection__container__title rightSide">香橙般的酸味</div>
      </div>
    </section>
    <section class="coffeeArticleSection sectionSize">
      <div class="coffeeArticleSection__container">
        <div class="coffeeArticleSection__container__title">知識淵博的<br>長靴</div>
        <div class="sectionBar"></div>
        <div class="coffeeArticleSection__container__text">來自盧安達基特加山地區單一起源咖啡。<br>生長於海拔1600公尺，<br>這天然的咖啡外觀呈奶油狀和堅果狀，<br>帶有香橙般的酸度。
        </div>
        <div class="coffeeArticleSection__container__recommendText">新鮮烤製，提供快速和免費的一流服務。<br>價格 NTD380 起 </div>
        <div>
          <Button :btnMsg="buyBtnMsg" class="coffeeArticleSection__container__btn"/>
          <Button :btnMsg="tasteBtnMsg" class="coffeeArticleSection__container__btn"/>
        </div>
      </div>
      <div class="coffeeArticleSection__img">
        <img src="@/assets/img/coffeeDescription/yellow/mediumyellow1.jpg" alt="" class="coffeeArticleSection__img__pic">
      </div>
    </section>
    <section class="transitionSection sectionSize">
      <div class="transitionSection__title1">手工<br>烘培</div>
      <div class="sectionBackground">
        <img src="@/assets/img/coffeeDescription/yellow/largeyellowbackground1.jpg" alt="" class="transitionSection__img ">
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
      <div class="coffeeMoreInfoSection__img">
        <img src="@/assets/img/coffeeDescription/yellow/mediumyellow2.jpg" alt="" class="coffeeArticleSection__img__pic">
      </div>
    </section>
    <section class="coffeeReviewSection sectionSize">
      <div class="coffeeReviewSection__title1">喝過此商品的評價</div>
      <div class="coffeeReviewSection__text">早晨來一杯暢飲。真棒！讓我似乎還在夢中。</div>
      <div class="coffeeReviewSection__user">Alice Lee</div>
      <div class="sectionBackground">
        <img src="@/assets/img/coffeeDescription/yellow/largeyellowbackground2.jpg" alt="" class="transitionSection__img ">
      </div>
      <div class="coffeeReviewSection__title2">告訴我們你覺得它像的味道<br>@caffeinewithmike</div>
    </section>
    <section class="coffeeMoreInfoSection sectionSize">
      <!-- <div class="sectionBackground"></div> -->
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { reactive, ref } from 'vue'
export default {
  components: {
    Button
  },
  setup (props) {
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
