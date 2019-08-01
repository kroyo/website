<template>
  <section class="home">
    <div class="home-content">
      <h1 class="title">
        <span class="text" v-if="title">{{title}}</span>
        <span class="date">{{date}}</span>
      </h1>
      <p class="disc">{{disc}}</p>
    </div>
  </section>
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
  }
}
</script>

<style lang="stylus" scoped>
.home{
  // position: fixed;
  // top: 0;
  // left: 0;
  // bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
}
.home-content{
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
</style>
