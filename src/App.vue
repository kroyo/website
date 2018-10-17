<template>
  <div id="app">
    <site-bg></site-bg>
    <nav-slider></nav-slider>
    <router-view/>
  </div>
</template>

<script>
import navSlider from './components/common/nav.vue'
import siteBg from './components/common/sitebg.vue'
export default {
  name: 'App',
  components: {
    navSlider,
    siteBg
  }
}
</script>

<style lang="scss">
@import url('http://at.alicdn.com/t/font_875913_tga45ceo2nh.css');
@import '@/common/css/reset.scss';
#app{
  width: 100%;
  height: 100%;
}
</style>
