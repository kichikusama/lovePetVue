 <template>
  <div>
    <el-row class="tac">
      <h5>爱宠帮-门店</h5>
      <el-col  style="display:flex;width:90%;" :span="12">
        
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="/storeManagement">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">新增商品</el-menu-item>
              <el-menu-item index="1-2">查询商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>服务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/storeManagement/addservice">新增服务</el-menu-item>
              <el-menu-item index="/storeManagement/findService">查询服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>宠物管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">新增宠物</el-menu-item>
              <el-menu-item index="1-2">查询宠物</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<script>
export default {
  methods: {}
};
</script>