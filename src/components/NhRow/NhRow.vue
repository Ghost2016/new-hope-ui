<template>
  <component 
    v-bind="$attrs"
    v-bind:is="tag"
    class="nh-row" 
    :class="[`justify-${justify} align-${align}`]"
    :style="style">
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'NhRow',
  props: {
    // 栅格间隔
    gutter: {
      type: Number,
      default: 0
    },
    // 布局模式 flex
    type:	String,
    // flex 布局下的水平排列方式
    // start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'start'
    },
    // flex 布局下的垂直排列方式
    // top/middle/bottom
    align: {
      type: String,
      default: 'top'
    },
    // 输入的可选标签
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },
}
</script>