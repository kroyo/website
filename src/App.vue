<template>
  <div id="app">
    <site-bg></site-bg>
    <nav-slider></nav-slider>
    <transition name="fade">
      <router-view class="fade-content" />
    </transition>
  </div>
</template>

<script>
import navSlider from '@/components/nav.vue'
import siteBg from '@/components/sitebg.vue'
export default {
  name: 'App',
  components: {
    navSlider,
    siteBg
  }
}
</script>

<style lang="stylus">
@import url('http://at.alicdn.com/t/font_875913_tga45ceo2nh.css');
@import './assets/style/reset.styl';
#app{
  width: 100%;
  height: 100%;
}
.fade-content
  transform:translate3d(0,0,0)
  transition: .8s all
  &.fade-enter-to,&.fade-leave-to
    transition: all 0.8s
  &.fade-enter,&.fade-leave-to
    opacity:0
    transform:translate3d(0,50px,0)
</style>
