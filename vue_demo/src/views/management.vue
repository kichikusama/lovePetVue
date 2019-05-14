 <template>
        <div class="flex">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                router
                default-active="/management/users"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="/management">
                  <template slot="title">
                    <i class="el-icon-share"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group>
                   
                    <el-menu-item index="/management/users">用户列表</el-menu-item>

                     <el-menu-item index="/management/blackList">黑名单</el-menu-item>

                  

                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>门店管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/management/stores">门店</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>宠主管理</span>
                  </template>
                  <el-menu-item-group>
                    <!-- <el-menu-item index="/management/addmembers">新增宠主</el-menu-item> -->
                    <el-menu-item index="/management/membersList">宠主列表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
          <router-view></router-view>
        </div>

</template>

<script>
export default {
  name: "management",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack(){
       this.$router.push(`/chooseServe`)
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.flex {
  display: flex;
}
</style>
