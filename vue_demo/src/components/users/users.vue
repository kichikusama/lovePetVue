<template>
  <div class="main">
    <el-container>
      <el-header>门店管理员列表</el-header>
      <el-main>
        <div>
          <div style="margin-top: 15px;">
            <el-input placeholder="搜索"  class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择搜索条件">
                <el-option label="姓名" value="1"></el-option>
                <el-option label="电话" value="2"></el-option>
                <el-option label="门店" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <el-table :data="rows" style="width: 100%;text-align:center;">
            <el-table-column prop="userName" label="姓名" width="150"></el-table-column>
            <el-table-column prop="userPhone" label="联系方式" width="150"></el-table-column>
            <el-table-column prop="userMail" label="邮箱" width="150"></el-table-column>
            <el-table-column label="门店">
              <el-table-column prop="" label="门店1" width="120"></el-table-column>
              <el-table-column prop="" label="门店2" width="120"></el-table-column>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
          
            :current-page="1"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";  // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users"   // 从状态机中获取 数据
);

export default {
  name: "Users",
  data() {
    return {
      tableData: [
        {
          userAcount: "mm", // 登录名
          userPhone: "13111882937", // 手机号
          userMail: "975011019@qq.com", // 邮箱
          userName: "goumin", // 姓名
          stores: ["爱宠帮-青羊店", "爱宠帮-万达店"] // 门店
        },
        {
          userAcount: "gg", // 登录名
          userPhone: "13111886789", // 手机号
          userMail: "325011019@qq.com", // 邮箱
          userName: "lisi", // 姓名
          stores: ["爱宠帮-双流店", "爱宠帮-龙泉店"] // 门店
        }
      ],
      select:'',  // 搜索条件
    };
  },
  watch: {
    eachPage() {
      //   console.log(eachPage);
      this.usersListAsync();
    },
    currentPage() {
      this.usersListAsync();
      //  console.log(currentPage);
    }
  },
  computed: {
    ...mapState(["rows", "totalPage", "count", "eachPage", "currentPage"])
    // eachPage: {
    //   get: mapState(["eachPage"]).eachPage,
    //   set: mapMutations(["setEachPage"]).setEachPage
    // },
    //  currentPage: {
    //   get: mapState(["currentPage"]).currentPage,
    //   set: mapMutations(["setCurrentPage"]).setCurrentPage
    // }
  },
  methods: {
    ...mapActions(["usersListAsync"]),
    ...mapMutations(["setEachPage", "setCurrentPage"])
    // pageChange(e) {
    //   // 修改 currentPage来更改数据的请求
    //   // console.log(e.target.value);
    //   this.setCurrentPage(e.target.value);
    //   this.usersListAsync();
    // }
    // clickCurrentPage(newPage){
    //   this.setCurrentPage(newPage);
    //   this.usersListAsync();
    // }
  },
  mounted() {
    // 生命周期函数
    this.usersListAsync();
    // console.log(this.films);

    //   console.log(this.a); // 这里拿不到a : undefind
    //   console.log(this); // this中 有a
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 70px;
}
.main {
  width: 80%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 380px; */
}
.el-select .el-input {
  width: 150px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>