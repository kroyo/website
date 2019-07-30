<template>
  <div id="app">
    <site-bg :imagepath="imagepath"></site-bg>
    <nav-slider></nav-slider>
    <transition name="fade">
      <keep-alive>
        <router-view class="fade-content" :disc="disc" :date="date" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { apiBgImg } from './api/api.js'
import navSlider from '@/components/nav.vue'
import siteBg from '@/components/sitebg.vue'

export default {
  name: 'App',
  components: {
    navSlider,
    siteBg
  },
  data() {
    return{
      imagepath: '',
      disc: '',
      date: ''
    }
  },
  created() {
    this.getBgImg();
  },
  methods: {
    // 获取必应背景图片
    getBgImg() {
      apiBgImg().then(res => {
        console.log(res);
        if(!res.data) {
          return;
        }
        this.imagepath = `http://www.bing.com/${res.data.url}`;
        this.disc = res.data.disc;
        this.date = new Date().Format('yyyy-MM-dd');
      })
    }
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
