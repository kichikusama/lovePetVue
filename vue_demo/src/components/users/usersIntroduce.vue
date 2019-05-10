<template>
  <div el-container direction="vertical" class="demo-box">
    <div el-header style="width:100%;">
      <h3>用户详情</h3>
    </div>
    <div el-main style="width:100%;background-color:#EBEEF5;position:relative">
      <el-alert
        class="tipStyle"
        title=""
        type="info"
        description="当用户涉及违规操作时，可点击‘设置->修改’当前用户状态为‘禁用’，并且可设置禁用时长。当用户违规次数超过三次，将被平台拉入黑名单！"
        show-icon
      ></el-alert>

      <div style="width:300px;position:relative">
        <i class="istyle el-icon-custom">
          <img :src="usersIndroduce.image" alt style="width:100px;height:100px">
        </i>
        <br>
        <span style="font-size:14px;color:#909399">
          用户名：
          <b>{{usersIndroduce.userName}}</b>
        </span>
        <div>
          <span class="textStyle">等级：</span>
          <template v-for="item in shops">
            <img
              :key="item._id"
              src="../../assets/icon/star_1.png"
              style="width:16px;height:16px"
              alt
            >
          </template>
          <span class="textStyle" v-if="shops.length>0">({{shops.length}}级)</span>
          <span class="textStyle" v-else>新用户哦~</span>
        </div>
        <span style="font-size:12px;color:#909399">ID:{{usersIndroduce._id}}</span>
      </div>
      <div class="box1">
        <div class="shop">
          <el-table :data="shops" style="width: 1000px;">
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="shopName" label="名称" width="150"></el-table-column>
            <el-table-column prop="shopLicenceNum" label="营业执照号码" width="150"></el-table-column>
            <el-table-column prop="shopAdd" label="营业地址" width="150"></el-table-column>
            <el-table-column prop="shopCommission" label="佣金比例" width="100"></el-table-column>
            <el-table-column prop="shopCorporate" label="法人" width="100"></el-table-column>
            <el-table-column prop label="经营时长" width="100"></el-table-column>
            <el-table-column prop label="月销量"></el-table-column>
          </el-table>
          <!-- <el-button @click="show1 = !show1">门店</el-button>
          <div>
            <el-collapse-transition>
              <div v-show="show1">
                <div class="transition-box">
                  
                </div>
              </div>
            </el-collapse-transition>
          </div>-->
        </div>
        <!-- <div class="goods">
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
        </div>-->
      </div>
      <div class="menu">
        <el-dropdown>
          <span class="el-dropdown-link" style="color:#909399">
            设置
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a @click="show()">修改</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a>删除用户</a>
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
          <el-form style="width:480px;margin:20px auto ">
            <el-form-item label="状态:" label-width="120" style="width:480px;margin:auto">
              <el-radio v-model="usersIndroduce.userStatus" label="1">可用</el-radio>
              <el-radio v-model="usersIndroduce.userStatus" label="2">禁用</el-radio>
            </el-form-item>
            <el-form-item
              label="违规原因："
              label-Width="100px"
              :rules="[
                 { required: true, message: '原因不能为空'},
                 
              ]"
            >
              <el-select v-model="usersIndroduce.againstReason" placeholder="请选择" style="width:80%">
                <el-option label="刷单" value="刷单"></el-option>
                <el-option label="卖假货" value="卖假货"></el-option>
                <el-option label="延迟发货" value="延迟发货"></el-option>
              </el-select>
            </el-form-item>

            <!-- <el-form-item label="自定义：" style="width:480px;margin:20px auto ">
              <el-input type="textarea" v-model="usersIndroduce.againstReason"></el-input>
            </el-form-item>-->
          </el-form>
          <el-form formGroup="validateForm" inline size="small">
            <el-form-item>
              <el-button type="primary" @click="sureUpdate">确认修改</el-button>
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
      isShow: false,
      stars: []
    };
  },
  watch: {},
  computed: {
    ...mapState(["shops", "usersIndroduce"])
  },
  methods: {
    ...mapActions(["usersListAsync", "deleteUserAsync", "againstUsersAsync"]),
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
    },
    sureUpdate() {
      let data = {
        _id: this.usersIndroduce._id,
        userStatus: "2",
        againstReason: this.usersIndroduce.againstReason
      };
      this.againstUsersAsync(data);
      this.isShow = !this.isShow;
    }
  },
  mounted() {
    // this.getStars();
  }
};
</script>
<style scope>
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
  /* margin-top: 100px; */
}
.textStyle {
  font-size: 14px;
  color: #909399;
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
}
.el-alert {
  position: absolute;
  width: 400px;
  height: 155px;
  /* border: 1px solid; */
  top: 20px;
  right: 100px;
}
</style>