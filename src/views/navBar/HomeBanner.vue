<template>
  <banner :class="['homeBanner',{open:isActive}]">
    <div class="homeBanner__content">
      <div class="homeBanner__content__textBox">
        <h1>咖啡與你的故事</h1>
        <p>為您量身定制<br>完美、確實且新鮮烘培的咖啡。<br>符合社會與環境責任，追蹤麥克咖啡因。</p>
      </div>
      <div class="homeBanner__content__img">
        <img src="@/assets/img/coffeeDoddle.svg" alt="">
      </div>
    </div>
  </banner>
</template>
<script>
export default {
  name: 'Homebanner',
  props: ['isActive']
}

</script>
