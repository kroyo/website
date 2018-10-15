<template>
  <div id="app">
    <nav-slider></nav-slider>
    <router-view/>
  </div>
</template>

<script>
import navSlider from './components/common/nav.vue'
export default {
  name: 'App',
  components: {
    navSlider
  }
}
</script>

<style lang="scss">
@import '@/common/css/reset.scss';
body{
  background-image: url('http://daiwei.org/vue/bg/bg_45249923.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
