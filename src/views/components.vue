<template>
  <div>
    <div>
      <p>NhAnimatedNumber组件:</p>
      <nh-animated-number value="24"></nh-animated-number>
    </div>
    <div>
      <p>NhRow组件:</p>
      <row-template></row-template>
    </div>
  </div>
</template>
<script>
import { NhAnimatedNumber, NhRow  } from '../../index.js'
import RowTemplate from './template/row'
export default {
  components: {
    NhAnimatedNumber,
    RowTemplate
  }
}
</script>
