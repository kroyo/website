<template>
  <section class="div_content">
    <ul class="ul-header border-1px">
      <!-- pc 页面菜单 -->
      <div class="left-menu" v-show="getGlobalInfo.isHigher768">
        <router-link class="logo" tag="a" to="/home">
          <img width="36" height="36" src="http://www.daiwei.org/new/dw.png" title="时光浅滩的个人网站" alt="">
        </router-link>
        <router-link tag="a" to="/home">
          <li>首页</li>
        </router-link>
        <a href="http://www.daiwei.org/blog" target="_black">
          <li>博客</li>
        </a>
        <router-link tag="a" to="/music">
          <li>音乐</li>
        </router-link>
        <router-link tag="a" to="/about">
          <li>关于</li>
        </router-link>
        <router-link tag="a" to="/reward">
          <li>
            <span class="icon-reward" style="font-size: 16px;vertical-align:middle"></span>
            打赏
          </li>
        </router-link>
      </div>
        <!-- 移动端菜单按钮 -->
      <transition name="fade">
        <div class="fixed-fade-menu" ref="fixed_menu" :class="{ios: isIos}" v-show="showLeftMenu" @click="hideLeftContent">
          <div class="fixed-menu-content" @click="hideLeftContent">
            <router-link tag="a" to="/home">
            <li>首页</li>
            </router-link>
            <a href="http://www.daiwei.org/blog" target="_black">
              <li>博客</li>
            </a>
            <router-link tag="a" to="/music">
              <li>音乐</li>
            </router-link>
            <router-link tag="a" to="/about">
              <li>关于</li>
            </router-link>
            <a href="https://ifmiss.github.io/d-js-utils/" target="_black">
              <li>通用js</li>
            </a>
            <router-link tag="a" to="/reward">
              <li>
                <span class="icon-reward" style="font-size: 16px;vertical-align:middle"></span>
                打赏
              </li>
            </router-link>
          </div>
        </div>
      </transition>
      <div class="fixed-menu" v-show="!getGlobalInfo.isHigher768" @click="toggleMenuContent">
        <i class="icon-menu"></i>
      </div>
      <!-- pc 移动端设置按钮 -->
      <div class="right-menu">
        <router-link v-if="getUserInfo !== null" class="listmenu" tag="a" to="/user/info">
          {{getUserInfo.nickname === '' ? (getUserInfo.username === '' ? '点击设置用户名' : getUserInfo.username) : getUserInfo.nickname}}
        </router-link>
        <router-link v-else class="listmenu" tag="a" to="/user/login">
          登陆
        </router-link>
        <a href="https://www.github.com/ifmiss/vue-website" target="_black">
          <li class="li-icon" title="github"><i class="icon-github"></i></li>
        </a>
        <router-link tag="a" to="/setting" class="a-icon">
          <li class="li-icon" title="设置" @click="hideLeftContent"><i class="icon-setting"></i></li>
        </router-link>
      </div>
    </ul>
    <transition name="fade">
      <keep-alive>
        <router-view class="li_list"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
