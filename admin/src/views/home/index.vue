<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Welcome to Your Backstage: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin-top: 100px;
  }
  &-text {
    font-size: 24px;
    line-height: 46px;
    text-align: center;
  }
}
</style>
