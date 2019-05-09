<template>
  <el-container>
    <el-header style="text-align: center; background-color: #B3C0D1;">
      <h1>宠主列表</h1>
    </el-header>

    <el-main>
      <div>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="图片" width="150"></el-table-column>
          <el-table-column prop="zip" label=" 品称" width="120"></el-table-column>
          <el-table-column prop="name" label="种类" width="120"></el-table-column>
          <el-table-column prop="province" label="颜色" width="120"></el-table-column>
          <el-table-column prop="city" label="出生日期" width="120"></el-table-column>
          <el-table-column prop="address" label="规格" width="300"></el-table-column>
          <el-table-column prop="zip" label="性格" width="120"></el-table-column>
          <el-table-column prop="zip" label="体重" width="120"></el-table-column>

          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("pets");
export default {
  computed: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["handleClick", "mounted","getPetsByPage"])
  },
  mounted(){
    this.getPetsByPage()
  }
};
</script>
