<template>
  <div class="btn">
    {{props.btnMsg}}
  </div>
</template>

<script>
export default {
  props: {
    btnMsg: {
      type: String,
      default: 'Click Me'
    }
  },
  setup (props) {
    return {
      props
    }
  }
}
</script>

<style>

</style>
