<template>
  <div el-container direction="vertical" class="demo-box">
    <div el-header style="width:100%;height:62px">Header</div>
    <div el-main style="width:100%;background-color:rgb(215, 222, 236)">
      <div style="width:300px;border:1px solid ">
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
          <div >
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
          <div >
            <el-collapse-transition>
              <div v-show="show2">
                <div class="transition-box">
                  <el-table :data="usersIndroduce.goodsId" style="width: 100%;">
                    <el-table-column prop="goodsName" label="名称" width="80"></el-table-column>
                    <el-table-column prop="goodsType" label="品类" width="80"></el-table-column>
                    <el-table-column prop="goodsPrice" label="价格" width="80"></el-table-column>
                    <el-table-column prop="" label="商品种类" width="80"></el-table-column>                
                  </el-table>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <div class="service">
          <el-button @click="show3 = !show3">服务</el-button>
          <div >
            <el-collapse-transition>
              <div v-show="show3">
                <div class="transition-box">
                  <el-table :data="usersIndroduce.serviceId" style="width: 100%">
                    <el-table-column prop="serviceName" label="服务名称" width="80"></el-table-column>
                    <el-table-column prop="serviceType" label="服务类型" width="80"></el-table-column>
                    <el-table-column prop="servicePrice" label="价格" width="80"></el-table-column>
                    <el-table-column prop="" label="种类统计" width="80"></el-table-column>
                    
                  </el-table>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <div class="pet">
          <el-button @click="show4 = !show4">宠物</el-button>
          <div >
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
      show4: false
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