<template>
  <div style="width:100%;">

    <el-table :data="data" border style="width: 100%">
      <el-table-column fixed prop="serviceName" label="名称" width="120"></el-table-column>
      <el-table-column prop="serviceType" label="服务类别" width="120"></el-table-column>
      <el-table-column prop="serviceSchedule" label="排期" width="180"></el-table-column>
      <el-table-column prop="serviceCanFor" label="适用规格" width="90"></el-table-column>
      <el-table-column prop="serviceDetial" label="服务规格" width="120"></el-table-column>
      <el-table-column prop="serviceTime" label="耗时" width="120"></el-table-column>
      <el-table-column prop="serviceLevel" label="服务员等级" width="120"></el-table-column>
      <el-table-column prop="servicePrice" label="价格" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template >
          <el-button type="text" size="big">更改</el-button>
          <el-button type="text" size="big">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      @size-change="setEachPage"
      @current-change="setCurrentPage"
      :current-page="currentPage-0"
      :page-sizes="[2, 3, 5, 10]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    ></el-pagination> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";  // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "service"   // 从状态机中获取 数据
);
export default {
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["getServiceAsync"]),
  },
  mounted(){
    this.getServiceAsync()
  },
};
</script>