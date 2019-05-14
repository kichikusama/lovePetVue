<template>
  <el-container>
    <el-header style="text-align: center; background-color: #B3C0D1;height:80px;">
      <h1>爱宠帮-门店管理</h1>
    </el-header>
    <div class="flex">
      <el-row class="tac">
        <div class="home" style="background-color:rgb(84, 92, 100)">
          <el-button
            icon="el-icon-back"
            type="text"
            @click="goBack"
            style="width:100%;color:red"
          >返回首页</el-button>
        </div>
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
              <span>新增门店</span>
            </template>
          </el-menu-item>

          <el-menu-item index="/manageStore/findStore">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>查找门店</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-row>
      <router-view></router-view>
    </div>
  </el-container>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.push(`/chooseServe`);
    }
  }
};
</script>

<style >
.home {
  background-color: azure;
}
</style>