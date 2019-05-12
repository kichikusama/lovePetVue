 <template>
        <div class="flex">
          <el-row class="tac">
            <el-col :span="12">
              <h5>进货管理</h5>
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
                    <span style="color:red">商品管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/stock/addGoods">新增商品</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span style="color:red">服务管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/stock/serve">新增服务</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span style="color:red">宠物管理</span>
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

</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.flex {
  display: flex;
}
h5{
  width: 100%
}
</style>
<script>
export default {
 
};
</script>