<template>
  <div class="productMenu">
    <ul class="mainMenuContainer">
      <li>
        <router-link :to="{name:'Shop'}" @click="pathChangeClick('all')">全部商品</router-link>
      </li>
      <li>
        <router-link :to="{name:'Shop'}" @click="pathChangeClick('bean')">咖啡豆</router-link>
        <ul class="subMenuContainer">
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('single')">精品單一莊園</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('mix')">混合</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('light')">淺烘培</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('medium')">中烘培</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('dark')">深烘培</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('subscription')">訂閱咖啡</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{name:'Shop'}" @click="pathChangeClick('all')">咖啡生活</router-link>
        <ul class="subMenuContainer">
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('subscription')">沖煮設備</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('subscription')">濾杯</router-link>
          </li>
          <li>
            <router-link :to="{name:'Shop'}" @click="pathChangeClick('subscription')">濾材</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>
