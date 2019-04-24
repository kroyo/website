<template>
  <div class="site-bgsection"
    :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}">
    <div class="mask-bg"></div>
  </div>
</template>

<script>
// import SetMaskType from './selectmask/selectmask.js'
export default {
  props: {
    imagepath: {
      type: String,
      default: 'http://daiwei.org/vue/bg/bg_45249923.jpg'
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
  computed: {
    
  }
}
</script>

<style lang="stylus" scoped>
.site-bgsection{
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  background-color: #000;
}
.mask-bg{
  width: 100%;
  height: 100%;
  background:-webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0) 10%, rgb(7, 17, 27) 90%);
  opacity: 0.9;
}
</style>
