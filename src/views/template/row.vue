<template>
  <div class="nh-row-template">
    <nh-row tag="div">render as div</nh-row>
    <nh-row tag="p">render as p</nh-row>
    <nh-row type="flex" justify="center">flex justify-center</nh-row>
    <nh-row type="flex" align="center" style="height: 100px;">flex align-center</nh-row>
    <nh-row type="flex" justify="center" align="center" style="height: 100px;">flex justify-center align-center</nh-row>
    <nh-row :gutter="16">gutter 16</nh-row>
  </div>
</template>
<script>
import { NhRow  } from '../../../index.js'
export default {
  components: {
    NhRow
  },
  props: {
    
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
  .nh-row-template {
    .nh-row {
      &:nth-child(2n+1) {
        background: #ddd;
      }
      &:nth-child(2n) {
        background: #888;
      }
    }
  }
</style>