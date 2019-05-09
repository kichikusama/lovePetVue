<template>
  <div style="width:100%;">
    <div style="margin-top: 15px;">
      <el-input placeholder="搜索" class="input-with-select" v-model="text">
        <el-select v-model="type" slot="prepend" placeholder="请选择搜索条件">
          <el-option label="名称" value="serviceName"></el-option>
          <el-option label="类别" value="serviceType"></el-option>
          <el-option label="服务员等级" value="serviceLevel"></el-option>
          <el-option label="服务规格" value="serviceDetial"></el-option>
        </el-select>
        <el-button slot="append" @click="getAllServiceAsync({type,text})" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="data" border style="width: 100%">
      <el-table-column fixed prop="serviceName" label="名称" width="140"></el-table-column>
      <el-table-column prop="serviceType" label="服务类别" width="140"></el-table-column>
      <el-table-column prop="serviceSchedule" label="排期" width="220"></el-table-column>
      <el-table-column prop="serviceCanFor" label="适用规格" width="100"></el-table-column>
      <el-table-column prop="serviceDetial" label="服务规格" width="140"></el-table-column>
      <el-table-column prop="serviceTime" label="耗时" width="140"></el-table-column>
      <el-table-column prop="serviceLevel" label="服务员等级" width="140"></el-table-column>
      <el-table-column prop="servicePrice" label="价格" width="140"></el-table-column>
      <el-table-column fixed="right" label="操作" width="110">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)" size="small">删除</el-button>
          <el-button type="text" @click="revise(scope.row)" size="small">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="setEachPage"
      @current-change="setCurPage"
      :current-page.sync="currentPage"
      :page-sizes="[5, 3, 1, ]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { MessageBox } from 'element-ui';
import { Message } from "element-ui";
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "service" // 从状态机中获取 数据
);
export default {
  name: "service",
  data() {
    return {
      type: "", 
      text: ""
    };
  },
  watch: {
    eachPage() {
      this.getAllServiceAsync();
    },
    currentPage() {
      this.getAllServiceAsync();
    }
  },
  computed: {
    ...mapState(["data", "total"]),
    eachPage: {
      get: mapState(["eachPage"]).eachPage,
      set: mapMutations(["setEachPage"]).setEachPage
    },
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setCurPage"]).setCurPage
    }
  },
  methods: {
    ...mapMutations(["setEachPage", "setCurPage"]),
    ...mapActions(["getServiceAsync", "getAllServiceAsync","deteleServiceAsync"]),
    handleClick(row) {
      this.deteleServiceAsync(row._id);
    }
  },
  mounted() {
    this.getAllServiceAsync();
  }
};
</script>