 <template>
  <el-container>
    <el-header style="text-align: center; background-color: #B3C0D1;height:80px;">
      <h1>进货管理</h1>
    </el-header>
    <div class="flex">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            router
            default-active="/stock/shop"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-share"></i>
                <span style="color:white">商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/stock/addGoods">新增商品</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span style="color:white">服务管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/stock/addServe">新增服务</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span style="color:white">宠物管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/stock/addPets">新增宠物</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
      <router-view></router-view>
    </div>
  </el-container>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 700px;
  min-height: 400px;
}
.flex {
  display: flex;
}
h5 {
  width: 100%;
}
</style>
<script>
export default {};
</script>