<template>
  <div>
    <h3>处理中心-待审核</h3>
    <div>
      <el-table :data="auditingUsers" center="all" style="width: 100%;text-align:center;">
        <el-table-column type="index" label="序号" width="100"></el-table-column>

        <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
        <el-table-column prop="userAcount" label="登录名" width="100"></el-table-column>
        <el-table-column prop="userPhone" label="联系方式" width="150"></el-table-column>
        <el-table-column prop="userMail" label="邮箱" width="160"></el-table-column>
        <el-table-column prop="userType" label="角色" width="130"></el-table-column>
        <el-table-column prop="userStatus" label="状态" width="130"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="adoptAuditing(scope.row)">审批</el-button>
          </template>
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
        description=" 平台管理员拥有对新注册用户审批的权限，审批通过后用户拥有开店及营业功能，点击‘审批’；如果此人和你有仇，可拒绝审批。"
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
        
      }
    };
  },
  computed: {
    ...mapState(["auditingUsers"])
  },
  methods: {
        ...mapActions(["adoptUsersAsync"]),
        adoptAuditing(updeteUser){
          this.adoptUsersAsync({_id:updeteUser._id,userStatus:"1"});
          // console.log(updeteUser);         
        }
  },
};
</script>
<style>
</style>