<template>
  <div>
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
import { NhAnimatedNumber, NhRow  } from '../../index.js'
export default {
  components: {
    NhAnimatedNumber,
    NhRow
  }
}
</script>
