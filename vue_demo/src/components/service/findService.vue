<template>
  <div>
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>

    <el-table :data="service" border style="width: 100%">
      <el-table-column fixed prop="serviceName" label="名称" width="120"></el-table-column>
      <el-table-column prop="serviceType" label="服务类别" width="120"></el-table-column>
      <el-table-column prop="serviceSchedule" label="排期" width="120"></el-table-column>
      <el-table-column prop="serviceCanFor" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="serviceDetial" label="服务规格" width="120"></el-table-column>
      <el-table-column prop="serviceTime" label="耗时" width="120"></el-table-column>
      <el-table-column prop="serviceLevel" label="服务员等级" width="120"></el-table-column>
      <el-table-column prop="servicePrice" label="价格" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">更改</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";  // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "service"   // 从状态机中获取 数据
);
export default {
  watch: {
    eachPage() {
      this.getServiceByPageAsync();
    },
    currentPage() {
      this.getServiceByPageAsync();
    }
  },
  computed: {
    ...mapState(["eachPage", "currentPage", "totalPage", "count", "films"])
  },
  methods: {
    ...mapActions(["getServiceByPageAsync"]),
    ...mapMutations(["setEachPage", "setCurrentPage"])
  },
  mounted() {
    this.getServiceByPageAsync();
  },

  data() {
    return {
      service: [
        {
          serviceName: "修爪",
          serviceType: "宠物造型",
          serviceSchedule: "2019.5.7-14:45",
          serviceCanFor: "幼犬",
          serviceDetial: "精修",
          serviceTime: "20min",
          serviceLevel: "S",
          servicePrice: "50￥"
        },
        {
          serviceName: "修爪",
          serviceType: "宠物造型",
          serviceSchedule: "2019.5.7-14:45",
          serviceCanFor: "幼犬",
          serviceDetial: "精修",
          serviceTime: "20min",
          serviceLevel: "S",
          servicePrice: "50￥"
        },
        {
          serviceName: "修爪",
          serviceType: "宠物造型",
          serviceSchedule: "2019.5.7-14:45",
          serviceCanFor: "幼犬",
          serviceDetial: "精修",
          serviceTime: "20min",
          serviceLevel: "S",
          servicePrice: "50￥"
        },
        {
          serviceName: "修爪",
          serviceType: "宠物造型",
          serviceSchedule: "2019.5.7-14:45",
          serviceCanFor: "幼犬",
          serviceDetial: "精修",
          serviceTime: "20min",
          serviceLevel: "S",
          servicePrice: "50￥"
        }
      ]
    };
  }
};
</script>