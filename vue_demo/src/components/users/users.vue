<template>
  <div class="main">
    <h3>用户列表</h3>
    <el-container>
      <el-main>
        <div>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#C0C4CC"
            active-text-color="#ffd04b"
            text-color="#fff"
          >
            <!-- <el-menu-item index="1">新增用户</el-menu-item> -->
            <el-submenu index="2">
              <template slot="title">
                <span @mouseenter="auditing">处理中心</span>
              </template>
              <el-menu-item index="/management/auditing" @click="skipTo">
                待审核
                <b style="color:red;font-size:10px">+{{auditingUsers.length}}</b>
              </el-menu-item>
              <el-menu-item index="/management/disabledUsers" @click="skipToDisabled">违规用户</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
             
              <el-badge :value="rulesRead" class="iconItem">
                 <a href="#/management/someRules">管理须知</a>
              </el-badge>
            </el-menu-item>
          </el-menu>

          <div class="box-card" id="card">
            <el-dialog title="新增用户" :visible="isShow" center>
              <el-form label-width="100px" size="small" el-class="form-demo">
                <el-form-item label="城市">
                  <el-input formControlName="city"></el-input>
                </el-form-item>

                <!-- <el-form-item label="规格">
                  <el-cascader formControlName="spec"></el-cascader>
                </el-form-item>-->

                <el-form-item label="配送日期">
                  <el-date-picker formControlName="date"></el-date-picker>
                </el-form-item>

                <el-form-item label="配送方式">
                  <el-radio-group formControlName="express">
                    <el-radio label="eleme">蜂鸟配送</el-radio>
                    <el-radio label="shop">商家配送</el-radio>
                  </el-radio-group>
                </el-form-item>

                <el-form-item label="发票">
                  <el-checkbox formControlName="invoice">需要发票</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">提交</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <div style="margin-top: 15px;">
            <el-input placeholder="搜索" v-model="select" class="input-with-select">
              <el-select
                v-model="searchType"
                slot="prepend"
                placeholder="请选择搜索条件"
                style="width:150px"
              >
                <el-option label="姓名" value="userName"></el-option>
                <el-option label="电话" value="userPhone"></el-option>
                <el-option label="账号" value="userAcount"></el-option>
              </el-select>
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="searchUserAsync({searchType,select})"
              ></el-button>
            </el-input>
          </div>

          <el-table :data="rows" center="all" style="width: 100%;text-align:center;">
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="userName" label="姓名" width="100"></el-table-column>
            <el-table-column prop="userAcount" label="登录名" width="100"></el-table-column>
            <el-table-column prop="userPhone" label="联系方式" width="200"></el-table-column>
            <el-table-column prop="userMail" label="邮箱" width="200"></el-table-column>
            <el-table-column prop="againstTimes" label="违规数" width="100"></el-table-column>
            <el-table-column prop="userStatus" label="状态" width="100"></el-table-column>
            <!-- <el-table-column label="门店">
              <el-table-column prop label="门店1" width="120"></el-table-column>
              <el-table-column prop label="门店2" width="120"></el-table-column>
            </el-table-column>-->

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="usersIntroduce(scope.row)">查看详情</el-button>

                <el-button size="mini" type="danger" @click="deleteUserAsync(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            :current-page="currentPage-0"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="eachPage - 0"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count-0"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);

export default {
  name: "Users",
  data() {
    return {
      isShow: false, // 弹窗是否显示
      searchType: "",
      select: "", // 搜索条件
      user: {
        // 修改用户时需要的数据
        userAcount: "", // 登录名
        userPwd: "", // 密码
        userPhone: "", // 手机号
        userMail: "", // 邮箱
        userName: "", // 姓名
        userType: "1",
        userStatus: "1", // 申请中：0; 可用：1； 不可用：2；
        shopId: []
      }
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
    ...mapActions([
      "usersListAsync",
      "deleteUserAsync",
      "searchUserAsync",
      "auditingUsersAsync",
      "getShopsAsync",
      "disabledUsersAsync"
    ]),
    ...mapMutations([
      "setEachPage",
      "setCurrentPage",
      "handleUpdate",
      "setUsersIntroduce"
    ]), //,"handleDelete"

    usersIntroduce(userNow) {
      // 查看详情
      console.log(userNow);
      this.setUsersIntroduce(userNow); // 将 所点击用户的信息保存在状态机中
      this.getShopsAsync({ currentPage: 1, eachPage: 5, userId: userNow._id }); // 根据用户id获取门店信息
      this.$router.push({ path: `/management/usersIntroduce` }); // 跳转  /${userNow}
    },
    auditing() {
      // console.log("in");
      this.auditingUsersAsync(); // 请求 待审核 用户数据
    },
    skipTo() {
      this.$router.push({ path: `/management/auditing` }); // 跳转 审核 组件
    },
    skipToDisabled() {
      this.disabledUsersAsync();
      this.$router.push({ path: `/management/disabledUsers` }); // 跳转 违规用户 组件
    }
  },
  mounted() {
    // 生命周期函数
    this.usersListAsync({userStatus:"1"});  // 传参  状态为1，可用
    // console.log(this.films);
    //   console.log(this.a); // 这里拿不到a : undefind
    //   console.log(this); // this中 有a
  }
};
</script>
<style scope>
.iconItem{
  /* margin-top: -15px; */
  margin-right: 40px;
  /* top:17px; */

}
.el-badge__content{
  height: 14px;
  font-size: 4px;
} 
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