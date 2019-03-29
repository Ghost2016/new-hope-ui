// components/Test.vue
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props :{
    msg: {
      default: 'this is a test for new-hope-ui',
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>

</style>
