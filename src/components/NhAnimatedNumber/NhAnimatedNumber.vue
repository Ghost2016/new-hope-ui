<template>
  <div class="nh-animated-number">
    <animated-number
      :value="value"
      :formatValue="formatValue"
      :duration="duration"
      :easing="easing"
      v-bind="$attrs"
    />
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name: 'nh-animated-number',
  components: {
    AnimatedNumber
  },
  props: {
    value: {
      default: 0,
      type: Number
    },
    formatValue: {
      default: (value) => {
        return value.toFixed(0)
      },
      type: Function
    },
    duration: {
      default: 2000,
      type: Number
    },
    easing: {
      default: 'easeOutQuad',
      type: String | Function
    }
  }
}
</script>
<style lang="scss" scoped>
.animated-number-wrapper {
  display: inline-block;
}
</style>
