<template>
   <div class="flex">
          <el-row class="tac">
            <el-col :span="12">
              <h5>门店管理</h5>
              <el-menu
                router
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-menu-item index="/manageStore/addStore">
                  <template slot="title">
                    <i class="el-icon-share"></i>
                    <span >新增门店</span>
                  </template>
                </el-menu-item>

                <el-menu-item index="/manageStore/findStore">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span >查找门店</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>

          <router-view></router-view>
        </div>
</template>
<script>
export default {};
</script>