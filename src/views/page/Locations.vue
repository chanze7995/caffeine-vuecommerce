<template>
  <section class="storeBannerSection">
    <video src="@/assets/img/coffeeStore.mp4" muted loop autoplay class="storeBannerSection__video"></video>
    <div class="storeBannerSection__content">
      <div class="storeBannerSection__content__title">門市</div>
      <div class="storeBannerSection__content__text">蒞臨參觀您附近的Caffiene with Mike咖啡館，<br>品嚐美味的咖啡和食物，舉辦教育研討會等。</div>
    </div>
  </section>
  <section class="storeLocationSection">
    <div class="storeLocationContainer">
      <div class="storeLocationCard">
          <div class="storeLocationCard__background">
              <img src="@/assets/img/cafe/cafe0.jpg" alt="十字街市場" class="storeLocationCard__background__pic">
          </div>
          <div class="storeInfoContent">
              <h3>十字街市場</h3>
              <p>我們的十字街市場咖啡館附近是歷史悠久的公共市場之一，在自然光線下沐浴，使之遠離都市生活的喧囂。品嚐我們的一種季節性招牌飲品放鬆身心，或拜訪市場內的鄰居前在此休息。</p>
          </div>
      </div>
      <div class="storeLocationCard">
          <div class="storeLocationCard__background">
              <img src="@/assets/img/cafe/cafe1.jpg" alt="海港角" class="storeLocationCard__background__pic">
          </div>
          <div class="storeInfoContent">
              <h3>海港角</h3>
              <p>海港角提供風景的咖啡。這間咖啡廳的落地窗可俯瞰海港和標誌性的建築，既時尚又誘人。除了我們的招牌咖啡和咖啡館菜單之外，我們還增加了生啤酒，葡萄酒和小批量雞尾酒。因此，您幾乎永遠都不必離開。</p>
          </div>
      </div>
      <div class="storeLocationCard">
          <div class="storeLocationCard__background">
              <img src="@/assets/img/cafe/cafe2.jpg" alt="貝塞斯達新月" class="storeLocationCard__background__pic">
          </div>
          <div class="storeInfoContent">
              <h3>貝塞斯達新月</h3>
              <p>在此與朋友見面，讀書或研究您的商業計劃。這是一家明亮且通風的咖啡館，以創造力和藝術聞名的歷史街區文青們的最愛聚集地，並且是社區和合作中心的常年樞紐。</p>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const storeInfoCardMsgArr = reactive([
      {
        title: '十字街市場',
        pic: '@/assets/img/cafe/cafe0.jpg',
        text: '我們的十字街市場咖啡館附近是歷史悠久的公共市場之一，在自然光線下沐浴，使之遠離都市生活的喧囂。品嚐我們的一種季節性招牌飲品放鬆身心，或拜訪市場內的鄰居前在此休息。'
      },
      {
        title: '海港角',
        pic: '@/assets/img/cafe/cafe1.jpg',
        text: '海港角提供風景的咖啡。這間咖啡廳的落地窗可俯瞰海港和標誌性的建築，既時尚又誘人。除了我們的招牌咖啡和咖啡館菜單之外，我們還增加了生啤酒，葡萄酒和小批量雞尾酒。因此，您幾乎永遠都不必離開。'
      },
      {
        title: '貝塞斯達新月',
        pic: '@/assets/img/cafe/cafe2.jpg',
        text: '在此與朋友見面，讀書或研究您的商業計劃。這是一家明亮且通風的咖啡館，以創造力和藝術聞名的歷史街區文青們的最愛聚集地，並且是社區和合作中心的常年樞紐。'
      }
    ])
    return {
      storeInfoCardMsgArr
    }
  }

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/page/_location.scss';
</style>
