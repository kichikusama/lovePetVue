<template>
  <div>
    <h3>处理中心-违规</h3>
    <div>
      <el-table
        :data="disabledUsers"
        center="all"
        :row-class-name="tableRowClassName"
        style="width: 100%;text-align:center;"
      >
        <el-table-column type="index" label="序号" width="100"></el-table-column>

        <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
        <el-table-column prop="userAcount" label="登录名" width="100"></el-table-column>
        <el-table-column prop="userPhone" label="联系方式" width="150"></el-table-column>
        <el-table-column prop="userMail" label="邮箱" width="160"></el-table-column>
        <el-table-column prop="againstReason[index].reason" label="违规原因" width="130">
          <template slot-scope="scope">
            <a
              href="#"
              size="mini"
              type="primary"
              circle
              class="aStyle"
              icon="el-icon-search"
              @click.prevent="member(scope.row.againstReason)"
            >详情</a>
          </template>
        </el-table-column>
        <el-table-column prop="againstTimes" label="违规数" width="100"></el-table-column>
        <el-table-column prop="userStatus" label="状态" width="130"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="adoptAuditing(scope.row)">解禁</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="违规详情" :visible.sync="dialog" style="text-align:center">
        <el-table :data="members">
          <el-table-column type="index" label="次数" width="100"></el-table-column>
          <el-table-column property="reason" label="违规原因" width="200"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);
export default {
  name: "Disabled",
  data() {
    return {
      arr: [],
      dialog: false, // dialog 是否显示
      members: [] // 违规数据
      //   user: {
      //     userAcount: "", // 登录名
      //     userPwd: "", // 密码
      //     userPhone: "", // 手机号
      //     userMail: "", // 邮箱
      //     userName: "", // 姓名
      //     userType: "1",
      //     userStatus: "1", // 申请中：0; 可用：1； 不可用：2；
      //   }
    };
  },
  computed: {
    ...mapState(["disabledUsers"])
  },
  methods: {
    ...mapActions(["adoptUsersAsync"]),
    member(data) {
      this.dialog = true;
      this.members = data;
    }, //查看店铺成员
    adoptAuditing(updeteUser) {
      this.adoptUsersAsync({ _id: updeteUser._id, userStatus: "1" });
      // console.log(updeteUser);
    },
    tableRowClassName({ row }) {
      if (row.againstTimes > 2) {
        return "warning-row";
      }
      // else if (row.againstTimes > 1) {
      //   return 'care-row';
      // }
      return "";
    },
    filterReason() {
      console.log(this.disabledUsers);

      // this.arr = this.disabledUsers.againstReason;
      // console.log(this.arr);
    }
  },
  mounted() {
    // this.filterReason();
  }
};
</script>
<style>
.aStyle:hover {
  color: tomato;
  cursor: pointer;
}
.warning-row {
  color: red;
  background-color: pink;
}
.care-row {
  color: pink;
}
</style>