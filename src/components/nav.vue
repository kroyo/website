<template>
  <nav class="site-header">
    <ul class="header-ul">
      <router-link class="logo" to="/home">
        <img width="36" height="36" src="http://www.daiwei.org/new/dw.png" title="遗留的时光 | 个人网站" alt="遗留的时光">
      </router-link>
      <router-link to="/home" :class="{'link-active':routerName=='home'}">
        <li>首页</li>
      </router-link>
      <router-link to="/blog" :class="{'link-active':routerName=='blog'}">
        <li>博客</li>
      </router-link>
      <router-link to="/course" :class="{'link-active':routerName=='course'}">
        <li>历程</li>
      </router-link>
      <router-link to="/about" :class="{'link-active':routerName=='about'}">
        <li>关于</li>
      </router-link>
      <router-link to="/reward" :class="{'link-active':routerName=='reward'}">
        <li>
          <i class="iconfont icon-reward"></i>
          打赏
        </li>
      </router-link>
    </ul>
    <div class="header-right">
      <a href="https://github.com/kroyo/website" target="_black">
        <span class="li-icon" title="github"><i class="iconfont icon-github"></i></span>
      </a>
      <router-link tag="a" to="/setting" class="a-icon" :class="{'link-active':routerName=='setting'}">
        <span class="li-icon" title="设置"><i class="iconfont icon-setting"></i></span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  created(){
    
  },
  computed:{
    // router 模块   link-active时使用
    routerName:function(){
      return this.$route.name;
    }
  }
}
</script>

<style lang="stylus" scoped>
// $theme-color = #409EFF;
$theme-color = #b3dc39;
.site-header{
  position:relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  z-index: 1;
}
.header-ul{
  height: 100%;
  font-size: 0;
  padding: 0 20px;
  a{
    display: inline-block;
    height: 100%;
    font-size: 14px;
    color: #fff;
    padding: 0 14px;
    cursor: pointer;
    transition: .4s all;
    &:hover,&.link-active{
      color: $theme-color;
      li:after{
        transform: scale(1,1);
      }
    }
  }
  li{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    &:after{
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      content: '';
      width: 100%;
      height: 2px;
      background-color: $theme-color;
      transform: scale(0,1);
      transform-origin: center;
      transition: .4s all;
    }
  }
  img{
    vertical-align: middle;
  }
  .logo{
    padding-left: 0;
  }
}
.header-right{
  position: absolute;
  top: 0;
  right: 10px;
  height: 40px;
  font-size: 0;
  a{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    cursor: pointer;
    span{
      line-height: 40px;
    }
    i{
      font-size: 20px;
    }
  }
}
</style>
