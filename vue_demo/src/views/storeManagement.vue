 <template>
  <div>
    <el-row>
      <el-header style="font-size:40px; color:white;height:80px;font-weight:bold;background-color:rgb(179, 192, 209);">爱宠邦</el-header>
      <input  type="hidden">
      <el-col class="container" style="display:flex" :span="24">
        <div class="home" style="width:201px;background-color: #545c64"> <el-button icon="el-icon-back" type="text" @click="goBack" style="width:75%;height:100px;color:coral">返回首页</el-button>
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          
        >
          <el-submenu index="/storeManagement">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span style="color:white">商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/storeManagement/addShopGoods">新增商品</el-menu-item>
              <el-menu-item index="/storeManagement/goodsList">查询商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span style="color:white">服务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/storeManagement/addShopService">新增服务</el-menu-item>
              <el-menu-item index="/storeManagement/findService">查询服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span style="color:white">宠物管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/storeManagement/addShopPets">新增宠物</el-menu-item>
              <el-menu-item index="/storeManagement/petsList">宠物列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span style="color:white">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
       this.$router.push(`/chooseServe`)
    }
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 600px;
}
.container {
  width: 100%;
}
</style>
