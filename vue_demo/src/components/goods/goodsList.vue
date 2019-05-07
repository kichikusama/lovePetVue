<template>
  <div style="width:90%;padding:20px">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="goodsName" label="名称" width="150"></el-table-column>
      <el-table-column prop="goodsType" label="品类" width="120"></el-table-column>
      <el-table-column prop="goodsMaterial" label="材质" width="120"></el-table-column>
      <el-table-column prop="goodsCanFor" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="goodsOnlyFor" label="专属规格" width="120"></el-table-column>
      <el-table-column prop="goodsSize" label="包装规格" width="120"></el-table-column>
      <el-table-column prop="goodsTaste" label="口味" width="120"></el-table-column>
      <el-table-column prop="goodsSpecial" label="特殊功能" width="120"></el-table-column>
      <el-table-column prop="goodsRegion" label="产地" width="120"></el-table-column>
      <el-table-column prop="goodsDate" label="出产日期" width="120"></el-table-column>
      <el-table-column prop="goodsTime" label="保质期" width="120"></el-table-column>
      <el-table-column prop="goodsSupplier" label="供应商" width="120"></el-table-column>
      <el-table-column prop="goodsIntro" label="特色说明" width="300"></el-table-column>
      <el-table-column prop="goodsPrice" label="价格" width="120"></el-table-column>
      <el-table-column fixed="goodsImg" label="包装" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      @size-change="setEachPage"
      @current-change="setCurrentPage"
      :current-page="currentPage-0"
      :page-sizes="[2,4,6,8,10]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></el-pagination> -->
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
};
</script>