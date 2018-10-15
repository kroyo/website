<template>
  <nav class="site-header">
    <ul class="header-ul">
      <router-link class="logo" to="/home">
        <img width="36" height="36" src="http://www.daiwei.org/new/dw.png" title="" alt="">
      </router-link>
      <router-link to="/home">
        <li>首页</li>
      </router-link>
      <a href="http://www.daiwei.org/blog" target="_black">
        <li>博客</li>
      </a>
      <router-link to="/music">
        <li>音乐</li>
      </router-link>
      <router-link to="/about">
        <li>关于</li>
      </router-link>
      <router-link tag="a" to="/reward">
        <li>
          <span class="icon-reward" style="font-size: 16px;vertical-align:middle"></span>
          打赏
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.site-header{
  .header-ul{
    font-size: 0;
  }
  li{
    display: inline-block;
    font-size: 14px;
  }
}
</style>
