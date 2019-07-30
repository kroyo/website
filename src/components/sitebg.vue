<template>
  <div ref="maskbg" class="site-bgsection"
    :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}">
    <div class="mask-bg"></div>
  </div>
</template>

<script>
// import SetMaskType from './selectmask/selectmask.js'
import { apiBgImg } from '../api/api.js'
import { addClass, removeClass } from '../utils/dom.js'

export default {
  props: {
    imagepath: {
      type: String,
      default: '@/assets/images/bg-default.jpg'
    },
    maskcolor: {
      type: String,
      default: 'transparent'
    },
    maskopacity: {
      type: String,
      default: '0.5'
    },
    masktype: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      imagesize: 'cover',
      imageposition: 'center center',
      moveBg: true,
      alpha: '',
      beta: '',
      gamma: ''
    }
  },
  updated() {
    this.$nextTick(() => {
      this.loadimgTrans()
    })
  },
  methods: {
    loadimgTrans() {
      addClass(this.$refs.maskbg, 'load')
      let img = new Image()
      img.src = this.imagepath
      img.onload = () => {
        removeClass(this.$refs.maskbg, 'load')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
$color_deep_gray = #222;
.site-bgsection{
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  background-color: #000;
  transition: all .4s
  &:before{
    content: ''
    position:absolute
    top: 0
    left: 0
    right: 0
    bottom:0
    background-color: $color_deep_gray
    opacity: 0
    visibility:hidden
    transition: all 0.4s
  }
  &.load{
    &:before{
      content: ''
      position:absolute
      top: 0
      left: 0
      right: 0
      bottom:0
      opacity: 1
      visibility:visible
      background-color: $color_deep_gray
    }
  }
}
.mask-bg{
  width: 100%;
  height: 100%;
  background:-webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0) 10%, rgb(7, 17, 27) 90%);
  opacity: 0.9;
}
</style>
