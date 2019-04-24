<template>
  <main class="home">
    <section class="home-center">
      <h1 class="title">
        又是一年重阳日
        <span>2018-10-17</span>
      </h1>
      <p class="disc">想到重阳节也许你脑海中第一个浮现的就是老人，对于大多数中国家庭来讲</p>
    </section>
    <footer class="home-footer">
       Copyright &copy; 2018~{{ new Date().getFullYear() }}  ZHONGLH.TOP
       <div class="bg-infor">每日一图由 时光浅滩 提供</div>
    </footer>
  </main>
</template>

<script>
export default {}
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
    span{
      font-size: 14px;
      font-weight: 400;
      margin-left: 20px;
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
