<template>
  <div el-container direction="vertical" class="demo-box">
    <div el-header style="width:100%;height:62px">
      <h2>用户详情</h2>
    </div>
    <div el-main style="width:100%;background-color:rgb(215, 222, 236);position:relative">
      <div style="width:300px;">
        <i class="istyle el-icon-custom"></i>
        <br>
        <span>
          姓名：
          <b>{{usersIndroduce.userName}}</b>
        </span>
        <br>
        <span>ID:{{usersIndroduce._id}}</span>
      </div>
      <div class="box1">
        <div class="shop">
          <el-button @click="show1 = !show1">门店</el-button>
          <div>
            <el-collapse-transition>
              <div v-show="show1">
                <div class="transition-box">
                  <el-table :data="usersIndroduce.shopId" style="width: 500px;">
                    <el-table-column prop="shopName" label="名称" width="80"></el-table-column>
                    <el-table-column prop="shopLicenceNum" label="营业执照号码" width="80"></el-table-column>
                    <el-table-column prop="shopAdd" label="营业地址" width="80"></el-table-column>
                    <el-table-column prop="shopCommission" label="佣金比例" width="80"></el-table-column>
                    <el-table-column prop="shopCorporate" label="法人" width="80"></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <div class="goods">
          <el-button @click="show2 = !show2">商品</el-button>
          <div>
            <el-collapse-transition>
              <div v-show="show2">
                <div class="transition-box">
                  <el-table :data="usersIndroduce.goodsId" style="width: 100%;">
                    <el-table-column prop="goodsName" label="名称" width="80"></el-table-column>
                    <el-table-column prop="goodsType" label="品类" width="80"></el-table-column>
                    <el-table-column prop="goodsPrice" label="价格" width="80"></el-table-column>
                    <el-table-column prop label="商品种类" width="80"></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <div class="service">
          <el-button @click="show3 = !show3">服务</el-button>
          <div>
            <el-collapse-transition>
              <div v-show="show3">
                <div class="transition-box">
                  <el-table :data="usersIndroduce.serviceId" style="width: 100%">
                    <el-table-column prop="serviceName" label="服务名称" width="80"></el-table-column>
                    <el-table-column prop="serviceType" label="服务类型" width="80"></el-table-column>
                    <el-table-column prop="servicePrice" label="价格" width="80"></el-table-column>
                    <el-table-column prop label="种类统计" width="80"></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <div class="pet">
          <el-button @click="show4 = !show4">宠物</el-button>
          <div>
            <el-collapse-transition>
              <div v-show="show4">
                <div class="transition-box">
                  <el-table :data="usersIndroduce.petId" style="width: 100%">
                    <el-table-column prop="petsSpecies" label="品种" width="80"></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
      </div>
      <div class="menu">
        <el-dropdown>
          <span class="el-dropdown-link">
            设置
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >
                  <a  @click="show()">修改</a>
            </el-dropdown-item>
            <el-dropdown-item>
                  <a  >删除用户</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      
      </div>
      <div>
        <el-dialog title="修改用户信息" :visible="isShow">
          <el-form formGroup="validateForm" inline size="small">
            <el-form-item label="昵称">
              <el-input v-model="usersIndroduce.userAcount" disabled></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input value="******" disabled></el-input>
            </el-form-item>
          </el-form>
          <el-form formGroup="validateForm" inline size="small">
            <el-form-item label="姓名">
              <el-input v-model="usersIndroduce.userName" disabled></el-input>
            </el-form-item>

            <el-form-item label="角色">
              <el-input v-model="usersIndroduce.userType" disabled></el-input>
            </el-form-item>
          </el-form>
          <el-form formGroup="validateForm" inline size="small">
            <el-form-item label="手机">
              <el-input v-model="usersIndroduce.userPhone" disabled></el-input>
            </el-form-item>

            <el-form-item label="邮箱">
              <el-input v-model="usersIndroduce.userMail" disabled></el-input>
            </el-form-item>
          </el-form>
          <el-form>
            <el-form-item label="状态" label-width="120">
              <el-radio-group v-model="usersIndroduce.userStatus">
                <el-radio :label="0">申请中</el-radio>
                <el-radio :label="1">已审批</el-radio>
                <el-radio :label="2">未审批</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <el-form inline>
            <el-form-item label="门店">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <el-form inline>
            <el-form-item label="商品">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <el-form inline>
            <el-form-item label="服务">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <el-form inline>
            <el-form-item label="宠物">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <el-form formGroup="validateForm" inline size="small">
            <el-form-item>
              <el-button type="primary">确认修改</el-button>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="isShow=!isShow">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; // 命名空间辅助函数
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "users" // 从状态机中获取 数据
);

export default {
  name: "UsersIntroduce",
  data() {
    return {
      currentDate: new Date(),
      dialogTableVisible: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      isShow: false
    };
  },
  watch: {},
  computed: {
    ...mapState([
      "rows",
      "totalPage",
      "count",
      "eachPage",
      "currentPage",
      "usersIndroduce"
    ])
  },
  methods: {
    ...mapActions(["usersListAsync", "deleteUserAsync"]),
    ...mapMutations([
      "setEachPage",
      "setCurrentPage",
      "handleUpdate",
      "setUsersIntroduce"
    ]), //,"handleDelete"
    shopclick(e) {
      console.log(e);
    },
    show() {
      this.isShow = !this.isShow;
      // console.log(rows);
      //   Object.assign(this.user, rows); // 更新 data中的user信息
      // console.log(this.user.userAcount);
    }
  },
  mounted() {}
};
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 450px;
  /* height: 100px;  */
  border-radius: 4px;
  text-align: center;
  /* color: #fff; */
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.box1 {
  width: 1000px;
  height: 300px;
  position: relative;
  margin-top: 100px;
}
.shop {
  width: 200px;

  position: absolute;
  top: -43px;
  left: 20px;
}
.goods {
  width: 300px;

  position: absolute;
  top: 78px;
  left: 341px;
}
.pet {
  width: 300px;
  position: absolute;
  top: -211px;
  left: 308px;
}
.service {
  width: 200px;
  position: absolute;
  top: -90px;
  left: 795px;
}
.menu {
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
  height: 200px;
  /* border: 1px solid; */
}
#img {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
}
.testStyle {
  color: #303133;
  text-align: left;
}
.istyle {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid;
}
</style>