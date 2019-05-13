<template>
  <div>
    <h3>黑名单</h3>
    <div>
      <el-table :data="rows" center="all" style="width: 100%;text-align:center;">
        <el-table-column type="index" label="序号" width="100"></el-table-column>

        <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
        <el-table-column prop="userAcount" label="登录名" width="100"></el-table-column>
        <el-table-column prop="userPhone" label="联系方式" width="150"></el-table-column>
        <el-table-column prop="userMail" label="邮箱" width="160"></el-table-column>
        <el-table-column prop="userType" label="角色" width="130"></el-table-column>
        <el-table-column prop="userStatus" label="状态" width="130"></el-table-column>
        <el-table-column label="操作">
          <!-- <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="adoptAuditing(scope.row)">审批</el-button>
          </template> -->
        </el-table-column>
      </el-table>
      <el-alert style="
       position: absolute;
       width: 300px;
       height: 150px;
       top: 100px;
       right: 20px;
      "
        class="tipStyle"
        title=""
        type="info"
        description=" 用户违规超过三次后系统会自动将其拉入黑名单，届时该账号不可登录，其所有门店也将处于整治状态，不可营业。"
        show-icon
      ></el-alert>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);
export default {
  name: "BlackList",
   data() {
    return {
      
    };
  },
  computed: {
        ...mapState([
      "rows",
      "totalPage",
      "count",
      "eachPage",
      "currentPage",
      "auditingUsers",
      "rulesRead"
    ])
  },
  methods: {
        ...mapActions(["usersListAsync"]),
  },
   mounted() {
    // 生命周期函数
    this.usersListAsync({againstTimes:4});  // 传参  状态为1，可用
    // console.log(this.films);
    //   console.log(this.a); // 这里拿不到a : undefind
    //   console.log(this); // this中 有a
  }
};
</script>
<style>
</style>