<template>
  <section class="blog">
    <article class="article section-bg" id="article">

    </article>
    <aside class="sidebar">
      <section class="category section-bg">
        <h4><i class="el-icon-collection-tag"></i>分类</h4>
      </section>
    </aside>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.blog{
  display: flex
}
.section-bg{
  border-radius: 4px
  background-color: rgba(255,255,255,.4)
}
.article{
  flex: 7
}
.sidebar{
  flex: 2
  margin-left: 25px
  .category{
    min-height: 300px
    padding: 0 15px
  }
}
</style>