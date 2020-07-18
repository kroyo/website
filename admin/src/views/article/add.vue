<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="category">
        <el-select v-model="form.category" multiple placeholder="请选择">
          <el-option
            v-for="item in categoryList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="content-wrapper">
          <mavon-editor v-model="form.content"/>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categoryList: [],
      form: {
        name: '',
        category: [],
        content: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入文章标题', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请选择文章所属分类', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style lang="scss" scoped>
.app-container{
  padding: 30px;
}
</style>