<template>
  <div id="app">
    <div class="container">
      <site-bg></site-bg>
      <nav-slider></nav-slider>
      <transition name="fade">
        <keep-alive>
          <router-view class="site-content" :disc="disc" :date="date" />
        </keep-alive>
      </transition>
      <footer class="site-footer">
        Copyright &copy; 2019{{footerDate}} ZHONGLH.TOP
        <div class="bg-infor" v-if="routerName === 'home'">每日一图由 必应美图 提供</div>
      </footer>
    </div>
  </div>
</template>

<script>
import { apiBgImg } from './api/api.js'
import { setConsole } from './utils/tool.js'
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
      imagepath: 'http://www.bing.com//th?id=OHR.LavaFlows_ZH-CN4235925500_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      disc: '夏威夷火山国家公园，夏威夷 (© Grant Ordelheide/Tandem Stills + Motion)',
      date: '2019-08-01'
    }
  },
  computed: {
    // 获取当前router name
    routerName:function(){
      return this.$route.name;
    },
    // 网站制作时间计算
    footerDate() {
      let nowDate = new Date().getFullYear();
      if(nowDate > 2019) {
        return `~${nowDate}`
      }
      return ''
    }
  },
  mounted() {
    // this.getBgImg();
    setConsole('每行代码都是梦想的基石'); 
  },
  methods: {
    // 获取必应背景图片
    getBgImg() {
      apiBgImg().then(res => {
        // console.log(res);
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
.container{
  position: relative
  width: 80%
  height: 100%
  // min-width: 1240px
  min-width: 900px
  margin: 0 auto
  overflow: hidden
}
.site-footer{
  // position: absolute
  // bottom: 0
  position: relative
  width: 100%
  height: 40px
  line-height: 40px
  color: #fff
  font-size: 12px
  text-align: center
  .bg-infor{
    position: absolute
    top: 0
    right: 20px
  }
}
.site-content{
  height: auto
  min-height: calc(100% - 80px)
  font-size: 14px
  color: #fff
  padding: 20px 20px 5px
  &.fade-enter-to,&.fade-leave{
    opacity: 1
    transform: translate3d(0,0,0)
    transition: .8s all
  }
  &.fade-enter,&.fade-leave-to{
    opacity:0
    transform:translate3d(0,50px,0)
  }
}
</style>
