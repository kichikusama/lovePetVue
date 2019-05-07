<template>
<div>
  <el-autocomplete
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
></el-autocomplete>

  <el-table
    :data="service"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="serviceName"
      label="名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceType"
      label="服务类别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceSchedule"
      label="排期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceCanFor"
      label="适用规格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceDetial"
      label="服务规格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceTime"
      label="耗时"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serviceLevel"
      label="服务员等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="servicePrice"
      label="价格"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">更改</el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        service: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>