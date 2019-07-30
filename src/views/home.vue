<template>
  <main class="home">
    <section class="home-center">
      <h1 class="title">
        <span class="text" v-if="title">{{title}}</span>
        <span class="date">{{date}}</span>
      </h1>
      <p class="disc">{{disc}}</p>
    </section>
    <footer class="home-footer">
       Copyright &copy; 2019{{footerDate}}  ZHONGLH.TOP
       <div class="bg-infor">每日一图由 必应美图 提供</div>
    </footer>
  </main>
</template>

<script>
export default {
  props: {
    disc: String,
    date: String
  },
  data() {
    return {
      title: '',
    }
  },
  computed: {
    // 网站制作时间计算
    footerDate() {
      let nowDate = new Date().getFullYear();
      if(nowDate > 2019) {
        return `~${nowDate}`
      }
      return ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.home{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
}
.home-center{
  display: flex;
  max-width: 1240px;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 80px 50px;
  .title{
    line-height: 60px;
    font-size: 22px;
    color: #fff;
    .text{
      margin-right: 20px;
    }
    .date{
      font-size: 14px;
      font-weight: 400;
    }
  }
  .disc{
    line-height: 40px;
    font-size: 14px;
    color: #fff;
  }
}
.home-footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  .bg-infor{
    position: absolute;
    top: 0;
    right: 20px;
  }
}
</style>
