<template>
  <div>
    <h3>处理中心</h3>
    <div>
      <el-table :data="auditingUsers" center="all" style="width: 100%;text-align:center;">
        <el-table-column type="index" label="序号" width="50"></el-table-column>

        <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
        <el-table-column prop="userAcount" label="登录名" width="100"></el-table-column>
        <el-table-column prop="userPhone" label="联系方式" width="130"></el-table-column>
        <el-table-column prop="userMail" label="邮箱" width="160"></el-table-column>
        <el-table-column prop="userType" label="角色" width="60"></el-table-column>
        <el-table-column prop="userStatus" label="状态" width="60"></el-table-column>
        <el-table-column label="门店">
          <el-table-column prop label="门店1" width="120"></el-table-column>
          <el-table-column prop label="门店2" width="120"></el-table-column>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" >审批</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);
export default {
  name: "Auditing",
   data() {
    return {
      user: {
        userAcount: "", // 登录名
        userPwd: "", // 密码
        userPhone: "", // 手机号
        userMail: "", // 邮箱
        userName: "", // 姓名
        userType: "1",
        userStatus: "1", // 申请中：0; 可用：1； 不可用：2；
        shopId: [],
      }
    };
  },
  computed: {
    ...mapState(["auditingUsers"])
  },
  methods: {
        // ...mapActions(["auditingUsersAsync"]),
  },
};
</script>
<style>
</style>