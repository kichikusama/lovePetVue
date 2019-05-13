<template>
  <div>
    <h3>门店-待审核</h3>
    <div>
      <el-table :data="shops" center="all" style="width: 100%;text-align:center;" border>
            <el-table-column prop="shopName" label="门店名称" width="100"></el-table-column>
            <el-table-column prop="shopLicenceNum" label="营业执照号码" width="100"></el-table-column>
           
            <el-table-column prop="shopAdd" label="营业地址" width="100"></el-table-column>
            <el-table-column prop="shopLocation" label="定位" width="100"></el-table-column>
            <el-table-column prop="shopCorporate" label="法人" width="100"></el-table-column>
            <el-table-column prop="shopTel" label="联系电话" width="100"></el-table-column>
            <!-- <el-table-column prop="shopFeature" label="特色" width="100"></el-table-column> -->
            <!-- <el-table-column prop="shopCommission" label="佣金比例" width="100"></el-table-column> -->
           
            <el-table-column label="操作" width="150" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="">通过</el-button>      
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
  "shops" // 从状态机中获取 数据
);
export default {
  name: "ShopsAuditing",
   data() {
    return {
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
    ...mapState(["shops"])
  },
  methods: {
        // ...mapActions(["adoptUsersAsync"]),
        // adoptAuditing(updeteUser){
        //   this.adoptUsersAsync({_id:updeteUser._id,userStatus:"1"});
        //   // console.log(updeteUser);         
        // }
  },
};
</script>
<style>
</style>