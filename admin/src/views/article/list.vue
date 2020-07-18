<template>
  <div class="app-container list-container">
    <div class="container-header">
      <el-button type="primary" size="small">添加文章</el-button>
      <div class="header-right">
        <el-form size="small">
          <el-form-item>
            <el-select v-model="category" placeholder="请选择文章分类">
              <el-option
                v-for="item in categorylist"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入关键词"
              v-model="keyword">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="name"
        label="文章标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="所属分类"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorylist: [],
      category: '',
      keyword: '',
      pageSize: 40,
      currentPage: 1,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="scss" scoped>
.container-header{
  margin-bottom: 10px;
  .header-right{
    float: right;
  }
}
</style>