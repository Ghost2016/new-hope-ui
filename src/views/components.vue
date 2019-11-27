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
    <div>
      <p>NhRow组件:</p>
      <nh-row tag="a">这是row</nh-row>
    </div>
  </div>
</template>
<script>
import { Test, NhAnimatedNumber, NhRow  } from '../../index.js'
export default {
  components: {
    Test,
    NhAnimatedNumber,
    NhRow
  }
}
</script>
<style lang="scss" scoped>

</style>
