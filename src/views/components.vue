<template>
  <div>
    <div>
      <p>Test组件:</p>
      <test msg="1"></test>
    </div>
    <div>
      <p>NhAnimatedNumber组件:</p>
      <nh-animated-number value="24"></nh-animated-number>
    </div>
  </div>
</template>
<script>
import { Test, NhAnimatedNumber  } from '../../index.js'
export default {
  components: {
    Test,
    NhAnimatedNumber
  }
}
</script>
<style lang="scss" scoped>

</style>
