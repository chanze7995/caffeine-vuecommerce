<template>
  <div :class="['homeBannerSection',{open:isMobileMenuOpen}]">
    <div class="homeBannerSection__content">
      <div class="homeBannerSection__content__textBox">
        <h1>咖啡與你的故事</h1>
        <p>為您量身定制<br>完美、確實且新鮮烘培的咖啡。<br>符合社會與環境責任，追蹤麥克咖啡因。</p>
      </div>
      <div class="homeBannerSection__content__img">
        <img src="@/assets/img/coffeeDoddle.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      deault: false
    }
  },
  setup (props) {
    return {
      props
    }
  }
}

</script>
<style scoped lang="scss">

</style>
